import React, {PropTypes} from 'react';
import classNames from 'classnames';
import './index.styl';


/**
 * Кнопка.
 */
export default function Button(props) {
	const className = classNames({
		button: true,
		[`button--${props.size}`]: true,
		'button--bordered': props.bordered,
		'button--disabled': props.disabled,
		'button--fullwidth': props.fullWidth,
	});
	const onClickHandler = (...args) => {
		if (!props.disabled) {
			props.onClick(...args);
		}
	};

	let leftIcon = null;

	if (props.leftIcon) {
		leftIcon = (
			<span className="button__icon" style={{backgroundImage: `url(${props.leftIcon})`}} />
		);
	}

	if (props.href) {
		return (
			<a
				href={props.href}
				className={className}
				onClick={onClickHandler}
			>
				<span className="button__inner">
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
				<span className="button__inner">
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
