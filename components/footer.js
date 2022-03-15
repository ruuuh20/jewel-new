import Container from "@/components/container";
import Link from "next/link";
import FancyLink from "@/components/fancyLink";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="bg-purple text-white py-6 md:py-8">
          <Container fullBleed>
            <div className="flex flex-wrap items-center lg:-mx-4">
              <nav className="w-full lg:w-7/12 lg:px-4 mb-5 lg:mb-0">
                <span className="block text-xs uppercase tracking-tight leading-none mb-3">
                  Browse
                </span>
                <ul>
                  <li className="inline-block mr-3 text-xl md:text-xl 3xl:text-3xl">
                    <FancyLink
                      destination="/"
                      a11yText="Navigate to about us page"
                      label="About Us"
                    />
                  </li>
                  <li className="inline-block mr-3 text-xl md:text-xl 3xl:text-3xl">
                    &bull;
                  </li>
                  <li className="inline-block mr-3 text-xl md:text-xl 3xl:text-3xl">
                    <FancyLink
                      destination="/programs"
                      a11yText="Go to Programs page"
                      label="Programs"
                    />
                  </li>
                  <li className="inline-block mr-3 text-xl md:text-xl 3xl:text-3xl">
                    &bull;
                  </li>
                  <li className="inline-block mr-3 text-xl md:text-xl 3xl:text-3xl">
                    <FancyLink
                      destination="/"
                      a11yText="Go to Events page"
                      label="Events"
                    />
                  </li>
                  <li className="inline-block mr-3 text-xl md:text-xl 3xl:text-3xl">
                    &bull;
                  </li>
                  <li className="inline-block mr-3 text-xl md:text-xl 3xl:text-3xl">
                    <FancyLink
                      destination="/contact"
                      a11yText="Go to Contact page"
                      label="Contact"
                    />
                  </li>
                </ul>
              </nav>

              <nav className="w-full lg:w-5/12 lg:px-4">
                <ul className="lg:text-right">
                  <li className="inline-block mr-3 lg:mr-0 lg:ml-3 text-xl md:text-xl 3xl:text-3xl">
                    contact info
                  </li>
                  <li className="inline-block mr-3 lg:mr-0 lg:ml-3 text-xl md:text-xl 3xl:text-3xl">
                    &bull;
                  </li>
                  <li className="inline-block mr-3 lg:mr-0 lg:ml-3 text-xl md:text-xl 3xl:text-3xl">
                    email
                  </li>
                </ul>
              </nav>
            </div>
          </Container>
        </div>

        <div className="bg-blue text-white pt-4 pb-5">
          <Container>
            <div className="flex flex-wrap items-center">
              <div className="w-full md:flex-1 mb-3 md:mb-0">
                <small className="tracking-tight block leading-tight">
                  &copy; {new Date().getFullYear()} JEWEL Organization, All
                  rights reserved.
                </small>
              </div>

              <div className="w-full md:w-auto md:text-right text-sm">
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
