import React from 'react';

import {FormInputContainer,GroupContainer,FormInputLabel} from './form-input.styles';

const FormInput= ({label,handleChange,...props})=>(
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel className={props.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
)

export default FormInput;