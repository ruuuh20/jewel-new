import FancyLink from "@/components/fancyLink";
import Container from "@/components/container";
import Link from "next/link";

export default function TopBar() {
  return (
    <header className="py-2 bg-blue text-white border-b border-gray-50 ">
      <div className="max-w-[1500px] px-6 mx-auto w-full">
        <div className="flex flex-wrap">
          

          <nav className="flex w-full ml-auto space-x-4 text-sm md:text-base md:w-auto justify-center items-center">
            

              <Link href="/" locale="en">
                      <a className="hover:text-gray-500 focus:text-gray-500 ">English</a>
                    </Link>
                    <div className="spacer vertical-line">|</div>

             <Link href="/" locale="ko">
                      <a className="hover:text-gray-500 focus:text-gray-500">한국어</a>
                    </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
