import React, { createContext, useContext } from 'react';

interface IChildren {
   children: React.ReactElement | null
}

const DataContext = createContext<any>(null);


export const DataProvider: React.FC<IChildren> = ({ children }) => {

   const [data, setData] = React.useState<object>({});

   const changeData = (values: object): void => setData(prev => ({ ...prev, ...values }))

   return (
      <DataContext.Provider value={{ data, changeData }}>
         {children}
      </DataContext.Provider>
   )
}



export const useData = () => useContext(DataContext)