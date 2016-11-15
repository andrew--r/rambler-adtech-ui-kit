import React, {PropTypes} from 'react';
import classNames from 'classnames';
import VendorMaskedInput from 'react-input-mask';
import './index.styl';


/**
 * Поле ввода. Все пропсы компонента транслируются напрямую в `<input />`.
 */
export default function Input(props) {
	const rootClassName = classNames({
		'adt-input': true,
		'adt-base-input': true,
		'adt-base-input--disabled': props.disabled,
	});

	const fieldClassName = classNames({
		'adt-base-input__field': true,
		'adt-input__field': true,
	});

	let fieldComponent;

	if (props.mask) {
		fieldComponent = (
			<VendorMaskedInput
				className={fieldClassName}
				{...props}
			/>
		);
	} else {
		fieldComponent = (
			<input
				className={fieldClassName}
				{...props}
			/>
		);
	}

	return (
		<span className={rootClassName}>
			{fieldComponent}
		</span>
	);
}

Input.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	type: PropTypes.string,
	/**
	 * Символы, формирующие маску:<br>
	 * `9`: `0-9`<br>
	 * `a`: `A-Z`, `a-z`<br>
	 * `*`: `A-Z`, `a-z`, `0-9`<br>
	 */
	mask: PropTypes.string,
	/**
	 * Символ для незаполненной части поля
	 */
	maskChar: PropTypes.string,
	/**
	 * Пользовательские символы для формирования маски
	 */
	formatChars: PropTypes.objectOf(PropTypes.string),
	/**
	 * Показывать маску всегда
	 */
	alwaysShowMask: PropTypes.bool,
	disabled: PropTypes.bool,
	required: PropTypes.bool,
};

Input.defaultProps = {
	type: 'text',
	mask: '',
	maskChar: '_',
	alwaysShowMask: false,
	disabled: false,
	required: false,
};
