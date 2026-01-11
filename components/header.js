import { useState } from "react";
import FancyLink from "@/components/fancyLink";
import Container from "@/components/container";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { fade, reveal } from "@/helpers/transitions";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header({ isExhibitPage }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();

  return (
    <LazyMotion features={domAnimation}>
         

       
      <m.header initial="initial"
          animate="enter"
          exit="exit" 
          className={`top-0 z-20 w-full py-2 mb-4 duration-300 ease-in-out border-gray-200 md:py-10 md:py-3 md:mb-2 ${
        isExhibitPage ? 'bg-gray-200 text-white' : 'border-b-1 border-gray-200'
      }`}>
       
        <m.div variants={fade}>
          <div className="w-full px-8 py-2 mx-auto md:px-6 md:py-3">
            <div className="relative flex md:flex-wrap">
              <m.div>
                <Link href="/">
                  <a className="flex align-middle items-center font-bold text-[1.5rem] md:text-[2rem] uppercase leading-tight">
                    {/* <div className={"image-container2"}>
                      <Image
                        src="/jlogo1.png"
                        layout="fill"
                        className={"image"}
                        alt="me"
                        sizes="10vw"
                      />
                    </div> */}
                      <span className="hidden mt-2 mr-3 md:block">
                        <Image
                                       
                                          src="/ham-logo.png"
                                          width="40"
                                          height="40"
                                        />
                       
                      </span>
                      <span  className="block mt-1 mr-1 md:hidden mobile">
                         <Image
                                         
                                          src="/ham-logo.png"
                                          width="50"
                                          height="50"
                                        />
                      </span>
                     <span  className="block mt-1 ml-1 mr-1 md:ml-0 md:mt-2">
                         <Image
                                         
                                          src="/fontlogoET.svg"
                                          width="100"
                                          height="50"
                                        />
                      </span>
                  </a>
                </Link>
              </m.div>
              <nav className="flex items-center justify-end ml-auto text-sm font-semibold md:w-full md:space-x-6 md:justify-center md:text-base md:w-auto">
                <div className="relative hidden ease-in md:inline-block dropdown group">
                  <button className="text-[#242b2d] hover:text-yellow focus:text-yellow px-4 inline-flex items-center">
                    <span className="mr-1 tracking-[1.1px] link font-semibold ">About Us</span>
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul className="absolute hidden text-gray-700 pt-0 group-hover:block w-[230px] ease-in duration-300 z-50 dropdown-menu">
                    <Link href="/about">
                      <a className="block px-8 py-3 whitespace-no-wrap bg-gray-200 rounded-t hover:bg-gray-400">
                       Who We Are
                      </a>
                    </Link>
                    <Link href="/founder">
                      <a className="block px-8 py-3 whitespace-no-wrap bg-gray-200 hover:bg-gray-400">
                        Founder's Message
                      </a>
                    </Link>
                    <Link href="/leadership">
                      <a className="block px-8 py-3 whitespace-no-wrap bg-gray-200 rounded-b hover:bg-gray-400">
                        Leadership
                      </a>
                    </Link>
                    <Link href="/history">
                      <a className="block px-8 py-3 whitespace-no-wrap bg-gray-200 rounded-b hover:bg-gray-400">
                        History
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a className="block px-8 py-3 whitespace-no-wrap bg-gray-200 rounded-b hover:bg-gray-400">
                        Contact Us
                      </a>
                    </Link>
                  </ul>
                </div>
                <FancyLink
                  destination="/programs"
                  a11yText="Navigate to the programs page"
                  label="Programs"
                  extraClasses={`hidden md:inline-block hover:text-yellow link link--metis before:absolute neg-margin ${
                    router.pathname == "/programs" ? "text-yellow" : "text-[#242b2d]"
                  }`}
                />
                <FancyLink
                  destination="/projects"
                  a11yText="Navigate to the projects page"
                  label="Projects"
                  extraClasses={`hidden md:inline-block link link--metis before:absolute ${
                    router.pathname == "/projects" ? "text-yellow" : "text-[#242b2d]"
                  }`}
                />
                <FancyLink
                  destination="/essaysnews"
                  a11yText="Navigate to the essays page"
                  label="Essays/News"
                  extraClasses={`hidden md:inline-block link link--metis before:absolute ${
                    router.pathname == "/essaysnews" ? "text-yellow" : "text-[#242b2d]"
                  }`}
                />
              
                
                <div className="relative hidden ease-in md:inline-block dropdown group">
                  <button className="text-[#242b2d] hover:text-yellow  focus:text-yellow pr-2 inline-flex items-center">
                    <span className="mr-1 tracking-[1.1px] link font-semibold ">Join Us</span>
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul className="absolute hidden text-gray-700 pt-0  group-hover:block w-[230px] ease-in duration-300 z-50 dropdown-menu">
                    <Link href="/member">
                      <a className="block px-8 py-3 whitespace-no-wrap bg-gray-200 rounded-t hover:bg-gray-400">
                        Become a Member
                      </a>
                    </Link>
                    <Link href="/partner-with-us">
                      <a className="block px-8 py-3 whitespace-no-wrap bg-gray-200 rounded-t hover:bg-gray-400">
                        Become a Partner
                      </a>
                    </Link>
                    <Link href="/careers">
                      <a className="block px-8 py-3 whitespace-no-wrap bg-gray-200 hover:bg-gray-400">
                        Join Our Team
                      </a>
                    </Link>
                  </ul>
                </div>
                <Link href="/donate">
                  {/* <a className="hidden px-5 py-2 tracking-wider text-white uppercase rounded-lg btn-donate md:inline-block border-1 bg-blue hover:bg-black">
                    Donate
                  </a> */}
                  
                      <a className="hidden font-semibold btn md:flex btn--orange btn--donate">Donate</a>
                   
                </Link>
                <div className="mx-3 ml-5 mr-0 md:hidden xl:mx-5 2xl:mx-8 lg:hidden">
                  <button
                    className="p-1 align-middle btn btn--small btn--secondary-dark"
                    onClick={() => setIsNavOpen((prev) => !prev)}
                  >
                    {isNavOpen ? (
                      <span>Close</span>
                    ) : (
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h7"
                          />
                        </svg>
                      </span>
                    )}
                  </button>
                </div>
              </nav>
            </div>
             {/* <nav className="items-center justify-end hidden w-full mt-1 mr-1 space-x-2 text-sm md:mt-3 md:mr-0 md:flex md:text-base md:w-auto">
                <Link href="/" locale="en">
                  <a className="underline link link--metis lang-item before:absolute hover:underline focus:text-gray-900">
                    EN
                  </a>
                </Link>
                <div className="spacer vertical-line">|</div>
                <Link href="/" locale="ko">
                  <a className="underline link link--metis lang-item before:absolute hover:underline focus:text-gray-900">
                    KO
                  </a>
                </Link>
              </nav> */}
            {isNavOpen && (
              <div className="fixed top-0 bottom-0 left-0 right-0 z-40 w-full h-full px-8 text-white bg-[#d96e34] z-12 pt-2">
                <div className="flex flex-wrap items-center py-2 mb-6">
                  
                  <button
                    className="p-2 ml-auto btn--reset"
                    onClick={() => setIsNavOpen((prev) => !prev)}
                  >
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 18 18"
                    >
                      <path
                        fill="#FFF"
                        d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                      />
                    </svg> */}
                    Close
                  </button>
                </div>
                <nav aria-labelledby="mobileMenuOverlayLabel" className="mb-16">
                  <h2 id="mobileMenuOverlayLabel" className="sr-only">
                    Mobile Menu
                  </h2>
                  <ul>
                    <li className="mb-2 text-white lg:block">
                      <Link href="/">
                        <a
                          onClick={() => setIsNavOpen((prev) => !prev)}
                          activeClassName="is--active"
                          className="text-base text-white link hover:opacity-75 focus:opacity-75 hover:text-white focus:text-white"
                        >
                          Home
                        </a>
                      </Link>
                    </li>
                    <li key="" className="mb-2 text-white lg:block">
                      <div className="">
                  <div className="inline-flex items-center pr-2 text-base text-white focus:text-black">
                    <span className="mr-1 tracking-[1.1px]">About Us</span>
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                  <ul className="pt-1">
                    <Link href="/about">
                      <a className="block px-2 py-1 ml-2 text-base text-white whitespace-no-wrap border-l border-gray-500">
                       Who We Are
                      </a>
                    </Link>
                    <Link href="/founder">
                      <a className="block px-2 py-1 ml-2 text-base text-white whitespace-no-wrap border-l border-gray-500">
                       Founder's Message
                      </a>
                    </Link>
                    <Link href="/leadership">
                      <a className="block px-2 py-1 ml-2 text-base text-white whitespace-no-wrap border-l border-gray-500">
                       Leadership
                      </a>
                    </Link>
                    <Link href="/history">
                      <a className="block px-2 py-1 ml-2 text-base text-white whitespace-no-wrap border-l border-gray-500">
                       History
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a className="block px-2 py-1 ml-2 text-base text-white whitespace-no-wrap border-l border-gray-500">
                       Contact Us
                      </a>
                    </Link>
                  </ul>
                </div>
                    </li>
                    <li key="" className="mb-2 text-white lg:block">
                      <Link href="/programs">
                        <a
                          onClick={() => setIsNavOpen((prev) => !prev)}
                          activeClassName="is--active"
                          partiallyActive={true}
                          className="text-base text-white link hover:opacity-75 focus:opacity-75 hover:text-white focus:text-white"
                        >
                          Programs
                        </a>
                      </Link>
                    </li>
                    <li key="" className="mb-2 text-white lg:block">
                      <Link href="/projects">
                        <a
                          onClick={() => setIsNavOpen((prev) => !prev)}
                          activeClassName="is--active"
                          partiallyActive={true}
                          className="text-base text-white link hover:opacity-75 focus:opacity-75 hover:text-white focus:text-white"
                        >
                          Projects
                        </a>
                      </Link>
                    </li>
                    <li key="" className="mb-2 text-white lg:block">
                      <Link href="/essaysnews">
                        <a
                          onClick={() => setIsNavOpen((prev) => !prev)}
                          activeClassName="is--active"
                          partiallyActive={true}
                          className="text-base text-white link hover:opacity-75 focus:opacity-75 hover:text-white focus:text-white"
                        >
                         Essays/News
                        </a>
                      </Link>
                    </li>
                
                
                    <li>
                    <div className="">
                  <div className="inline-flex items-center pr-2 text-base text-white focus:text-black">
                    <span className="mr-1 tracking-[1.1px]">Join Us</span>
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                  <ul className="pt-1">
                    <Link href="/member">
                      <a className="block px-2 py-1 ml-2 text-base text-white whitespace-no-wrap border-l border-gray-500">
                        Become a Member
                      </a>
                    </Link>
                    <Link href="/partner-with-us">
                      <a className="block px-2 py-1 ml-2 text-base text-white whitespace-no-wrap border-l border-gray-500">
                        Become a Partner
                      </a>
                    </Link>
                    <Link href="/careers">
                      <a className="block px-2 py-1 ml-2 text-base text-white whitespace-no-wrap border-l border-gray-500">
                        Join Our Team
                      </a>
                    </Link>
                  </ul>
                </div>
                    </li>
                    {/* <li className="mb-2 text-white lg:block">
                      <Link
                        onClick={this.toggleOverlay}
                        to="/careers"
                        activeClassName="is--active"
                        className="text-2xl text-white link hover:opacity-75 focus:opacity-75 hover:text-white focus:text-white"
                      >
                        Careers
                      </Link>
                    </li> */}
                  </ul>
                </nav>
                <div className="fixed bottom-0 left-0 z-50 block w-full md:hidden">
                  <nav aria-labelledby="mobileMenuTrayToggle">
                    <h2 id="mobileMenuTrayToggle" className="sr-only">
                      Mobile Menu Tray
                    </h2>
                    {/* <ul className="flex flex-wrap items-center mb-2">
                      <nav className="flex items-center justify-center w-full space-x-3 text-sm text-xl md:text-base md:w-auto">
                        <Link href="/" locale="en">
                          <a className="link link--metis lang-item before:absolute hover:text-gray-900 focus:text-gray-900">
                            EN
                          </a>
                        </Link>
                        <div className="spacer vertical-line">|</div>
                        <Link href="/" locale="ko">
                          <a className="link link--metis lang-item before:absolute hover:text-gray-900 focus:text-gray-900">
                            KO
                          </a>
                        </Link>
                      </nav>
                    </ul> */}
                  </nav>
                </div>
              </div>
            )}
          </div>
        </m.div>
      </m.header>
    </LazyMotion>
  );
}
