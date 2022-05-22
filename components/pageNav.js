import Container from "./container";
import Link from 'next/link';

export default function PageNav({ heading }) {
  return(
    <div className="relative w-full">
     

      <Container>                      
        <nav className="m-auto md:w-2/3">
          <span className="block mb-8 text-xl font-medium text-center uppercase md:text-2xl text-blue">{heading ? heading : 'About Us'}</span>
          <ul className="flex flex-wrap">
            <li className="relative w-1/2 py-3 pl-6 md:py-6 md:pl-10">
              <Link href="/about">
                <a className="transition-all duration-300 ease-in-out blodfck group hover:pl-2">
                  <span className="w-3  h-3 border md:border-2 border-yellow opacity-75 rotate-45 group-hover:-rotate-45 group-focus:-rotate-45 transition-transform ease-in-out duration-300 block absolute top-0 left-0 mt-[24px] md:mt-[42px]"></span>
                  <span className="block mb-2 text-2xl font-display md:text-3xl lg:text-4xl text-slate pm rmd:mb-3">Our Mission</span>
                 
                </a>
              </Link>
            </li>
            <li className="relative w-1/2 py-3 pl-6 md:py-6 md:pl-10">
              <Link href="/founder">
                <a className="block transition-all duration-300 ease-in-out group hover:pl-2">
                  <span className="w-3 h-3  border md:border-2 border-yellow opacity-75 rotate-45 group-hover:-rotate-45 group-focus:-rotate-45 transition-transform ease-in-out duration-300 block absolute top-0 left-0 mt-[24px] md:mt-[42px]"></span>
                  <span className="block mb-2 text-2xl font-display md:text-3xl lg:text-4xl text-slate pm rmd:mb-3">Founder's Message</span>
                
                </a>
              </Link>
            </li>
            <li className="relative w-1/2 py-3 pl-6 md:py-6 md:pl-10">
              <Link href="/leadership">
                <a className="block transition-all duration-300 ease-in-out group hover:pl-2">
                  <span className="w-3 h-3 border md:border-2 border-yellow opacity-75 rotate-45 group-hover:-rotate-45 group-focus:-rotate-45 transition-transform ease-in-out duration-300 block absolute top-0 left-0 mt-[24px] md:mt-[42px]"></span>
                  <span className="block mb-2 text-2xl font-display md:text-3xl lg:text-4xl text-slate pm rmd:mb-3">Leadership</span>
            
                </a>
              </Link>
            </li>
            <li className="relative w-1/2 py-3 pl-6 md:py-6 md:pl-10">
              <Link href="/history">
                <a className="block transition-all duration-300 ease-in-out group hover:pl-2">
                  <span className="w-3 h-3 border md:border-2 border-yellow opacity-75 rotate-45 group-hover:-rotate-45 group-focus:-rotate-45 transition-transform ease-in-out duration-300 block absolute top-0 left-0 mt-[24px] md:mt-[42px]"></span>
                  <span className="block mb-2 text-2xl font-display md:text-3xl lg:text-4xl text-slate pm rmd:mb-3">Our History</span>
                 
                </a>
              </Link>
            </li>
            <li className="relative w-1/2 py-3 pl-6 md:py-6 md:pl-10">
              <Link href="/contact">
                <a className="block transition-all duration-300 ease-in-out group hover:pl-2">
                  <span className="w-3 h-3 border md:border-2 border-yellow opacity-75 rotate-45 group-hover:-rotate-45 group-focus:-rotate-45 transition-transform ease-in-out duration-300 block absolute top-0 left-0 mt-[24px] md:mt-[42px]"></span>
                  <span className="block mb-2 text-2xl font-display md:text-2xl lg:text-4xl text-slate pm rmd:mb-3">Contact</span>
                 
                </a>
              </Link>
            </li>
           
          </ul>
        </nav>
      </Container>
    </div>
  )
}