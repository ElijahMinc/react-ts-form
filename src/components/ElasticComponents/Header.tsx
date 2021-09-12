import React from 'react';

import {
   EuiHeader,
   EuiHeaderSectionItem,
   EuiHeaderLinks,
   EuiHeaderLink,
   EuiTitle
} from '@elastic/eui';

interface LinksInfo {
   id: number
   content: string
   href: string
   color?: string
   size?: string
   isDisabled?: boolean
   isLoading?: boolean
   isSelected?: boolean
   isActive?: boolean
}


interface IHeaderProps {
   links: Array<LinksInfo>
   title: string
}


const NavBar: React.FC<IHeaderProps> = ({
   links,
   title,
}) => {
   return (
      <EuiHeader theme="dark">
         <EuiHeaderSectionItem border="right" >
            <EuiTitle size="m" className="p-2 w-c">
               <h1>{title}</h1>
            </EuiTitle>
         </EuiHeaderSectionItem>
         <EuiHeaderSectionItem>
            <EuiHeaderLinks aria-label="App navigation links example">
               {links.map(({ id, content, color, size, isDisabled, isLoading, isSelected, isActive }) => (
                  <EuiHeaderLink
                     key={id}
                     isDisabled={isDisabled}
                     isLoading={isLoading}
                     isSelected={isSelected}
                     isActive={isActive}
                  >
                     {content}
                  </EuiHeaderLink>
               ))}
            </EuiHeaderLinks>
         </EuiHeaderSectionItem>
      </EuiHeader>
   )
};

export default NavBar