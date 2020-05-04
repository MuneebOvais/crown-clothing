import React from 'react';

import './form-input.styles.scss';

// all other props passed to FormInput will come with the same name in otherProps
const FormInput = ({ handleChange, label, ...otherProps }) => { //destructuring props object and using spread operator
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps}/>
            { //we used JS syntax thats why we wrapped in {}
                label ?
                <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}                  
                </label>
                :null //null means nothing
            }
        </div>
    );
}

export default FormInput;