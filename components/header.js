import FancyLink from "@/components/fancyLink";
import Container from "@/components/container";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <header className="py-4 mb-4 border-b border-gray-200 md:mb-6 xl:mb-8 ">
      <div className="max-w-[1500px] px-6 mx-auto w-full">
        <div className="flex flex-wrap">
          <Link href="/">
            <a className='="font-bold text-2xl uppercase font-semibold'>
              <Image src="/jlogo1.png" alt="me" width="125" height="58" />
            </a>
          </Link>

          <nav className="flex items-center justify-center w-full ml-auto mr-auto space-x-6 text-sm md:text-base md:w-auto">
            <div className="relative inline-block ease-in dropdown group">
              <button className="text-[#242b2d] hover:text-black focus:text-black px-4 inline-flex items-center">
                <span className="mr-1 uppercase tracking-[1.5px]">
                  About JEWEL
                </span>
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>

              <ul className="absolute hidden text-gray-700 pt-1 group-hover:block w-[120%] ease-in duration-300 z-50">
                <Link href="/about">
                  <a className="block px-4 py-2 whitespace-no-wrap bg-gray-200 rounded-t hover:bg-gray-400">
                    Our Mission
                  </a>
                </Link>
                <Link href="/founder">
                  <a className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400">
                    Founder's Message
                  </a>
                </Link>
                <Link href="/leadership">
                  <a className="block px-4 py-2 whitespace-no-wrap bg-gray-200 rounded-b hover:bg-gray-400">
                    Leadership
                  </a>
                </Link>
                <Link href="/history">
                  <a className="block px-4 py-2 whitespace-no-wrap bg-gray-200 rounded-b hover:bg-gray-400">
                    History
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="block px-4 py-2 whitespace-no-wrap bg-gray-200 rounded-b hover:bg-gray-400">
                    Contact Us
                  </a>
                </Link>
              </ul>
            </div>

            <FancyLink
              destination="/programs"
              a11yText="Navigate to the programs page"
              label="Programs"
              extraClasses={`link link--metis before:absolute neg-margin ${
                router.pathname == "/programs" ? "font-bold" : "text-[#242b2d]"
              }`}
            />
            <FancyLink
              destination="/projects"
              a11yText="Navigate to the projects page"
              label="Projects"
              extraClasses={`link link--metis before:absolute ${
                router.pathname == "/projects" ? "font-bold" : "text-[#242b2d]"
              }`}
            />
            <FancyLink
              destination="/"
              a11yText="Navigate to the media page"
              label="Media"
              extraClasses="link link--metis before:absolute"
            />

            <div className="relative inline-block ease-in dropdown group">
              <button className="text-[#242b2d] hover:text-black focus:text-black pr-2 inline-flex items-center">
                <span className="mr-1 uppercase tracking-[1.5px]">Join Us</span>
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>

              <ul className="absolute hidden text-gray-700 pt-1 group-hover:block w-[140%] ease-in duration-300 z-50">
                <Link href="/">
                  <a className="block px-4 py-2 whitespace-no-wrap bg-gray-200 rounded-t hover:bg-gray-400">
                    Become a Member
                  </a>
                </Link>
                <Link href="/">
                  <a className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400">
                    Join Our Team
                  </a>
                </Link>
              </ul>
            </div>

            <Link href="/">
              <a className="border-1 py-2 px-4 bg-[#242b2d] hover:bg-black text-white rounded">
                Donate
              </a>
            </Link>
          </nav>

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
        </div>
      </div>
    </header>
  );
}
