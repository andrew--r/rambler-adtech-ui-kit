import React, {PropTypes} from 'react';
import assign from 'object-assign';
import * as d3 from 'd3';

import './index.styl';


function createBar(svg, data, barWidth, chartWidth, chartHeight, barColor, barBorderColor, props) {
	const {valueKey, margin} = props;

	const chartCanvas = svg.append('g')
		.attr('transform', `translate(${margin.left}, ${margin.top})`)
		.attr('width', chartWidth)
		.attr('height', chartHeight);

	const bar = chartCanvas.selectAll('g')
		.data(data)
		.enter()
		.append('g');

	const y = d3.scaleLinear()
		.domain([0, d3.max(data, (d) => Number(d[valueKey]))])
		.range([0, chartHeight]);

	bar.attr('class', 'chart-bar')
		.append('rect')
		.attr('class', 'bar-body')
		.attr('width', barWidth)
		.attr('height', (d) => y(d[valueKey]))
		.attr('x', (d, i) => i * barWidth)
		.attr('y', (d) => chartHeight - y(d[valueKey]))
		.attr('fill', barColor);

	bar.append('rect')
		.attr('class', 'bar-border')
		.attr('width', barWidth)
		.attr('height', (d) => (d[valueKey] > 0 ? 2 : 0))
		.attr('x', (d, i) => i * barWidth)
		.attr('y', (d) => chartHeight - y(d[valueKey]))
		.attr('fill', barBorderColor);

	return bar;
}

/**
 * Отрисовка по оси X
 */
function createAxisX(bar, chartHeight, barWidth, props) {
	bar.append('text')
		.attr('x', (d, i) => (i * barWidth) + (barWidth / 2))
		.attr('y', chartHeight + 16)
		.attr('class', () => 'axis x')
		.attr('text-anchor', 'middle')
		.text((d, i) => props.formatLabel(d[props.labelKey], i))
		.attr('font-family', 'helvetica')
		.attr('font-size', 8)
		.attr('fill', 'black');
}

/**
 * Отрисовка оси Y
 */
function createAxisY(svg, chartWidth, chartHeight, props) {
	const y = d3.scaleLinear()
		.domain([0, d3.max(props.data, (d) => Number(d[props.valueKey]))])
		.range([chartHeight, 0]);

	const yAxis = d3.axisLeft(y)
		.ticks(5)
		.tickPadding(0)
		.tickSizeInner(-chartWidth)
		.tickSizeOuter(0);

	const gy = svg.append('g')
		.attr('transform', `translate(${props.margin.left}, ${props.margin.top})`)
		.attr('class', 'y axis')
		.call(yAxis);

	gy.selectAll('g').filter((d) => d)
		.classed('minor', true);

	gy.selectAll('g').filter((d) => !d)
		.classed('hidden', true);

	gy.selectAll('text')
		.attr('font-family', 'helvetica')
		.attr('font-size', 8)
		.attr('fill', '#a6a6a6')
		.style('text-anchor', 'start')
		.attr('x', 5)
		.attr('y', 10)
		.text((d) => {
			if (d < 1) return d3.format(',')(d);
			return d3.format(',')(d).replace(/,/g, ' ').replace(/\./, ',');
		});
}

/**
 * Компонент отображения графика.
 *
 * @class
 * @extends React.Component
 * @param {boolean} props.showAxisX Показывать подпись оси X
 * @param {boolean} props.showAxisY Показывать подпись оси Y
 */
export default class CountPerTimeBarChart extends React.Component {
	componentDidMount() {
		const props = assign({}, this.props);
		this.renderGraph(props);
	}

	shouldComponentUpdate(nextProps) {
		const props = assign({}, nextProps);
		this.reusableGraph(props);
		return false;
	}

	/**
	 * Вторичная отрисовка графика
	 *
	 * @private
	 * @param {object} props Props компонента
	 * @return {Null}
	 */
	reusableGraph(props) {
		const width = props.width;
		const height = props.height;
		const chartWidth = width - props.margin.left - props.margin.right;
		const chartHeight = height - props.margin.top - props.margin.bottom;
		const data = props.data;
		const count = props.data.length;
		const barWidth = chartWidth / count;
		const barColor = 'rgba(25, 183, 226, 0.1)';
		const barBorderColor = '#01AFDE';

		const svg = d3.select(this.svg)
			.attr('style', 'shape-rendering: crispEdges;')
			.attr('width', width)
			.attr('height', height);

		svg.selectAll('rect').remove();
		svg.selectAll('.x.axis').remove();
		svg.selectAll('.y.axis').remove();

		const bar = createBar(
			svg,
			data,
			barWidth,
			chartWidth,
			chartHeight,
			barColor,
			barBorderColor,
			props
		);

		if (props.showAxisY) {
			createAxisY(svg, chartWidth, chartHeight, props);
		}

		if (props.showAxisX) {
			createAxisX(bar, chartHeight, barWidth, props);
		}
	}

	/**
	 * Первичная отрисовка графика
	 *
	 * @private
	 * @param {object} props Props компонента
	 * @return {Null}
	 */
	renderGraph(props) {
		d3.select(this.svg)
			.attr('width', props.width)
			.attr('height', props.height + this.props.margin.top + this.props.margin.bottom);

		this.reusableGraph(props);
	}

	render() {
		return (
			<svg ref={(ref) => (this.svg = ref)}>
				<g className="graph" />
			</svg>
		);
	}
}

CountPerTimeBarChart.propTypes = {
	/**
	 * Данные для отображения на графике
	 */
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	/**
	 * Ширина графика
	 */
	width: PropTypes.number.isRequired,
	/**
	 * Высота графика
	 */
	height: PropTypes.number.isRequired,
	/**
	 * Ключ для отображения подписей по оси X
	 */
	labelKey: PropTypes.string,
	/**
	 * Ключ для отображения значений по оси Y
	 */
	valueKey: PropTypes.string,
	/**
	 * Функция для форматирования подписей по оси X
	 */
	formatLabel: PropTypes.func,
	/**
	 * Внутренние отступы
	 */
	margin: PropTypes.shape({
		top: PropTypes.number,
		left: PropTypes.number,
		right: PropTypes.number,
		bottom: PropTypes.number,
	}),
	/**
	 * Показывать подписи по оси X
	 */
	showAxisX: PropTypes.bool,
	/**
	 * Показывать подписи по оси Y
	 */
	showAxisY: PropTypes.bool,
};

CountPerTimeBarChart.defaultProps = {
	data: [],
	width: 400,
	height: 100,
	x: 'text',
	y: 'value',
	formatLabel: (value) => value,
	margin: {
		top: 0,
		right: 0,
		bottom: 40,
		left: 0,
	},
	showAxisX: true,
	showAxisY: true,
};
