import Container from "@/components/container";
import Layout from "@/components/layout";
import Image from "next/image";
import { NextSeo } from "next-seo";

const Affiliates = (props) => {
  return (
    <Layout>
      <NextSeo title="Our Affiliates" />
      <Container>
        <section>
          <div className="max-w-screen-xl px-4 mx-auto md:py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last">
                <div className="absolute inset-0 flex items-center justify-center object-cover w-full h-full">
                  {/* <Image
                    src="/new-peak-logo.png"
                    alt="Peak Logo"
                    layout="responsive"
                    
                  /> */}
                  <img className="w-[30%] m-auto" src="/new-peak-logo.png" />
                </div>
              </div>

              <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Peak Education Center
                </h2>

                <p className="mt-4 text-gray-600">
                  A learning center offering a variety of classes including
                  English, Math, and Science
                </p>

                <a
                  className="inline-flex items-center px-8 py-3 mt-8 font-extrabold border rounded text-darkgray bg-yellow border-yellow hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://peakeducenter.com"
                >
                  <span className="text-sm font-extrabold">
                    {" "}
                    Visit Peak Website{" "}
                  </span>

                  <svg
                    className="w-5 h-5 ml-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
                <div className="absolute inset-0 flex items-center justify-center object-cover w-full h-full">
                  {/* <Image
                    src="/ganadara-logo.png"
                    alt="Ganadara Logo"
                    layout="fill"
                  /> */}
                  <img
                    className="w-[60%] m-auto"
                    src="/ganadara-logo.png"
                    alt="Ganadara Logo"
                  />
                </div>
              </div>

              <div className="lg:py-24 lg:order-last">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  GANADARA Korean Language and Cultural School
                </h2>

                <p className="mt-4 text-gray-600">
                  A learning center offering a variety of classes including
                  English, Math, and Science
                </p>

                <a
                  className="inline-flex items-center px-8 py-3 mt-8 font-extrabold border rounded text-darkgray bg-yellow border-yellow hover:bg-transparent hover:text-yellow active:text-yellow focus:outline-none focus:ring"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                >
                  <span className="text-sm font-extrabold">
                    {" "}
                    Visit GANADARA Website{" "}
                  </span>

                  <svg
                    className="w-5 h-5 ml-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-6">
          <div className="max-w-screen-xl px-4 mx-auto md:py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last">
                <div className="absolute inset-0 flex items-center justify-center object-cover w-full h-full">
                  Coming Soon
                </div>
              </div>

              <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Korean American Global Youth Network
                </h2>

                <p className="mt-4 text-gray-600">-</p>

                <a
                  className="inline-flex items-center px-8 py-3 mt-8 font-extrabold border rounded text-darkgray bg-yellow border-yellow hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                >
                  <span className="text-sm font-extrabold"> Coming Soon</span>

                  <svg
                    className="w-5 h-5 ml-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  );
};

export default Affiliates;
