import Head from "next/head";
import { useRouter } from "next/router";
import client, { getClient, usePreviewSubscription } from "../sanity";
import { NextSeo } from "next-seo";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Layout from "@/components/layout";
import Container from "@/components/container";
import {PartnershipForm} from "@/components/form";
import Image from "next/image";
const Partner = (props) => {


  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  return (
    <>
      <Layout>
        <NextSeo title="Become a Partner" />
        <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24  pt-[90px] md:pt-[180px] pb-[88px]"
          variants={fade}
        >
        <Container>
          <div className="relative w-full pt-8 pb-[120px]">
            <div className="pb-1 md:pb-8 tracking-widest uppercase text-sm md:text-[20px] font-semibold text-gray-400">
              <span>함께해요</span>
            </div>
            <div className="hidden md:block absolute overflow-visible spin-slow spin-container mt-2">
              <div className="relative">
                <Image
                  src="/ham-logo.png"
                  width="60"
                  height="60"
                />
              </div>
            </div>
            <h3 className="font-pt relative block pb-0 pr-12 mb-0 text-4xl tracking-tight md:text-5xl lg:text-6xl left-0 md:left-[5%]">
              Become a Partner
            </h3>
          </div>
        </Container>
        <Container>
          <div className="flex flex-wrap py-6">
            <div className="py-5 m-auto md:w-7/12">
              <p className="text-base md:text-xl">
                At JEWEL, we are commited to building a diverse team that
                represents many experiences and perspectives. We're always
                looking for passionate people to join us in helping serve the
                community. We hope you join us!
              </p>{" "}
              <br />
              <p className="text-base md:text-xl">
                If you are interested in exploring opportunities with us, please
                send your resume and a brief introduction to:{" "}
                <a
                  className="border-b border-yellow hover:text-yellow"
                  href="mailto:kaykim@wearejewel.org"
                >
                  kaykim@wearejewel.org
                </a>{" "}
              </p>
            </div>

            <div className="w-full py-8 m-auto md:w-7/12">
              <p className="text-base text-gray-800 md:text-xl md:my-5">
                You can fill out our contact form for any inquiries.
              </p>
              <PartnershipForm />
            </div>
          </div>
        </Container>
        </m.div>
        </LazyMotion>
      </Layout>
    </>
  );
}

export default Partner