import '@/styles/main.css'
import { AnimatePresence,  domAnimation, LazyMotion, m  } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config';
import Script from "next/script"
import { IntroContext } from 'context/intro';
import { useState } from 'react';

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
    visible: { y: '100%' },
    hidden: { y: '0%' }
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
              transition={{ delay: 2.2, duration: 0, ease: [0.83, 0, 0.17, 1] }}
              cl1assName="fixed inset-0 z-[1000] flex flex-wrap items-end h-screen min-h-screen max-h-screen p-[10px] cursor-wait"
            >
              <m.div 
                initial="visible"
                animate="hidden"
                variants={introEnd}
                transition={{ delay: 1, duration: 1.2, ease: [0.83, 0, 0.17, 1] }}
                className="bg-[#98928B] fixed inset-0 z-[1000] flex flex-wrap items-end h-screen min-h-screen max-h-screen p-[10px] cursor-wait"
              >
                <div className="relative w-full mt-auto overflow-hidden">
                  <m.div
                    initial="visible"
                    animate="hidden"
                    variants={introMarquee}
                    transition={{ delay: 0.1, duration: 0.55, ease: [0.83, 0, 0.17, 1] }}
                    className="w-full"
                  >
                    <svg id="Layer_2" className="w-1/2 m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.22 12.88"><g id="Layer_1-2"><g><path d="M0,12.88V0H9.32V1.52H1.71v3.95h7.13v1.51H1.71v4.39h7.91v1.52H0Z" fill="#231f20"/><path d="M15.25,12.88V1.52h-4.25V0h10.21V1.52h-4.26V12.88h-1.71Z" fill="#231f20"/></g></g></svg>
                  </m.div>
                </div>
              </m.div>
            </m.div>
        )}
        </LazyMotion>

      <div className={`transition-colors ease-in-out duration-[550ms] ${bodyColor}`}>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
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