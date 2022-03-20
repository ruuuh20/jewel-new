import FancyLink from "@/components/fancyLink";
import Container from "@/components/container";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="py-4 mb-4 md:mb-6 xl:mb-8 border-b border-gray-50 ">
      <div className="max-w-[1500px] px-6 mx-auto w-full">
        <div className="flex flex-wrap">
          <Link href="/">
            <a className='="font-bold text-2xl uppercase font-semibold'>
              <Image src="/jlogo1.png" alt="me" width="125" height="58" />
            </a>
          </Link>

          <nav className="flex w-full ml-auto space-x-4 text-sm md:text-base md:w-auto justify-center items-center">
            <div className="dropdown ease-in group inline-block relative">
              <button className="hover:text-purple focus:text-purple px-4 inline-flex items-center">
                <span className="mr-1">About JEWEL</span>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>

              <ul className="absolute hidden text-gray-700 pt-1 group-hover:block w-[120%] ease-in duration-300 z-50">
                <Link href="/about">
                  <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Our Mission
                  </a>
                </Link>
                <Link href="/founder">
                  <a
                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Founder's Message
                  </a>
                </Link>
                <Link href="/leadership">
                  <a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                    Leadership
                  </a>
                </Link>
                <Link href="/history">
                  <a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                    History
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                    Contact Us
                  </a>
                </Link>
              </ul>
            </div>

            <FancyLink
              destination="/programs"
              a11yText="Navigate to the programs page"
              label="Programs"
              extraClasses="neg-margin"
            />
            <FancyLink
              destination="/projects"
              a11yText="Navigate to the projects page"
              label="Projects"
            />
            <FancyLink
              destination="/"
              a11yText="Navigate to the media page"
              label="Media"
            />

            <div className="dropdown ease-in group inline-block relative">
              <button className="hover:text-purple focus:text-purple pr-2 inline-flex items-center">
                <span className="mr-1">Join Us</span>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>

              <ul className="absolute hidden text-gray-700 pt-1 group-hover:block w-[140%] ease-in duration-300 z-50">
                <Link href="/">
                  <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Become a Member
                  </a>
                </Link>
                <Link href="/">
                  <a
                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Join Our Team
                  </a>
                </Link>
              </ul>
            </div>

            <FancyLink
              destination="/"
              a11yText="Navigate to the donate page"
              label="Donate"
              extraClasses="border-1 py-2 px-4 bg-green-light text-black rounded"
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
