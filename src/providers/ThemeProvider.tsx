import { createContext, useContext, useState } from "react"

export const ThemeContext = createContext({
  mode: "dark",
  toggleMode: function () {}
})

interface ThemeProviderProps {
  children: JSX.Element
  initialMode: string
}

export function ThemeProvider ({children, initialMode}:ThemeProviderProps) {
  
  const [mode, setMode] = useState(initialMode)

  function toggleMode () {
    mode === "" ? setMode('dark') : setMode('')
  }

  return (
    <ThemeContext.Provider value={{mode: mode, toggleMode: toggleMode}}>
      {children}
    </ThemeContext.Provider>
  )
}