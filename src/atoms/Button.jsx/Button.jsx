import PropTypes from 'prop-types';
import './Button.css';
import clsx from 'clsx';


const btnTypes = {
    Primary: 'btn-primary',
    Secondary: 'btn-secondary',
    Danger: 'btn-danger',
    Neutral: 'btn-neutral',
    Warning: 'btn-warning'
}


export const Button = ({btnName, children,className = '' , variant='Primary'}) =>{
    const btnVariant = btnTypes[variant] || btnTypes.Primary
    return (
        <button className={clsx('btn', btnVariant, className)}>
            {btnName ?? children}
        </button>
    )
}

Button.propTypes = {
    className : PropTypes.string,
    variant : PropTypes.oneOf(['Primary', 'Secondary'])
}