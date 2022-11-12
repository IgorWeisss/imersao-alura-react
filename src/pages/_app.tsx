import type { AppProps } from 'next/app'
import { useContext } from 'react'
import { ThemeContext, ThemeProvider } from '../providers/ThemeProvider'
import '../styles/main.css'

function ProviderWrapper (props:any) {
  return (
    <ThemeProvider initialMode='dark'>
      {props.children}
    </ThemeProvider>
  )
}

function App({ Component, pageProps }: AppProps) {  

  const context = useContext(ThemeContext)
  
  return (
      <div className={context.mode}>
        <Component {...pageProps}/>
      </div>
  )
}

function _app (props:any) {
  return (
    <ProviderWrapper>
      <App {...props}/>
    </ProviderWrapper>
  )
}

export default _app