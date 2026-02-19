import { useState, useEffect } from "react";
import FancyLink from "@/components/fancyLink";
import Container from "@/components/container";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { fade, reveal } from "@/helpers/transitions";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header({ isExhibitPage }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Detect scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if we're on homepage for transparent header
  const isHomepage = router.pathname === "/";

  return (
    <LazyMotion features={domAnimation}>
      <m.header
        initial="initial"
        animate="enter"
        exit="exit"
        className={`
          fixed top-0 left-0 right-0 z-50 w-full
          transition-all duration-300 ease-in-out
          ${isHomepage && !isScrolled 
            ? 'bg-transparent' 
            : 'bg-white border-b border-gray-200 shadow-md'
          }
          ${isExhibitPage ? 'bg-gray-200 text-white' : ''}
          py-3 md:py-4
        `}
      >
        <m.div variants={fade}>
          <div className="w-full px-8 py-2 mx-auto md:px-6">
            <div className="relative flex md:flex-wrap">
              <m.div>
                <Link href="/">
                  <a className="flex align-middle items-center font-bold text-[1.5rem] md:text-[2rem] uppercase leading-tight">
                    <span className="hidden mt-2 mr-3 md:block">
                      <Image
                        src="/ham-logo.png"
                        width="40"
                        height="40"
                      />
                    </span>
                    <span className="block mt-1 mr-1 md:hidden mobile">
                      <Image
                        src="/ham-logo.png"
                        width="35" height="35" 
                      />
                    </span>
                    <span className="block mt-1 ml-1 mr-1 md:ml-0 md:mt-2">
                      <Image
                        src="/fontlogoET.svg"
                       width="50" height="50" 
                      />
                    </span>
                  </a>
                </Link>
              </m.div>

              <nav className="flex items-center justify-end ml-auto text-sm font-semibold md:w-full md:space-x-6 md:justify-center md:text-base md:w-auto">
                {/* About Us Dropdown */}
                <div className="relative hidden ease-in md:inline-block dropdown group">
                  <button 
                    className={`
                      hover:text-[#c17854] focus:text-[#c17854] px-4 inline-flex items-center
                      transition-colors duration-200
                      text-[#242b2d] 
                    `}
                  >
                    <span className="mr-1 tracking-[1.1px] link font-semibold">About Us</span>
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
                      <a className="block px-8 py-3 whitespace-no-wrap bg-white hover:bg-[#f8fafc] border-b border-gray-100 first:rounded-t-lg">
                        Who We Are
                      </a>
                    </Link>
                    <Link href="/founder">
                      <a className="block px-8 py-3 whitespace-no-wrap bg-white hover:bg-[#f8fafc] border-b border-gray-100">
                        Founder's Message
                      </a>
                    </Link>
                    <Link href="/leadership">
                      <a className="block px-8 py-3 whitespace-no-wrap bg-white hover:bg-[#f8fafc] border-b border-gray-100">
                        Leadership
                      </a>
                    </Link>
                    <Link href="/history">
                      <a className="block px-8 py-3 whitespace-no-wrap bg-white hover:bg-[#f8fafc] border-b border-gray-100">
                        History
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a className="block px-8 py-3 whitespace-no-wrap bg-white hover:bg-[#f8fafc] rounded-b-lg">
                        Contact Us
                      </a>
                    </Link>
                  </ul>
                </div>

                {/* Programs Link */}
                <Link href="/programs">
                  <a className={`
                    hidden md:inline-block link font-semibold tracking-[1.1px]
                    hover:text-[#c17854] transition-colors duration-200
                    ${router.pathname === "/programs" ? "text-[#c17854]" : ""}
                    ${isHomepage && !isScrolled && router.pathname !== "/programs" ? "text-white" : ""}
                    text-[#242b2d] 
                  `}>
                    Programs
                  </a>
                </Link>

                {/* Projects Link */}
                <Link href="/projects">
                  <a className={`
                    hidden md:inline-block link font-semibold tracking-[1.1px]
                    hover:text-[#c17854] transition-colors duration-200
                    ${router.pathname === "/projects" ? "text-[#c17854]" : ""}
                    ${isHomepage && !isScrolled && router.pathname !== "/projects" ? "text-white" : ""}
                    text-[#242b2d] 
                  `}>
                    Projects
                  </a>
                </Link>

                {/* Essays/News Link */}
                <Link href="/essaysnews">
                  <a className={`
                    hidden md:inline-block link font-semibold tracking-[1.1px]
                    hover:text-[#c17854] transition-colors duration-200
                    ${router.pathname === "/essaysnews" ? "text-[#c17854]" : ""}
                    ${isHomepage && !isScrolled && router.pathname !== "/essaysnews" ? "text-white" : ""}
                    text-[#242b2d] 
                  `}>
                    Essays/News
                  </a>
                </Link>

                {/* Join Us Dropdown */}
                <div className="relative hidden ease-in md:inline-block dropdown group">
                  <button 
                    className={`
                      hover:text-[#c17854] focus:text-[#c17854] pr-2 inline-flex items-center
                      transition-colors duration-200
                     text-[#242b2d] 
                    `}
                  >
                    <span className="mr-1 tracking-[1.1px] link font-semibold">Join Us</span>
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul className="absolute hidden text-gray-700 pt-0 group-hover:block w-[230px] ease-in duration-300 z-50 dropdown-menu">
                    <Link href="/member">
                      <a className="block px-8 py-3 whitespace-no-wrap bg-white hover:bg-[#f8fafc] border-b border-gray-100 rounded-t-lg">
                        Become a Member
                      </a>
                    </Link>
                    <Link href="/partner-with-us">
                      <a className="block px-8 py-3 whitespace-no-wrap bg-white hover:bg-[#f8fafc] border-b border-gray-100">
                        Become a Partner
                      </a>
                    </Link>
                    <Link href="/careers">
                      <a className="block px-8 py-3 whitespace-no-wrap bg-white hover:bg-[#f8fafc] rounded-b-lg">
                        Join Our Team
                      </a>
                    </Link>
                  </ul>
                </div>

                {/* Donate Button */}
              <Link href="/donate">
  <a className="hidden md:inline-flex items-center justify-center px-8 py-4 font-bold bg-[#c17854] text-white hover:bg-[#a85232] transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg">
    Donate
  </a>
</Link>

                {/* Mobile Menu Toggle */}
                <div className="mx-3 ml-5 mr-0 md:hidden xl:mx-5 2xl:mx-8 lg:hidden">
                  <button
                    className={`
                      p-1 align-middle btn btn--small
                      ${isHomepage && !isScrolled ? 'text-white border-white' : 'btn--secondary-dark'}
                    `}
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
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h7"
                          />
                        </svg>
                      </span>
                    )}
                  </button>
                </div>
              </nav>
            </div>

            {/* Mobile Menu Overlay */}
            {isNavOpen && (
              <div className="fixed top-0 bottom-0 left-0 right-0 z-40 w-full h-full px-8 text-white bg-[#d96e34] z-12 pt-2">
                <div className="flex flex-wrap items-center py-2 mb-6">
                  <button
                    className="p-2 ml-auto btn--reset"
                    onClick={() => setIsNavOpen((prev) => !prev)}
                  >
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
                          className="text-base text-white link hover:opacity-75 focus:opacity-75 hover:text-white focus:text-white"
                        >
                          Home
                        </a>
                      </Link>
                    </li>
                    <li className="mb-2 text-white lg:block">
                      <div>
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
                    <li className="mb-2 text-white lg:block">
                      <Link href="/programs">
                        <a
                          onClick={() => setIsNavOpen((prev) => !prev)}
                          className="text-base text-white link hover:opacity-75 focus:opacity-75 hover:text-white focus:text-white"
                        >
                          Programs
                        </a>
                      </Link>
                    </li>
                    <li className="mb-2 text-white lg:block">
                      <Link href="/projects">
                        <a
                          onClick={() => setIsNavOpen((prev) => !prev)}
                          className="text-base text-white link hover:opacity-75 focus:opacity-75 hover:text-white focus:text-white"
                        >
                          Projects
                        </a>
                      </Link>
                    </li>
                    <li className="mb-2 text-white lg:block">
                      <Link href="/essaysnews">
                        <a
                          onClick={() => setIsNavOpen((prev) => !prev)}
                          className="text-base text-white link hover:opacity-75 focus:opacity-75 hover:text-white focus:text-white"
                        >
                          Essays/News
                        </a>
                      </Link>
                    </li>
                    <li>
                      <div>
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
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </m.div>
      </m.header>
    </LazyMotion>
  );
}