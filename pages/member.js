import Head from "next/head";
import { useRouter } from "next/router";
import  { getClient, usePreviewSubscription } from "../sanity";
import { NextSeo } from "next-seo";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Layout from "@/components/layout";
import Container from "@/components/container";
import { MemberForm } from "@/components/form";
import Image from "next/image";

export default function Member(props) {
  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  return (
    <>
      <Layout>
        <NextSeo title="Membership" />
          <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24 pb-[45px]"
          variants={fade}
        >
           <div className="relative w-full pt-8 pb-[28px] border-b border-black">
           <Container>
                <div className="flex items-center justify-between">
                  <h3 className="relative block pb-0 pr-0 mb-0 text-3xl tracking-tight md:pr-12 font-pt md:text-5xl lg:text-6xl 2xl:text-6xl">
                     Become a Member
                  </h3>
                   <div className="tracking-wide uppercase text-sm md:text-[20px] font-semibold text-gray-600 font-arial">
                    <span>함께해요</span>
                  </div>
                </div>
            </Container>
          </div>
       
        <Container>
          <div className="flex flex-wrap py-6">
            <div className="py-5 m-auto md:w-7/12">
              <p className="tex-base md:text-xl">As a member of Educate Together, you will be:</p>{" "}
              <br />
              <ul className="px-6 text-base md:text-xl md:px-0">
                <li className="mt-2 list-disc">
                  Kept updated on new ways American and Korean educators are
                  organizing collaborative projects to foster greater
                  communication between the two educational systems.
                </li>
                <li className="mt-2 list-disc">
                  Informed of new technologies for assisting students in the
                  learning process to insure success in the classroom.
                </li>
                <li className="mt-2 list-disc">
                  Receive cultural information and travel opportunitie, when
                  they become available, to bridge the "gap" between the Korean
                  and American cultures.
                </li>
              </ul>
              <br />
              <p className="tex-base md:text-xl">
                If you are interested in exploring opportunities with us, please
                send your resume and a brief introduction to:{" "}
                <a
                  className="border-b border-[#d96e34] hover:text-[#d96e34]"
                  href="mailto:kay@edu-together.org"
                >
                  kay@edu-together.org
                </a>{" "}
              </p>
            </div>

            <div className="w-full py-8 m-auto md:w-7/12 md:mt-6">
              <p className="text-xl text-center">
                Membership
              </p>
              <div className="form-membership">
                <MemberForm />
              </div>
            </div>
          </div>
        </Container>
        </m.div>
        </LazyMotion>
      </Layout>
    </>
  );
}
