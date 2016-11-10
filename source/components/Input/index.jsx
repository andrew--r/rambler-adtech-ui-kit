import React, {PropTypes} from 'react';
import classNames from 'classnames';
import shortid from 'shortid';
import './index.styl';


/**
 * Поле ввода
 */
export default class Input extends React.Component {
	componentWillMount() {
		this.id = this.props.id || shortid.generate();
	}

	render() {
		const {props, id} = this;

		return (
			<div
				className={classNames({
					input: true,
					input_required: props.required,
				})}
			>
				{!!props.label && <label
					htmlFor={id}
					className="input-label"
				>{props.label}</label>}

				<div className="input-field_wrap">
					<input
						id={id}
						type={props.type}
						value={props.value}
						onChange={props.onChange}
						placeholder={props.placeholder}
						minLength={5}
						className="input-field"
						{...props.inputAttributes}
					/>
				</div>

				{props.error && <div className="input-error">{props.error}</div>}
			</div>
		);
	}
}

Input.propTypes = {
	/**
	 * Значение поля
	 */
	value: PropTypes.string.isRequired,
	/**
	 * Обработчик изменения значения
	 */
	onChange: PropTypes.func.isRequired,
	/**
	 * Тип поля
	 */
	type: PropTypes.string,
	/**
	 * Идентификатор поля, по умолчанию генерируется уникальная последовательность символов
	 */
	id: PropTypes.string,
	/**
	 * Подпись
	 */
	label: PropTypes.string,
	/**
	 * Плейсхолдер
	 */
	placeholder: PropTypes.string,
	/**
	 * Ошибка заполнения поля
	 */
	error: PropTypes.string,
	/**
	 * Индикатор обязательности заполнения
	 */
	required: PropTypes.bool,
	/**
	 * HTML-атрибуты для поля ввода
	 */
	inputAttributes: PropTypes.object, // eslint-disable-line react/forbid-prop-types

};

Input.defaultProps = {
	type: 'text',
	id: '',
	value: '',
	label: '',
	placeholder: '',
	error: '',
	required: false,
	inputAttributes: {},
};
