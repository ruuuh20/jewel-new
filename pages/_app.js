import '@/styles/main.css'
import { AnimatePresence,  domAnimation, LazyMotion, m  } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config';
import Script from "next/script"
import { IntroContext } from 'context/intro';
import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  const router = useRouter()
const [introContext, setIntroContext] = useState(false);

  const introEnd = {
    visible: { opacity: '100%' },
    hidden: { opacity: 0 }
  }
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      duration: 0,
      transition: {
      delayChildren: 1.5,
        staggerChildren: 0.44,
      }
    }
  }
  const introFullEnd = {
    visible: { visibility: 'block' },
    hidden: { visibility: 'hidden' }
  }
  const introMarquee = {
    // visible: { y: '100%' },
    // hidden: { y: '0' }
      visible: { opacity: 0 },
    hidden: { opacity: '100%' }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: '100%' }
  }

   const revealTranslate = {
    visible: { y: 0 },
    hidden: { y: '105%' }
  }

  const revealTranslateReverse = {
    visible: { y: '105%' },
    hidden: { y: 0 }
  }


   let bodyColor = 'bg-white'

  if (router.asPath == '/') {
    bodyColor = 'bg-[#fcfbf5] selection:bg-black selection:text-[#C6B9A7]'
  } else if (router.asPath == '/bio') {
    bodyColor = 'bg-[#E6C196] selection:bg-black selection:text-[#E6C196]'
  }

  return (
    <>
      <DefaultSeo {...SEO} />
      <IntroContext.Provider value={[introContext, setIntroContext]}>
     <LazyMotion features={domAnimation}>
        { !introContext && router.asPath == '/' && (
            <m.div 
              initial="visible"
              animate="hidden"
              variants={introFullEnd}
              transition={{ delay: 3.4, duration: 0, ease: [0.83, 0, 0.17, 1] }}
              className="fixed inset-0 z-[1000] flex flex-wrap items-end h-screen min-h-screen max-h-screen p-[10px] cursor-wait"
            >
              <m.div 
                initial="visible"
                animate="hidden"
                variants={introEnd}
                transition={{ delay: 1.3, duration: 1, ease: [0.83, 0, 0.17, 1] }}
                className="bg-[#D9D4AA] fixed inset-0 z-[1000] flex flex-wrap items-end h-screen min-h-screen max-h-screen p-[10px] cursor-wait"
              >
                <div className="relative flex w-full mt-auto overflow-hidden full-screen-bg">
                  <m.div
                    initial="visible"
                    animate="hidden"
                    variants={introMarquee}
                    transition={{ delay: 0.1, duration: 1, ease: [0.83, 0, 0.17, 1] }}
                    className="w-[100px] md:w-[200px]"
                  >
                   <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 193.43 75.12"><g id="Layer_1-2"><path d="m20.09,26.82v4.86H2.88V3.6h16.88v4.86h-10.4v6.66h9.36v4.68h-9.36v7.02h10.73Z"/><path d="m33.44,3.6c7.77,0,12.63,4.28,12.63,13.71,0,10.01-5.33,14.36-12.99,14.36h-9.04V3.6h9.4Zm0,23.4c3.56,0,6.01-2.52,6.01-9.36s-2.45-9.36-6.7-9.36h-2.23v18.72h2.92Z"/><path d="m73.08,3.6v18c0,7.23-4.68,10.44-11.34,10.44s-11.34-3.2-11.34-10.44V3.6h6.66v17.71c0,4.25,1.94,6.01,4.68,6.01s4.68-1.76,4.68-6.01V3.6h6.66Z"/><path d="m100.29,22.68c-1.55,6.37-5,9.36-10.76,9.36-7.99,0-12.13-4.86-12.13-14.4,0-8.89,4.54-14.4,11.81-14.4,5.87,0,9.68,3.17,10.69,8.89l-6.7,1.51c-.36-3.96-1.73-5.72-4.36-5.72-2.92,0-4.61,3.38-4.61,9.47s1.87,9.97,4.82,9.97c2.52,0,3.74-1.58,4.32-5.54l6.91.86Z"/><path d="m126.18,31.68h-6.66l-1.62-6.59h-8.6l-1.58,6.59h-6.16l7.16-28.08h10.26l7.2,28.08Zm-11.66-20.52c-.32-1.26-.61-2.56-.79-3.85h-.18c-.22,1.3-.5,2.59-.83,3.85l-2.2,8.89h6.16l-2.16-8.89Z"/><path d="m147.06,8.82h-7.56v22.86h-6.48V8.82h-7.56V3.6h21.6v5.22Z"/><path d="m167.86,26.82v4.86h-17.21V3.6h16.88v4.86h-10.4v6.66h9.36v4.68h-9.36v7.02h10.73Z"/><path d="m22.32,41.82h-7.56v22.86h-6.48v-22.86H.72v-5.22h21.6v5.22Z"/><path d="m47.66,50.64c0,10.08-4.93,14.4-11.95,14.4s-11.95-4.32-11.95-14.4,4.93-14.4,11.95-14.4,11.95,4.32,11.95,14.4Zm-7.02,0c0-7.13-1.76-9.72-4.93-9.72s-4.93,2.59-4.93,9.72,1.76,9.72,4.93,9.72,4.93-2.59,4.93-9.72Z"/><path d="m73.69,49.31c.11,1.08.14,1.98.14,3.06,0,8.06-3.92,12.71-11.16,12.71-7.99,0-12.13-4.9-12.13-14.43,0-8.89,4.54-14.4,11.81-14.4,5.87,0,9.68,3.17,10.69,8.89l-6.7,1.51c-.32-3.92-1.62-5.72-4.1-5.72-3.13,0-4.86,3.35-4.86,9.47,0,6.8,1.87,10.19,5.58,10.19,2.84,0,4.25-2.2,4.28-6.77h-5.15v-4.5h11.59Z"/><path d="m95.36,59.82v4.86h-17.21v-28.08h16.88v4.86h-10.4v6.66h9.36v4.68h-9.36v7.02h10.73Z"/><path d="m118.76,41.82h-7.56v22.86h-6.48v-22.86h-7.56v-5.22h21.6v5.22Z"/><path d="m145.04,36.6v28.08h-6.66v-11.7h-9.36v11.7h-6.66v-28.08h6.66v11.16h9.36v-11.16h6.66Z"/><path d="m168.01,59.82v4.86h-17.21v-28.08h16.88v4.86h-10.4v6.66h9.36v4.68h-9.36v7.02h10.73Z"/><path d="m185.36,64.68l-4.21-10.26h-2.7v10.26h-6.48v-28.08h9.47c5.79,0,9.9,2.63,9.9,8.24,0,4-1.73,6.33-4.5,7.52l6.05,12.31h-7.52Zm-6.91-15.05h2.3c2.56,0,4.1-1.12,4.1-4.1s-1.55-4.25-4.1-4.25h-2.3v8.35Z"/></g></svg>
                  </m.div>
                </div>
              </m.div>
            </m.div>
        )}
        </LazyMotion>

      <div className={`transition-colors ease-in-out duration-[550ms] ${bodyColor}`}>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
          <Analytics />
      </AnimatePresence>
      </div>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}/>
       <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      </IntroContext.Provider>
    </>
  )
}