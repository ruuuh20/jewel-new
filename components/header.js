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
    <header className="py-8 md:py-4 mb-4 border-b border-gray-200 md:mb-6 xl:mb-8 ">
      <div className="max-w-[1500px] px-8 md:px-6 mx-auto w-full">
        <div className="relative flex md:flex-wrap">
          <Link href="/">
            <a className="font-bold text-2xl uppercase font-semibold">
              <div className={"image-container2"}>
                <Image
                  src="/jlogo1.png"
                  layout="fill"
                  className={"image"}
                  alt="me"
                />
              </div>
            </a>
          </Link>

          <nav className="flex items-center justify-end md:justify-center w-full ml-auto mr-auto space-x-6 text-sm md:text-base md:w-auto">
            <div className="relative hidden md:inline-block ease-in dropdown group">
              <button className="text-[#242b2d] hover:text-black focus:text-black px-4 inline-flex items-center">
                <span className="mr-1 tracking-[1.1px]">About JEWEL</span>
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>

              <ul className="absolute hidden text-gray-700 pt-1 group-hover:block w-[230px] ease-in duration-300 z-50 dropdown-menu">
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
              destination="/"
              a11yText="Navigate to the media page"
              label="Media"
              extraClasses="hidden md:inline-block link link--metis before:absolute"
            />

            <div className="relative hidden md:inline-block ease-in dropdown group">
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

              <ul className="absolute hidden text-gray-700 pt-1 group-hover:block w-[230px] ease-in duration-300 z-50 dropdown-menu">
                <Link href="/">
                  <a className="block px-8 py-3 whitespace-no-wrap bg-gray-200 rounded-t hover:bg-gray-400">
                    Become a Member
                  </a>
                </Link>
                <Link href="/careers">
                  <a className="block px-8 py-3 whitespace-no-wrap bg-gray-200 hover:bg-gray-400">
                    Join Our Team
                  </a>
                </Link>
              </ul>
            </div>

            <Link href="/">
              <a className="hidden md:inline-block border-1 py-2 px-4 bg-[#242b2d] hover:bg-black text-white rounded">
                Donate
              </a>
            </Link>
            <div className="md:hidden ml-5 mx-3 xl:mx-5 2xl:mx-8 mr-0 lg:hidden">
              <button
                className="btn btn--small p-1 btn--secondary-dark align-middle"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                {isNavOpen ? (
                  <span>Close</span>
                ) : (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6"
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

          <nav className="hidden md:flex items-center justify-center w-full space-x-2 text-sm md:text-base md:w-auto">
            <Link href="/" locale="en">
              <a className="link link--metis lang-item before:absolute hover:text-gray-900 focus:text-gray-900">
                English
              </a>
            </Link>
            <div className="spacer vertical-line">|</div>

            <Link href="/" locale="ko">
              <a className="link link--metis lang-item before:absolute hover:text-gray-900 focus:text-gray-900">
                한국어
              </a>
            </Link>
          </nav>
        </div>

        {isNavOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-purple-secondary text-white z-40 p-8">
            <div className="flex flex-wrap items-center mb-16">
              <Link href="/">
                <a className="font-bold text-2xl uppercase font-semibold">
                  <div className={"image-container2"}>
                    <Image
                      src="/jlogo1.png"
                      layout="fill"
                      className={"image"}
                      alt="me"
                    />
                  </div>
                </a>
              </Link>

              <button
                className="btn--reset p-1 ml-auto"
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
                <li className="text-white lg:block mb-2">
                  <Link href="/">
                    <a
                      onClick={() => setIsNavOpen((prev) => !prev)}
                      activeClassName="is--active"
                      className="link
                    hover:opacity-75 focus:opacity-75 hover:text-white
                    focus:text-white text-2xl text-white"
                    >
                      Home
                    </a>
                  </Link>
                </li>

                <li key="" className="text-white lg:block mb-2">
                  <Link href="/">
                    <a
                      onClick={() => setIsNavOpen((prev) => !prev)}
                      activeClassName="is--active"
                      partiallyActive={true}
                      className="link hover:opacity-75 focus:opacity-75
                    hover:text-white focus:text-white text-2xl text-white"
                    >
                      About
                    </a>
                  </Link>
                </li>

                {/* <li className="text-white lg:block mb-2">
                  <Link
                    onClick={this.toggleOverlay}
                    to="/careers"
                    activeClassName="is--active"
                    className="link hover:opacity-75 focus:opacity-75 hover:text-white focus:text-white text-2xl text-white"
                  >
                    Careers
                  </Link>
                </li> */}
              </ul>
            </nav>

            <div className="block md:hidden fixed bottom-0 left-0 w-full z-50">
              <nav aria-labelledby="mobileMenuTrayToggle">
                <h2 id="mobileMenuTrayToggle" className="sr-only">
                  Mobile Menu Tray
                </h2>
                <ul className="flex flex-wrap items-center">
                  <nav className="flex items-center justify-center w-full space-x-3 text-sm md:text-base md:w-auto">
                    <Link href="/" locale="en">
                      <a className="link link--metis lang-item before:absolute hover:text-gray-900 focus:text-gray-900">
                        English
                      </a>
                    </Link>
                    <div className="spacer vertical-line">|</div>

                    <Link href="/" locale="ko">
                      <a className="link link--metis lang-item before:absolute hover:text-gray-900 focus:text-gray-900">
                        한국어
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
