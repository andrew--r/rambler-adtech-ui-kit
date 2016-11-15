import React, {PropTypes} from 'react';
import classNames from 'classnames';
import './index.styl';


/**
 * Поле ввода. Все пропсы компонента транслируются напрямую в `<input />`.
 */
export default function Input(props) {
	return (
		<span
			className={classNames({
				'adt-input': true,
				'adt-base-input': true,
				'adt-base-input--disabled': props.disabled,
			})}
		>
			<input
				className="adt-base-input__field adt-input__field"
				{...props}
			/>
		</span>
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
	type: 'text',
	disabled: false,
	required: false,
};
