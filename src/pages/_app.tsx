import type { AppProps } from 'next/app'
import Head from 'next/head'

import { useContext, useEffect } from 'react'

import { ThemeContext, ThemeProvider } from '../providers/ThemeProvider'
import { ToastContainer } from 'react-toastify'
import { RegisterVideoModal } from '../components/RegisterVideoModal'
import { X } from 'phosphor-react'

import 'react-toastify/dist/ReactToastify.css';
import '../styles/main.css'

const CloseButton = ({ closeToast }:any) => (
  <X color={"var(--textColorBase)"} onClick={closeToast}/>
);

function App({ Component, pageProps }: AppProps) {  

  const context = useContext(ThemeContext)

  useEffect(() => {
    const themeDiv = document.querySelector('#themeDiv') || document.body
    const color = getComputedStyle(themeDiv).getPropertyValue('--backgroundBase')
    document.querySelector('#themeTag')?.setAttribute('content', color)
    document.documentElement.setAttribute('style', `background-color: ${color};`)
  },[context.mode])
  
  return (
    <>
      <div id='themeDiv' className={context.mode}>
        <RegisterVideoModal />
        <ToastContainer 
          theme='dark'
          position='bottom-right'
          toastClassName={"bg-backgroundLevel2 text-textColorBase"}
          progressClassName={"bg-videoCardOverlay"}
          closeButton={CloseButton}
        />
        <Component {...pageProps}/>
      </div>
    </>
  )
}

function ProviderWrapper (props:any) {
  return (
    <>
      <Head>
        <title>DevTube</title>
        <meta id='themeTag' name="theme-color" content=''></meta>
        <link rel="icon" href="https://www.youtube.com/s/desktop/ff71ea81/img/favicon_32x32.png" sizes="32x32"></link>
        <link rel="icon" href="https://www.youtube.com/s/desktop/ff71ea81/img/favicon_48x48.png" sizes="48x48"></link>
        <link rel="icon" href="https://www.youtube.com/s/desktop/ff71ea81/img/favicon_96x96.png" sizes="96x96"></link>
        <link rel="icon" href="https://www.youtube.com/s/desktop/ff71ea81/img/favicon_144x144.png" sizes="144x144"></link>
      </Head>
      <ThemeProvider initialMode='dark'>
        <App {...props}/>
      </ThemeProvider>
    </>
  )
}

export default ProviderWrapper