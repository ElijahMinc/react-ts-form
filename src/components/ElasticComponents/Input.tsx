import React from 'react';
import {
   EuiFieldText,

} from '@elastic/eui';


export interface IOtherProps
   extends React.HTMLAttributes<HTMLInputElement> {
   // placeholder?: string // можно не указывать, т.к. мы наследуемся от HTMLAttr у инпутов
   label?: string
}


const Input = React.forwardRef<HTMLInputElement, IOtherProps>((props, ref) => (
   <>
      <EuiFieldText inputRef={ref} fullWidth {...props} />
   </>
))


export default Input