import React, {PropTypes} from 'react';
import classNames from 'classnames';
import './index.styl';


/**
 * Поле ввода.
 */
export default function Input(props) {
	return (
		<div
			className={classNames({
				'adt-input': true,
				'adt-input--required': props.required,
				'adt-input--disabled': props.disabled,
			})}
		>
			<input
				className="adt-input__field"
				{...props}
			/>
		</div>
	);
}

Input.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	type: PropTypes.string,
	disabled: PropTypes.bool,
	required: PropTypes.bool,
};

Input.defaultProps = {
	value: '',
	onChange: () => {},
	type: 'text',
	disabled: false,
	required: false,
};
