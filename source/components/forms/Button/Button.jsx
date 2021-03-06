import React, {PropTypes} from 'react';
import classNames from 'classnames';
import './index.styl';


/**
 * Кнопка.
 */
export default function Button(props) {
	const className = classNames({
		'adt-button': true,
		[`adt-button--${props.size}`]: true,
		'adt-button--bordered': props.bordered,
		'adt-button--disabled': props.disabled,
		'adt-button--fullwidth': props.fullWidth,
	});
	const onClickHandler = (...args) => {
		if (!props.disabled) {
			props.onClick(...args);
		}
	};

	let leftIcon = null;

	if (props.leftIconComponent) {
		leftIcon = (
			<span className="adt-button__icon">
				{props.leftIconComponent}
			</span>
		);
	}

	if (props.href) {
		return (
			<a
				href={props.href}
				className={className}
				onClick={onClickHandler}
			>
				<span className="adt-button__inner">
					{leftIcon}
					{props.children}
				</span>
			</a>
		);
	} else { // eslint-disable-line no-else-return
		return (
			<button
				type={props.submit ? 'submit' : null}
				disabled={props.disabled}
				className={className}
				onClick={onClickHandler}
			>
				<span className="adt-button__inner">
					{leftIcon}
					{props.children}
				</span>
			</button>
		);
	}
}

Button.propTypes = {
	children: PropTypes.node,
	href: PropTypes.string,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	/**
	 * Адрес или base64 uri иконки
	 */
	leftIcon: PropTypes.string,
	/**
	 * Компонент иконки
	 */
	leftIconComponent: PropTypes.node,
	/**
	 * Кнопка отправляет форму
	 */
	submit: PropTypes.bool,
	/**
	 * Займёт ли кнопка всю доступную ширину
	 */
	fullWidth: PropTypes.bool,
	bordered: PropTypes.bool,
	/**
	 * если `disabled={true}`, onClick не будет срабатывать
	 */
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	children: null,
	href: '',
	size: 'medium',
	leftIcon: '',
	fullWidth: false,
	bordered: false,
	disabled: false,
	onClick: () => {},
};
