/* eslint-disable max-len */

import React, {PropTypes} from 'react';
import assign from 'object-assign';
import './index.styl';


/**
 * Component description
 */
export default function Loupe(props) {
	const {size} = props;
	const defaultStyles = {};

	if (size) {
		defaultStyles.width = defaultStyles.height = size;
	}

	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" style={assign(defaultStyles, props.style)}>
			<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<g transform="translate(-192.000000, -996.000000)" fill={props.fill}>
					<path d="M195.585871,1007.19433 C193.52881,1004.45241 193.747351,1000.54439 196.241493,998.050253 C198.975163,995.316582 203.407317,995.316582 206.140988,998.050253 C208.874658,1000.78392 208.874658,1005.21608 206.140988,1007.94975 C203.646829,1010.44391 199.738773,1010.66243 196.996856,1008.60533 C196.982134,1008.62222 196.966748,1008.63871 196.950699,1008.65475 L192.703859,1012.90159 C192.314494,1013.29096 191.684992,1013.29274 191.291745,1012.89949 C190.901221,1012.50897 190.904983,1011.87204 191.289645,1011.48738 L195.536486,1007.24054 C195.55255,1007.22448 195.569023,1007.20907 195.585871,1007.19433 L195.585871,1007.19433 Z M197.655706,1006.53553 C199.608328,1008.48816 202.774152,1008.48816 204.726774,1006.53553 C206.679395,1004.58291 206.679395,1001.41709 204.726774,999.464466 C202.774152,997.511845 199.608328,997.511845 197.655706,999.464466 C195.703085,1001.41709 195.703085,1004.58291 197.655706,1006.53553 L197.655706,1006.53553 Z" />
				</g>
			</g>
		</svg>
	);
}

Loupe.propTypes = {
	/**
	 * Размер иконки.<br>
	 */
	size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	/**
	 * Цвет заливки
	 */
	fill: PropTypes.string,
	/**
	 * Стиль корневого элемента `<svg>`
	 */
	style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Loupe.defaultProps = {
	size: '1em',
	fill: '#C1CBD6',
	style: {},
};
