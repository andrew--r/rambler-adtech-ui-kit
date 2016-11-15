import React, {PropTypes} from 'react';
import classNames from 'classnames';
import './index.styl';


/**
 * Многострочное поле ввода. Все пропсы компонента транслируются напрямую в <textarea />.
 */
export default function Textarea(props) {
	return (
		<div
			className={classNames({
				'adt-textarea': true,
				'adt-base-input': true,
				'adt-base-input--disabled': props.disabled,
			})}
		>
			<textarea
				className="adt-base-input__field adt-textarea__field"
				{...props}
			/>
		</div>
	);
}

Textarea.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
	required: PropTypes.bool,
};

Textarea.defaultProps = {
	value: '',
	onChange: () => {},
	disabled: false,
	required: false,
};
