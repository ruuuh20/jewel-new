import Container from "@/components/container";
import Link from "next/link";
import Image from "next/image";

export default function Footer({ contact }) {
  return (
    <>
      {/* <footer>
        <div className="py-6 text-white bg-blue md:py-6">
          <Container fullBleed>
            <div className="flex flex-col flex-wrap items-center lg:-mx-4">
              <nav>
                <li className="text-left">Contact Us</li>
              </nav>
              <nav className="w-full lg:px-4">
                <ul className="lg:text-right">
                  <li className="inline-block mr-3 text-xl lg:mr-0 lg:ml-3 md:text-xl 3xl:text-3xl">
                    <a
                      href="https://www.instagram.com/jewelorganization"
                      className="hover:text-blue"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-4"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.48754 0C6.36676 0 6.10083 0.00915058 5.26819 0.0481253C4.43688 0.0867611 3.86917 0.221308 3.37284 0.418554C2.85925 0.62224 2.42367 0.894724 1.98975 1.33802C1.55551 1.78097 1.28825 2.22562 1.08906 2.74958C0.895835 3.25659 0.763701 3.83613 0.725854 4.68476C0.688007 5.53475 0.678711 5.80621 0.678711 7.97117C0.678711 10.1358 0.688007 10.4073 0.725854 11.2576C0.763701 12.1059 0.895835 12.6854 1.08906 13.1924C1.28825 13.7167 1.55551 14.161 1.98975 14.6043C2.42367 15.0473 2.85925 15.3201 3.37284 15.5238C3.86917 15.7207 4.43688 15.8556 5.26819 15.8942C6.10083 15.9329 6.36676 15.9423 8.48754 15.9423C10.6083 15.9423 10.8739 15.9329 11.7066 15.8942C12.5379 15.8556 13.1056 15.7207 13.6022 15.5238C14.1155 15.3201 14.5514 15.0473 14.985 14.6043C15.4192 14.161 15.6865 13.7167 15.8857 13.1924C16.0789 12.6854 16.211 12.1059 16.2489 11.2576C16.2867 10.4073 16.296 10.1358 16.296 7.97117C16.296 5.80621 16.2867 5.53475 16.2489 4.68476C16.211 3.83613 16.0789 3.25659 15.8857 2.74958C15.6865 2.22562 15.4192 1.78097 14.985 1.33802C14.5514 0.894724 14.1155 0.62224 13.6022 0.418554C13.1056 0.221308 12.5379 0.0867611 11.7066 0.0481253C10.8739 0.00915058 10.6083 0 8.48754 0ZM8.48792 1.43631C10.5725 1.43631 10.8195 1.44445 11.6432 1.48274C12.4044 1.51799 12.8178 1.64813 13.093 1.75726C13.4575 1.90164 13.7175 2.07448 13.9907 2.3534C14.2639 2.63233 14.4333 2.89803 14.575 3.26982C14.6816 3.55077 14.8091 3.97306 14.8439 4.75018C14.8815 5.59068 14.8891 5.84283 14.8891 7.97118C14.8891 10.0995 14.8815 10.3513 14.8439 11.1918C14.8091 11.9693 14.6816 12.3916 14.575 12.6722C14.4333 13.0443 14.2639 13.3097 13.9907 13.589C13.7175 13.8675 13.4575 14.0404 13.093 14.1851C12.8178 14.2942 12.4044 14.424 11.6432 14.4596C10.8195 14.4979 10.5728 14.5061 8.48792 14.5061C6.40266 14.5061 6.15599 14.4979 5.33265 14.4596C4.57105 14.424 4.15772 14.2942 3.8825 14.1851C3.51797 14.0404 3.25802 13.8675 2.98479 13.589C2.71189 13.3097 2.54257 13.0443 2.40081 12.6722C2.29391 12.3916 2.16642 11.9693 2.13156 11.1918C2.09405 10.3513 2.08641 10.0995 2.08641 7.97118C2.08641 5.84283 2.09405 5.59068 2.13156 4.75018C2.16642 3.97306 2.29391 3.55077 2.40081 3.26982C2.54257 2.89803 2.71189 2.63233 2.98479 2.3534C3.25802 2.07448 3.51797 1.90164 3.8825 1.75726C4.15772 1.64813 4.57105 1.51799 5.33265 1.48274C6.15599 1.44445 6.403 1.43631 8.48792 1.43631Z"
                          fill="white"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.48689 10.6281C7.04935 10.6281 5.88372 9.43855 5.88372 7.97107C5.88372 6.50359 7.04935 5.31401 8.48689 5.31401C9.92409 5.31401 11.0897 6.50359 11.0897 7.97107C11.0897 9.43855 9.92409 10.6281 8.48689 10.6281ZM8.48736 3.87781C6.27263 3.87781 4.47754 5.71063 4.47754 7.97117C4.47754 10.2317 6.27263 12.0642 8.48736 12.0642C10.7018 12.0642 12.4969 10.2317 12.4969 7.97117C12.4969 5.71063 10.7018 3.87781 8.48736 3.87781Z"
                          fill="white"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.5929 3.71611C13.5929 4.24447 13.1732 4.67251 12.656 4.67251C12.1384 4.67251 11.7188 4.24447 11.7188 3.71611C11.7188 3.18775 12.1384 2.7597 12.656 2.7597C13.1732 2.7597 13.5929 3.18775 13.5929 3.71611Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="inline-block mr-3 text-xl lg:mr-0 lg:ml-3 md:text-xl 3xl:text-3xl">
                    <a
                      href="https:/facebook.com/"
                      className="hover:text-blue"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-2"
                        viewBox="0 0 8 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.64 15.364h3.155V7.616h2.2l.235-2.593H4.795V3.545c0-.611.125-.853.728-.853H7.23V0H5.046C2.699 0 1.64 1.014 1.64 2.955v2.068H0v2.626h1.64v7.715z"
                          fill="#fff"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="inline-block mr-3 text-xl lg:mr-0 lg:ml-3 md:text-xl 3xl:text-3xl"></li>
                </ul>
              </nav>
            </div>
          </Container>
        </div>

        <div className="pt-4 pb-5 text-white bg-blue">
          <Container>
            <div className="flex flex-wrap items-center">
              <div className="w-full mb-3 md:flex-1 md:mb-0">
                <small className="block leading-tight tracking-tight">
                  &copy; {new Date().getFullYear()} JEWEL Organization, All
                  rights reserved.
                </small>
              </div>

              <div className="w-full text-sm text-white md:w-auto md:text-right">
                <nav>
                  <li className="inline-block mx-3 ml-0">
                    <Link href="/terms-of-use">
                      <a className="text-xs text-white">Terms</a>
                    </Link>
                  </li>

                  <li className="inline-block mx-3">
                    <Link href="/privacy">
                      <a className="text-xs text-white">Privacy Policy</a>
                    </Link>
                  </li>
                </nav>
              </div>
            </div>
          </Container>
        </div>
      </footer> */}

      {/* <footer class="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100"> */}
      <footer className="footer-wrapper">
        <div class="max-w-screen-xl px-4 py-8 md:py-16 mx-auto sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              {/* <img src="#" class="mr-5 h-6 sm:h-9" alt="logo" /> */}
              <div className="flex text-lg"> 
               <Link href="/">
                  <a className="flex align-middle items-center font-bold text-[1.5rem] md:text-[2rem] uppercase leading-tight font-pt">
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
                      </a></Link>
                </div>
              
              <div class="flex mt-8 space-x-6">
                {/* <a
                  class="hover:opacity-75"
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span class="sr-only"> Facebook </span>
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  class="hover:opacity-75"
                  href="https://instagram.com/jewelorganization"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span class="sr-only"> Instagram </span>
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a> */}
                {/* <a
                  class="hover:opacity-75"
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span class="sr-only"> Twitter </span>
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a> */}
                {/* <a
                  class="hover:opacity-75"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span class="sr-only"> LinkedIn </span>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a> */}
              </div>
            </div>
            <div class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <p class="font-semibold">About</p>
                <nav class="flex flex-col mt-4 space-y-2 text-sm md:text-base">
                  <Link href="/about">
                    <a class="hover:opacity-75"> Who We Are </a>
                  </Link>
                  <Link href="/founder">
                    <a class="hover:opacity-75"> Founder's Message </a>
                  </Link>
                  <a class="hover:opacity-75"> Leadership </a>
                  <a class="hover:opacity-75"> History </a>
                  <a class="hover:opacity-75"> Contact Us </a>
                </nav>
              </div>
              <div>
                <p class="font-semibold">Our Programs</p>
                    <nav class="flex flex-col mt-4 space-y-2 text-sm md:text-base">
             
                  <Link href="/ganadara">
                    <a class="hover:opacity-75"> Ganadara</a>
                  </Link>
                  <Link href="/jewel">
                    <a class="hover:opacity-75">JEWEL </a>
                  </Link>
                  <Link href="/support">
                    <a class="hover:opacity-75">Visiting Korea</a>
                  </Link>
                  <Link href="/support">
                    <a class="hover:opacity-75">Youth Network</a>
                  </Link>
                </nav>
              </div>

          
              <div>
                <p class="font-semibold">Join Us</p>
                <nav class="flex flex-col mt-4 space-y-2 text-sm md:text-base">
                  <Link href="/member">
                    <a className="hover:opacity-75"> Become a Member</a>
                  </Link>
                  <Link href="/partner-with-us">
                    <a class="hover:opacity-75"> Become a Partner</a>
                  </Link>
                  <Link href="/careers">
                    <a class="hover:opacity-75"> Careers</a>
                  </Link>
                   <Link href="/support">
                    <a class="hover:opacity-75">Support</a>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
          <p class="mt-8 text-xs">
            &copy; {new Date().getFullYear()} Educate Together, All rights
            reserved.
          </p>
          <div className="w-full mt-3 text-xs md:w-auto">
            <nav>
              <li className="inline-block mx-3 ml-0">
                <Link href="/terms-of-use">
                  <a className="text-xs">Terms</a>
                </Link>
              </li>

              <li className="inline-block mx-3">
                <Link href="/privacy">
                  <a className="text-xs">Privacy Policy</a>
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
