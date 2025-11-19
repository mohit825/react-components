export const InputGroup = ({type, placeholder, onChangeHandler, className, ariaLabel,value}) =>{
    return (
        <div>
            <label>{placeholder}</label>
            <input type={type}
            onChange={onChangeHandler} 
            className={`input-group ${className}`}
            aria-label={ariaLabel}
            value={value}
            tabIndex={0}
            />
        </div>
    )
}