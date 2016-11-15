import React, {PropTypes} from 'react';
import classNames from 'classnames';
import './index.styl';


/**
 * Component description
 */
export default function Checkbox(props) {
	return (
		<span
			className={classNames({
				'adt-checkbox': true,
				'adt-checkbox--bordered': props.bordered,
			})}
		>
			<input
				type="checkbox"
				id={props.id}
				name={props.name}
				checked={props.checked}
				className="adt-checkbox__input"
				onChange={props.onChange}
			/>
			<label
				htmlFor={props.id}
				className="adt-checkbox__label"
			>{props.children}</label>
		</span>
	);
}

Checkbox.propTypes = {
	children: PropTypes.node,
	id: PropTypes.string,
	name: PropTypes.string,
	checked: PropTypes.bool,
	bordered: PropTypes.bool,
	onChange: PropTypes.func,
};

Checkbox.defaultProps = {
	children: null,
	id: '',
	name: '',
	checked: false,
	bordered: false,
	onChange: () => {},
};
