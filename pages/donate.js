import Head from "next/head";
import { useRouter } from "next/router";
import client, { getClient, usePreviewSubscription } from "../sanity";
import { NextSeo } from "next-seo";
import { groq } from "next-sanity";
import Layout from "@/components/layout";
import Container from "@/components/container";
import Form from "@/components/form";

export default function Donate(props) {
  const { postdata, preview } = props;

  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  return (
    <>
      <Layout>
        <NextSeo title="Contact Us" />
        <Container>
          <div className="relative w-full pt-8 pb-[88px]">
            <span className="relative block pb-0 pr-12 mb-0 text-4xl tracking-tight md:text-5xl lg:text-6xl 2xl:text-6xl font-serif">
              Make an Impact
            </span>
          </div>
        </Container>
        <Container>
          <div className="flex flex-wrap py-6 font-serif text-xl">
            <div className="md:w-7/12 m-auto py-5">
              <p>
                Be a part of creating a thriving community by donating to JEWEL
                today.
              </p>{" "}
              <br />
              <h4 className="font-bold mb-2">Donate by Check</h4>
              <p className="mb-2">
                To make a contribution by check, please make your check payable
                to “JEWEL” and mail to:
              </p>
              <p className="text-center">
                JEWEL
                <br />
                Address
              </p>
            </div>

            <div className="w-full md:w-7/12 m-auto py-8">
              <p className="text-xl text-gray-600 text-center">
                Thank you for donating to JEWEL!
              </p>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
