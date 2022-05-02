import Head from "next/head";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../sanity";
import { NextSeo } from "next-seo";

import Layout from "@/components/layout";
import Container from "@/components/container";
import { fade, textReveal } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";

export default function Donate(props) {
 

  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  return (
    <>
      <Layout>
        <NextSeo title="Donate" />
            <LazyMotion features={domAnimation}>
               <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24"
        >
        <Container>
          <div className="relative w-full pt-8 pb-[88px]">
            <m.span variants={fade} className="relative block pb-0 pr-12 mb-0 font-serif text-4xl tracking-tight md:text-5xl lg:text-6xl 2xl:text-6xl">
              Make an Impact
            </m.span>
          </div>
        </Container>
        <Container>
          <m.div variants={fade} className="flex flex-wrap py-6 font-serif text-xl">
            <div className="py-5 m-auto md:w-7/12">
              <p>
                Be a part of creating a thriving community by donating to JEWEL
                today.
              </p>{" "}
              <br />
              <div>
                <h4 className="mb-2 font-bold">Donate by Check</h4>
                <p className="mb-2">
                  To make a contribution by check, please make your check payable
                  to “JEWEL” and mail to:
                </p>
                <p className="text-center">
                  JEWEL Organization
                  <br />
                  317 Harrington Ave
                  <br/>
                  Closter, NJ 07624
                </p>
              </div>
              <div className="my-4 md:my-8"> <h4 className="mb-2 font-bold">Donate by Venmo/Zelle</h4></div>
            </div>

            <div className="w-full py-8 m-auto md:w-7/12">
              <p className="text-xl text-center text-gray-600">
                Thank you for donating to JEWEL!
              </p>
            </div>
          </m.div>
        </Container>
        </m.main>
        </LazyMotion>
      </Layout>
    </>
  );
}
