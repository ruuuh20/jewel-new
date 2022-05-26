import Head from "next/head";
import { useRouter } from "next/router";
import client, { getClient, usePreviewSubscription } from "../sanity";
import { NextSeo } from "next-seo";
import { groq } from "next-sanity";
import Layout from "@/components/layout";
import Container from "@/components/container";
import {PartnershipForm} from "@/components/form";

const Partner = (props) => {


  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  return (
    <>
      <Layout>
        <NextSeo title="Become a Parner" />
        <Container>
          <div className="relative w-full pt-8 pb-[45px]">
            <span className="relative block pb-0 pr-12 mb-0 text-4xl tracking-tight md:text-5xl lg:text-6xl 2xl:text-6xl">
              Become a Partner
            </span>
          </div>
        </Container>
        <Container>
          <div className="flex flex-wrap py-6">
            <div className="py-5 m-auto md:w-7/12">
              <p className="text-xl">
                At JEWEL, we are commited to building a diverse team that
                represents many experiences and perspectives. We're always
                looking for passionate people to join us in helping serve the
                community. We hope you join us!
              </p>{" "}
              <br />
              <p className="text-xl">
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
              <p className="text-xl text-center text-gray-600">
                You can also fill out our contact form for any inquiries.
              </p>
              <PartnershipForm />
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export default Partner