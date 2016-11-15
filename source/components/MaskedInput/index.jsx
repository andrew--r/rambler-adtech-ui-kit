import React, {PropTypes} from 'react';
import classNames from 'classnames';
import VendorMaskedInput from 'react-input-mask';
import './index.styl';


/**
 * Поле с маской ввода. Под капотом использует [react-input-mask](https://github.com/sanniassin/react-input-mask).
 *
 * Все пропсы прокидываются в компонент `react-input-mask`.
 */
export default function MaskedInput(props) {
	return (
		<span
			className={classNames({
				'adt-masked-input': true,
				'adt-base-input': true,
				'adt-base-input--disabled': props.disabled,
			})}
		>
			<VendorMaskedInput
				className="adt-base-input__field adt-masked-input__field"
				{...props}
			/>
		</span>
	);
}

MaskedInput.propTypes = {
	value: PropTypes.string.isRequired,
	mask: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	type: PropTypes.string,
	disabled: PropTypes.bool,
	required: PropTypes.bool,
};

MaskedInput.defaultProps = {
	type: 'text',
	disabled: false,
	required: false,
};
