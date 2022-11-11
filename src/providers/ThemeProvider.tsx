import { createContext, useState } from "react"

interface ChildrenProps {
  children: JSX.Element
}

export const ThemeContext = createContext({
  mode: "",
  toggleMode: () => {console.log("AUEHUAHE")}
})

export function ThemeProvider({children}:ChildrenProps) {
  
  const [theme, setTheme] = useState('dark')

  const toggleMode = function () {
    console.log("Ativou Toggle")    
    theme === "" ? setTheme('dark') : setTheme('')
  }
  
  return (
    <ThemeContext.Provider value={{mode: "", toggleMode: toggleMode}}>
      <div className={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}