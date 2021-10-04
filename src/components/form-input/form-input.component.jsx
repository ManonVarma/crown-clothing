import React from 'react';

import './form-input.style.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className='group'>
            <input 
                className='form-input'
                onChange={handleChange} {...otherProps}
            />
            {
                label?  // does a label exist?
                    <label className={`${otherProps.value.length? 'shrink': ''} form-input-label`}>
                        {label}
                    </label>
                    : null // if label doesn't exist
            }
        </div>
    )
}

export default FormInput;
