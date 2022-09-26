import Link from "next/link";
import { useRouter } from "next/router";

export default function FooterNav({ heading }) {
  const router = useRouter();

  return (
    <div className="flex mt-12 md:mt-0">
      <div className="w-full max-w-4-col md:order-last">
        <div className="relative w-full">
          <div className="relative flex items-center h-20 select-none">
            <div className="w-10 h-10 p-2 mr-4 text-center border rounded-full">
              1
            </div>
            <a
              className="relative w-full text-3xl italic leading-loose pointer-events-none group md:text-5xl font-pt"
              href="/about"
            >
              <span className="group-hover:italic group-hover:normal-case relative z-10 before:bg-secondary md:before:-left-4 before:-left-2 md:before:-right-4 before:-right-2 before:z-[-1] before:block before:top-1/2 before:absolute before:h-2 md:before:h-3 md:before:-mt-1 before:opacity-100">
                <span className="relative z-10">About us</span>
              </span>
            </a>
          </div>

          <div className="relative flex items-center h-20 select-none">
            <div className="w-10 h-10 p-2 mr-4 text-center border rounded-full">
              2
            </div>
            <a
              className="relative w-full text-3xl leading-loose uppercase group md:text-5xl font-pt"
              href="/programs"
            >
              <span className="group-hover:italic group-hover:normal-case relative z-10 before:bg-secondary md:before:-left-4 before:-left-2 md:before:-right-4 before:-right-2 before:z-[-1] before:block before:top-1/2 before:absolute before:h-2 md:before:h-3 md:before:-mt-1 before:opacity-0 group-hover:before:opacity-100">
                <span className="relative z-10">Programs</span>
              </span>
            </a>
          </div>

          <div className="relative flex items-center h-20 select-none">
            <div className="w-10 h-10 p-2 mr-4 text-center border rounded-full">
              3
            </div>
            <a
              className="relative w-full text-3xl leading-loose uppercase group md:text-5xl font-pt"
              href="/projects"
            >
              <span className="group-hover:italic group-hover:normal-case relative z-10 before:bg-secondary md:before:-left-4 before:-left-2 md:before:-right-4 before:-right-2 before:z-[-1] before:block before:top-1/2 before:absolute before:h-2 md:before:h-3 md:before:-mt-1 before:opacity-0 group-hover:before:opacity-100">
                <span className="relative z-10">Projects</span>
              </span>
            </a>
          </div>

          <div className="relative flex items-center h-20 select-none">
            <div className="w-10 h-10 p-2 mr-4 text-center border rounded-full">
              4
            </div>
            <a
              className="relative w-full text-3xl leading-loose uppercase group md:text-5xl font-pt"
              href="/news"
            >
              <span className="group-hover:italic group-hover:normal-case relative z-10 before:bg-secondary md:before:-left-4 before:-left-2 md:before:-right-4 before:-right-2 before:z-[-1] before:block before:top-1/2 before:absolute before:h-2 md:before:h-3 md:before:-mt-1 before:opacity-0 group-hover:before:opacity-100">
                <span className="relative z-10">News</span>
              </span>
            </a>
          </div>

          <div className="relative flex items-center h-20 select-none">
            <div className="w-10 h-10 p-2 mr-4 text-center border rounded-full">
              5
            </div>
            <a
              className="relative w-full text-3xl leading-loose uppercase group md:text-5xl font-pt"
              href="/affiliates"
            >
              <span className="group-hover:italic group-hover:normal-case relative z-10 before:bg-secondary md:before:-left-4 before:-left-2 md:before:-right-4 before:-right-2 before:z-[-1] before:block before:top-1/2 before:absolute before:h-2 md:before:h-3 md:before:-mt-1 before:opacity-0 group-hover:before:opacity-100">
                <span className="relative z-10">Affiliates</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-full md:max-w-4-col md:block"></div>
    </div>
  );
}
