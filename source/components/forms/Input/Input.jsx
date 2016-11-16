import React, {PropTypes} from 'react';
import classNames from 'classnames';
import VendorMaskedInput from 'react-input-mask';
import assign from 'object-assign';
import filterObjectByKeys from '_utils/filter-object-by-keys';
import './index.styl';


// пропсы, которые не нужно прокидывать в <input />
const maskedinputExcludeProps = {
	leftIconComponent: true,
	rightIconComponent: true,
};

const inputExcludeProps = assign({}, maskedinputExcludeProps, {
	mask: true,
	maskChar: true,
	formatChars: true,
	alwaysShowMask: true,
});


/**
 * Поле ввода. Поддерживает все стандартные атрибуты элемента `<input />`.
 */
export default function Input(props) {
	const rootClassName = classNames({
		'adt-input': true,
		'adt-base-input': true,
		'adt-base-input--disabled': props.disabled,
		'adt-base-input--has-left-icon': props.leftIconComponent,
		'adt-base-input--has-right-icon': props.rightIconComponent,
	});

	const fieldClassName = classNames({
		'adt-base-input__field': true,
		'adt-input__field': true,
	});

	let fieldComponent;
	let leftIcon;
	let rightIcon;

	if (props.leftIconComponent) {
		leftIcon = (
			<span className="adt-base-input__icon adt-base-input__icon--left">
				{props.leftIconComponent}
			</span>
		);
	}

	if (props.rightIconComponent) {
		rightIcon = (
			<span className="adt-base-input__icon adt-base-input__icon--right">
				{props.rightIconComponent}
			</span>
		);
	}

	if (props.mask) {
		fieldComponent = (
			<VendorMaskedInput
				className={fieldClassName}
				{...filterObjectByKeys(props, maskedinputExcludeProps)}
			/>
		);
	} else {
		fieldComponent = (
			<input
				className={fieldClassName}
				{...filterObjectByKeys(props, inputExcludeProps)}
			/>
		);
	}

	return (
		<span className={rootClassName}>
			{Boolean(leftIcon) && leftIcon}
			{fieldComponent}
			{Boolean(rightIcon) && rightIcon}
		</span>
	);
}

Input.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	type: PropTypes.string,
	/**
	 * Иконка слева, 16×16
	 */
	leftIconComponent: PropTypes.node,
	/**
	 * Иконка справа, 16×16
	 */
	rightIconComponent: PropTypes.node,
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
	leftIconComponent: null,
	rightIconComponent: null,
	mask: '',
	maskChar: '_',
	alwaysShowMask: false,
	disabled: false,
	required: false,
};
