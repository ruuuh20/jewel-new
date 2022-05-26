import Head from "next/head";
import { useRouter } from "next/router";
import  { getClient, usePreviewSubscription } from "../sanity";
import { NextSeo } from "next-seo";

import Layout from "@/components/layout";
import Container from "@/components/container";
import { MemberForm } from "@/components/form";

export default function Member(props) {
  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  return (
    <>
      <Layout>
        <NextSeo title="Membership" />
        <Container>
          <div className="relative w-full pt-8 pb-[45px]">
            <span className="relative block pb-0 pr-12 mb-0 text-4xl tracking-tight md:text-5xl lg:text-6xl 2xl:text-6xl">
              Become a Member
            </span>
          </div>
        </Container>
        <Container>
          <div className="flex flex-wrap py-6">
            <div className="py-5 m-auto md:w-7/12">
              <p className="text-xl">As a member of JEWEL you will be:</p>{" "}
              <br />
              <ul className="px-6 text-lg md:text-xl md:px-0">
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
      </Layout>
    </>
  );
}
