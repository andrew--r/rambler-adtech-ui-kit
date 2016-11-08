import React, {PropTypes} from 'react';
import './index.styl';


/**
 * The only true button.
 */
export default function Button(props) {
	const {color, size, children} = props;
	const styles = {
		color,
		fontSize: Button.sizes[size],
	};

	return (
		<button className="button" style={styles}>{children}</button>
	);
}

Button.propTypes = {
	/**
	 * Button label.
	 */
	children: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.oneOf(['small', 'normal', 'large']),
};

Button.defaultProps = {
	color: '#333',
	size: 'normal',
};

Button.sizes = {
	small: '10px',
	normal: '14px',
	large: '18px',
};
