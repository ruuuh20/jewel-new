import Head from "next/head";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../sanity";
import { NextSeo } from "next-seo";
import Image from "next/image"
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
                      Make an Impact
                  </h3>
                   <div className="tracking-wide uppercase text-sm md:text-[20px] font-semibold text-gray-600 font-arial">
                    
                  </div>
                </div>
            </Container>
          </div>

        
        <Container>
          <m.div variants={fade} className="flex flex-wrap py-8 text-xl">
            <div className="py-5 m-auto md:w-7/12">
              <p>
                Be a part of creating a thriving community by donating to Educate Together
                today.
              </p>{" "}
              <br />
              <div>
                <h4 className="mb-2 font-bold">Donate by Check</h4>
                <p className="mb-2">
                  To make a contribution by check, please make your check payable
                  to “Educate Together” and mail to:
                </p>
                <p className="text-center">
                  Educate Together Organization
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
                Thank you for donating to Educate Together!
              </p>
            </div>
          </m.div>
        </Container>
        </m.div>
        </LazyMotion>
      </Layout>
    </>
  );
}
