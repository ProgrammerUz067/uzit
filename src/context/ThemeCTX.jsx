import { createContext } from 'preact'
import React from 'react'
export const ThemeProviderCTX = createContext() 

export default function ThemeCTX({children}) { 
  const [theme,setTheme] = React.useState('dark')

  return  <ThemeProviderCTX.Provider value={{theme, setTheme}}>{children}</ThemeProviderCTX.Provider>
  
  
}
