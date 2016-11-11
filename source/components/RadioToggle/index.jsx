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
				'radio-toggle-item': true,
				'radio-toggle-item--active': props.active,
			})}
		>
			<input
				type="radio"
				value={props.label}
				checked={!!props.active}
				className="radio-toggle-item__input"
				onChange={props.onChange}
			/>
			<span className="radio-toggle-item__label">
				<span className="radio-toggle-item__text">{props.label}</span>
			</span>
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
