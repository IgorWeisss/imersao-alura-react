import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useContext, useEffect } from 'react'
import { ThemeContext, ThemeProvider } from '../providers/ThemeProvider'
import '../styles/main.css'

function App({ Component, pageProps }: AppProps) {  

  const context = useContext(ThemeContext)

  useEffect(() => {
    const themeDiv = document.querySelector('#themeDiv') || document.body
    const color = getComputedStyle(themeDiv).getPropertyValue('--backgroundBase')
    document.querySelector('#themeTag')?.setAttribute('content', color)
  },[context.mode])
  
  return (
    <>
      <div id='themeDiv' className={context.mode}>
        <Component {...pageProps}/>
      </div>
    </>
  )
}

function ProviderWrapper (props:any) {
  return (
    <>
      <Head>
        <title>AluraTube</title>
        <meta id='themeTag' name="theme-color" content=''></meta>
      </Head>
      <ThemeProvider initialMode='dark'>
        <App {...props}/>
      </ThemeProvider>
    </>
  )
}

export default ProviderWrapper