import React from 'react'
import {
   EuiHeader,
   EuiHeaderSectionItem,
   EuiHeaderLinks,
   EuiHeaderLink,
   EuiTitle
} from '@elastic/eui';



const NavBar: React.FC = () => {
   return (
      <EuiHeader theme="dark">
         <EuiHeaderSectionItem border="right" >
            <EuiTitle size="m" className="p-2 w-c">
               <h1>Elijah Minc</h1>
            </EuiTitle>
         </EuiHeaderSectionItem>
         <EuiHeaderSectionItem>
            <EuiHeaderLinks aria-label="App navigation links example">
               <EuiHeaderLink isActive>Forms</EuiHeaderLink>
               <EuiHeaderLink>Code</EuiHeaderLink>
            </EuiHeaderLinks>
         </EuiHeaderSectionItem>
      </EuiHeader>
   )
};

export default NavBar