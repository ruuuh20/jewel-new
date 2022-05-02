import { useState } from "react";
import FancyLink from "@/components/fancyLink";
import Container from "@/components/container";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="py-8 mb-4 border-gray-200 md:py-4 md:mb-6 xl:mb-8 ">
      <div className="max-w-[1500px] px-8 md:px-6 mx-auto w-full">
        <div className="relative flex md:flex-wrap">
          <Link href="/">
            <a className="font-bold text-[1.5rem] md:text-[2rem] uppercase font-semibold leading-tight">
              {/* <div className={"image-container2"}>
                <Image
                  src="/jlogo1.png"
                  layout="fill"
                  className={"image"}
                  alt="me"
                  sizes="10vw"
                />
              </div> */}
              JEWEL
            </a>
          </Link>

          <nav className="flex items-center justify-end w-full ml-auto mr-auto space-x-6 text-sm md:justify-center md:text-base md:w-auto">
            <div className="relative hidden ease-in md:inline-block dropdown group">
              <button className="text-[#242b2d] hover:text-black focus:text-black px-4 inline-flex items-center">
                <span className="mr-1 tracking-[1.1px]">About Us</span>
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
                    Our Mission
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
              extraClasses={`hidden md:inline-block link link--metis before:absolute neg-margin ${
                router.pathname == "/programs" ? "font-bold" : "text-[#242b2d]"
              }`}
            />
            <FancyLink
              destination="/projects"
              a11yText="Navigate to the projects page"
              label="Projects"
              extraClasses={`hidden md:inline-block link link--metis before:absolute ${
                router.pathname == "/projects" ? "font-bold" : "text-[#242b2d]"
              }`}
            />
            <FancyLink
              destination="/affiliates"
              a11yText="Navigate to the projects page"
              label="Affiliates"
              extraClasses={`hidden md:inline-block link link--metis before:absolute ${
                router.pathname == "/affiliates" ? "font-bold" : "text-[#242b2d]"
              }`}
            />
         

            <div className="relative hidden ease-in md:inline-block dropdown group">
              <button className="text-[#242b2d] hover:text-black focus:text-black pr-2 inline-flex items-center">
                <span className="mr-1 tracking-[1.1px]">Join Us</span>
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
                <Link href="/member">
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
              <a className="hidden px-4 py-2 text-white rounded md:inline-block border-1 bg-blue hover:bg-black">
                Donate
              </a>
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>
                  </span>
                )}
              </button>
            </div>
          </nav>

          <nav className="items-center justify-center hidden w-full space-x-2 text-sm md:flex md:text-base md:w-auto">
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
        </div>

        {isNavOpen && (
          <div className="fixed top-0 bottom-0 left-0 right-0 z-40 w-full h-full p-8 text-white bg-blue">
            <div className="flex flex-wrap items-center mb-8">
              <Link href="/">
                <a className="text-2xl font-semibold font-bold uppercase">
                  <div className={"image-container2"}>
                    <Image
                      src="/jlogo1.png"
                      layout="fill"
                      className={"image"}
                      alt="me"
                      sizes="50vw"
                    />
                  </div>
                </a>
              </Link>

              <button
                className="p-1 ml-auto btn--reset"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 18 18"
                >
                  <path
                    fill="#FFF"
                    d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                  />
                </svg>
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
              <div className="inline-flex items-center pr-2 text-base text-white opacity-70 focus:text-black">
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
                    Our Mission
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
                  <Link href="/affiliates">
                    <a
                      onClick={() => setIsNavOpen((prev) => !prev)}
                      activeClassName="is--active"
                      partiallyActive={true}
                      className="text-base text-white link hover:opacity-75 focus:opacity-75 hover:text-white focus:text-white"
                    >
                      Affiliates
                    </a>
                  </Link>
                </li>
              
                <li>
                <div className="">
              <div className="inline-flex items-center pr-2 text-base text-white opacity-70 focus:text-black">
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
                <Link href="/partner">
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
                <ul className="flex flex-wrap items-center mb-2">
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
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
