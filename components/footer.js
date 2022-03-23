import Container from "@/components/container";
import Link from "next/link";
import FancyLink from "@/components/fancyLink";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="py-6 text-white bg-purple-light md:py-6">
          <Container fullBleed>
            <div className="flex flex-wrap items-center lg:-mx-4">
              <nav className="w-full lg:px-4">
                <ul className="lg:text-right">
                  <li className="inline-block mr-3 text-xl lg:mr-0 lg:ml-3 md:text-xl 3xl:text-3xl">
                    jewelspeaks@gmail.com
                  </li>
                  <li className="inline-block mr-3 text-xl lg:mr-0 lg:ml-3 md:text-xl 3xl:text-3xl">
                    &bull;
                  </li>
                  <li className="inline-block mr-3 text-xl lg:mr-0 lg:ml-3 md:text-xl 3xl:text-3xl">
                    201
                  </li>
                </ul>
              </nav>
            </div>
          </Container>
        </div>

        <div className="pt-4 pb-5 text-white bg-purple-light">
          <Container>
            <div className="flex flex-wrap items-center">
              <div className="w-full mb-3 md:flex-1 md:mb-0">
                <small className="block leading-tight tracking-tight">
                  &copy; {new Date().getFullYear()} JEWEL Organization, All
                  rights reserved.
                </small>
              </div>

              <div className="w-full text-sm md:w-auto md:text-right">
                <nav>
                  <li className="inline-block mx-3 ml-0">
                    <FancyLink
                      destination="/"
                      a11yText="Navigate to site terms page"
                      label="Site Terms"
                      noCircle
                    />
                  </li>

                  <li className="inline-block mx-3">
                    <FancyLink
                      destination="/"
                      a11yText="Navigate to privacy policy page"
                      label="Privacy Policy"
                    />
                  </li>
                </nav>
              </div>
            </div>
          </Container>
        </div>
      </footer>
    </>
  );
}
