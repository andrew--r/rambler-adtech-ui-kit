import React, {PropTypes} from 'react';
import classNames from 'classnames';
import './index.styl';


/**
 * Подпись к полю ввода.
 */
export default function Label(props) {
	return (
		<label
			htmlFor={props.htmlFor}
			className={classNames({
				label: true,
				'label--required': props.required,
			})}
		>
			<span className="label__text">
				{props.text}
			</span>

			{!!props.children && <span className="label__content">
				{props.children}
			</span>}
		</label>
	);
}

Label.propTypes = {
	children: PropTypes.node,
	htmlFor: PropTypes.string,
	text: PropTypes.string,
	required: PropTypes.bool,
};

Label.defaultProps = {
	children: null,
	htmlFor: '',
	text: '',
	required: false,
};
