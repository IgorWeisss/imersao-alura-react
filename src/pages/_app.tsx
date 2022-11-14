import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useContext, useEffect } from 'react'
import { ThemeContext, ThemeProvider } from '../providers/ThemeProvider'
import '../styles/main.css'

export function ProviderWrapper (props:any) {  
  return (
    <>
      <Head>
        <title>AluraTube</title>
        <meta id='themeTag' name="theme-color" content=''></meta>
      </Head>
      <ThemeProvider initialMode='dark'>
        {props.children}
      </ThemeProvider>
    </>
  )
}

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

export default function _app (props:any) {
  return (
    <ProviderWrapper>
      <App {...props}/>
    </ProviderWrapper>
  )
}