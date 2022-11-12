import { createContext, useState } from "react"

interface ChildrenProps {
  children: JSX.Element
  initialMode: string
}

export const ThemeContext = createContext({
  mode: "",
  toggleMode: () => {console.log("AUEHUAHE")}
})

export function ThemeProvider({children, initialMode}:ChildrenProps) {
  
  const [theme, setTheme] = useState(initialMode)

  const toggleMode = function () {
    theme === "" ? setTheme('dark') : setTheme('')
  }
  
  return (
    <ThemeContext.Provider value={{mode: theme, toggleMode: toggleMode}}>
        {children}
    </ThemeContext.Provider>
  )
}