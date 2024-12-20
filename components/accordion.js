import { useState, useContext } from 'react';
import Image from "next/image";
// import { SmoothScrollContext } from '../contexts/SmoothScroll.context'
import ImageStandard from './imageStandard';

export default function Accordion({ children, heading, index, icon, openOverride}) {
  const [open, setOpen] = useState(openOverride)

//   const { scroll } = useContext(SmoothScrollContext)
  
  function openToggle() {
    // setTimeout(() => scroll.update(), 500);
    setOpen(!open)
  }

  return(
    <div className={`border-b border-gray-500 w-full ${ index == '01' ? 'border-t' : ''}`}>
      <button className="block w-full p-0 m-0 text-left focus:outline-none focus:border-none wiggle-on-hover-container group " onClick={() => openToggle()}>
        <div className="py-6 cursor-pointer md:py-10 ring-blue">
          <div className="flex flex-wrap items-center">
            <span className="block pr-2 mt-0 text-xl text-gray-700 md:text-3xl md:-mt-1 md:w-1/3">{index}</span>
            <div className="flex-1 ml-auto md:w-2/3 ">
              <div className="flex flex-wrap items-center -mx-3">
                { icon && (
                  <div className="w-6 ml-5 mr-1 md:w-10 xl:w-14 md:ml-0 md:mr-3 xl:mr-5 wiggle-on-hover__item">
                    <ImageStandard
                      src={icon.url}
                      width={icon.metadata.dimensions.width}
                      height={icon.metadata.dimensions.height}
                      alt={`${heading} Icon`}
                      className="w-full"
                      layout="responsive"
                    />
                  </div>
                )}

                <span className="block text-xl md:text-4xl font-display  leading-tight mb-0 pb-0 px-3 flex-1 mt-[6px] md:mt-0 group-hover:opacity-50 transition-opacity ease-in-out duration-500 ">{heading}</span>
                <div className="px-3 ml-auto ">
                  <svg className={`w-4 md:w-6  transform mt-[6px] md:mt-1 transition ease-in-out duration-300 ${open ? 'rotate-0' : 'rotate-45' }`} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.305 27.132L26.354 2.084M26.354 27.132L1.306 2.083" stroke="#d96e34" strokeWidth="3.24"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`md:w-full md:px-10 ml-auto origin-top accordion-item ${ open ? 'accordion-item--open h-auto' : 'h-auto' }`}>
          <div className={`content text-lg text-gray-800 transition-opacity ease-in-out duration-500 delay-250 ${open ? 'opacity-100' : 'opacity-0' }`}>
            {children}
          </div>
        </div>
      </button>
    </div>
  )
}