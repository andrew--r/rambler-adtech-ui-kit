/* eslint-disable jsx-a11y/label-has-for */

import React, {PropTypes} from 'react';
import classNames from 'classnames';
import './index.styl';


/**
 * Переключатель для использования в группе.
 */
export default function RadioToggle(props) {
	return (
		<label
			className={classNames({
				radio_toggle_item: true,
				'radio_toggle_item--active': props.active,
			})}
		>
			<input
				type="radio"
				value={props.label}
				checked={!!props.active}
				className="radio_toggle_item-input"
				onChange={props.onChange}
			/>
			<span className="radio_toggle_item-label">{props.label}</span>
		</label>
	);
}

RadioToggle.propTypes = {
	/**
	 * Имя группы переключателей
	 */
	name: PropTypes.string.isRequired,
	/**
	 * Текст переключателя
	 */
	label: PropTypes.string.isRequired,
	/**
	 * Индикатор активности
	 */
	active: PropTypes.bool,
	/**
	 * Колбек, вызываемый при включении переключателя
	 */
	onChange: PropTypes.func,
};

RadioToggle.defaultProps = {
	active: false,
	onChange: () => {},
};
