import Link from "next/link";

export default function TopBar() {
  return (
    <div className="py-2 bg-purple-light border-b border-gray-50 ">
      <div className="max-w-[1500px] px-6 mx-auto w-full">
        <div className="flex flex-wrap">
          

          <nav className="flex w-full ml-auto space-x-4 text-sm md:text-base md:w-auto justify-center items-center">
            

              <Link href="/" locale="en">
                      <a className="hover:text-gray-900 focus:text-gray-900 ">English</a>
                    </Link>
                    <div className="spacer vertical-line">|</div>

             <Link href="/" locale="ko">
                      <a className="hover:text-gray-900 focus:text-gray-900">한국어</a>
                    </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
