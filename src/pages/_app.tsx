import type { AppProps } from 'next/app'
import { ThemeProvider } from '../providers/ThemeProvider'
import '../styles/main.css'

function App({ Component, pageProps }: AppProps) {

  
  return (
    <ThemeProvider>
      <Component {...pageProps}/>
    </ThemeProvider>
  )
}

export default App