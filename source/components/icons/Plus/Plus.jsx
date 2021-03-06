/* eslint-disable max-len */

import React, {PropTypes} from 'react';
import assign from 'object-assign';
import './index.styl';


/**
 * Плюсик
 */
export default function Plus(props) {
	const {size} = props;
	const defaultStyles = {};

	if (size) {
		defaultStyles.width = defaultStyles.height = size;
	}

	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" style={assign(defaultStyles, props.style)}>
			<g fill="none" fillRule="evenodd">
				<path d="m681 576v-4.993c0-.557-.448-1.01-1-1.01-.556 0-1 .451-1 1.01v4.993h-4.993c-.557 0-1.01.448-1.01 1 0 .556.451 1 1.01 1h4.993v4.993c0 .557.448 1.01 1 1.01.556 0 1-.451 1-1.01v-4.993h4.993c.557 0 1.01-.448 1.01-1 0-.556-.451-1-1.01-1h-4.993" transform="translate(-673-570)" fill={props.fill} />
			</g>
		</svg>

	);
}

Plus.propTypes = {
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

Plus.defaultProps = {
	size: '1em',
	fill: '#fff',
	style: {},
};
