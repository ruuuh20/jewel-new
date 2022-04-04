import Layout from "@/components/layout";
import Container from "@/components/container";
import FancyLink from "@/components/fancyLink";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { groq } from "next-sanity";
import Link from "next/link";

import { useRouter } from "next/router";
import client, {
  getClient,
  usePreviewSubscription,

  urlFor,
} from "../sanity";
import ImageStandard from "@/components/imageStandard";
import ImageWrapper from "@/components/imageWrapper";
import ImageComponent from "@/components/image";

import Image from "next/image";
import BlockContent from "@/components/blockContent";
import { PortableText  } from "@portabletext/react";

const myPortableTextComponents = {
  types: {
    quote: ({value}) => ( <div className="pt-5 pb-5 border-b md:border-t md:border-b-0 border-brown md:pb-0 md:pt-8 2xl:pt-10">
          <span className="block pb-0 mb-2 text-4xl leading-none font-display md:text-5xl 2xl:text-6xl md:mb-0">“</span>
          <p className="block mb-3 -mt-5 text-xl leading-tight font-display md:text-xl lg:text-2xl xl:text-3xl md:leading-tight 2xl:leading-tight md:mb-4">{value.quote}</p>

          <div className="">
            <span className="block leading-snug md:text-lg">{value.personJobTitle}</span>
          </div>
        </div>),
    image: ({value}) => <img src={value.imageUrl} />,
    callToAction: ({value, isInline}) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },

  marks: {
    link: ({children, value}) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      )
    },
  },
}


export default function Founder(props) {
  const { postdata, preview } = props;

  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  const { data: posts } = usePreviewSubscription(query, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined,
  });

  return (
    <Layout>
      <NextSeo title="About" />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24 pt-[75px] pb-[75px]"
        >
          <Container>
            <div className="relative w-full pt-8 pb-[88px]">
              <span className="relative block pb-0 pr-12 mb-0 text-4xl tracking-tight md:text-5xl lg:text-6xl 2xl:text-6xl">
                {locale === "ko" ? "founder" : "Founder's Message"}
              </span>
            </div>
            <m.div variants={fade}>
              {posts &&
                posts.map((post) => (
                  <>
                    <Container>
                      <div className="flex flex-wrap">
                        <div className="relative w-full overflow-hidden md:w-5/12 content md:mb-0">
                          <div className="image-container">
                            <figure className="mb-6 overflow-hidden md:mb-8 xl:mb-10">
                              <ImageComponent
                                image={
                                  post.foundersImage !== null
                                    ? post.foundersImage.url
                                    : "https://via.placeholder.com/50"
                                }
                              />
                            </figure>
                          </div>
                        </div>
                        <div className="w-full md:w-7/12 content md:pr-10 xl:pr-14 md:pl-4">
                          {/* <BlockContent text={post.content} /> */}
                          <PortableText className="content" value={post.content} components={myPortableTextComponents} />
                         
                        </div>
                      </div>
                  
                      <section className="pt-20">
                        <div className="content">
                          <div className="w-full mt-6 py-6 text-2xl text-center">
                            <h4>Profile / 프로필</h4>
                          </div>
                          <div className="flex flex-wrap justify-center text-center align-middle">
                            <div className="">
                              <ul className="border-t border-off-black border-opacity-80">
                                <li className="py-3 border-b md:py-4 border-off-black border-opacity-80">
                                  <span class="inline-block text-center inline-block xl:leading-[1.2] font-normal font-display flex-1 block">
                                    대표
                                  </span>
                                   
                                  <span class="inline-block text-gray-500 text-center xl:leading-[1.2] font-normal md:ml-6 font-display  block">
                                    함께하는교육
                                  </span>
                                </li>
                                <li className="py-5 border-b md:py-6 border-off-black border-opacity-80">
                                  <span class="inline-block text-center xl:leading-[1.2] font-normal font-display text-navy flex-1 block">
                                    수석부회장
                                  </span>
                                  <span class="inline-block text-gray-500 xl:leading-[1.2] ml-6 font-normal font-display text-navy block">
                                    뉴욕한인회 36대, 37대
                                  </span>
                                </li>
                                <li className="py-5 border-b md:py-6 border-off-black border-opacity-80">
                                  <span class="inline-block text-left xl:leading-[1.2] font-normal font-display text-navy flex-1 block">
                                    교장
                                  </span>
                                  <span class="inline-block text-gray-500 text-left ml-6 xl:leading-[1.2] font-normal font-display text-navy block">
                                    가나다라한국문화학교
                                  </span>
                                </li>
                                <li className="py-5 border-b md:py-6 border-off-black border-opacity-80">
                                  <span class="inline-block text-left  xl:leading-[1.2] font-normal font-display text-navy flex-1 block">
                                    대표
                                  </span>
                                  <span class="inline-block text-gray-500 text-left ml-6 xl:leading-[1.2] font-normal font-display block">
                                    재외동포청소년네트워크
                                  </span>
                                </li>
                                <li className="flex py-5 border-b md:py-6 border-off-black border-opacity-80">
                                  <span class="inline-block text-left xl:leading-[1.2] font-normal font-display text-navy flex-1 block">
                                    이사
                                  </span>
                                  <span class="inline-block text-gray-500 text-left ml-6 xl:leading-[1.2] font-normal font-display text-navy block">
                                    전미여성유권자연맹 뉴저지노던벨리지구
                                  </span>
                                </li>
                                <li className="py-5 border-b md:py-6 border-off-black border-opacity-80">
                                  <span class="inline-block text-left xl:leading-[1.2] font-normal font-display text-navy flex-1 block">
                                    개설위원장
                                  </span>
                                  <span class="inline-block text-gray-500 text-left ml-6 xl:leading-[1.2] font-normal font-display text-navy block">
                                    (전)미주한국어재단 한국어반개설위원회
                                  </span>
                                </li>
                                <li className="py-5 border-b md:py-6 border-off-black border-opacity-80">
                                  <span class="inline-block text-left xl:leading-[1.2] font-normal font-display text-navy  block">
                                    감사
                                  </span>
                                  <span class="inline-block text-gray-500 text-left ml-6 xl:leading-[1.2] font-normal font-display text-navy block">
                                    (전)민주평통뉴욕협의회 18기
                                  </span>
                                </li>
                                <li className="py-5 border-b md:py-6 border-off-black border-opacity-80">
                                  <span class="inline-block text-left xl:leading-[1.2] font-normal font-display text-navy flex-1 block">
                                    교육분과위원장
                                  </span>
                                  <span class="inline-block text-gray-500 text-left ml-6 xl:leading-[1.2] font-normal font-display text-navy block">
                                    (전)민주평통뉴욕협의회 16기
                                  </span>
                                </li>
                                <li className="py-5 border-b md:py-6 border-off-black border-opacity-80">
                                  <span class="inline-block text-left xl:leading-[1.2] font-normal font-display text-navy flex-1 block">
                                    자문위원
                                  </span>
                                  <span class="inline-block text-gray-500 text-left ml-6 xl:leading-[1.2] font-normal font-display text-navy block">
                                    (전)민주평통뉴욕협의회 14기
                                  </span>
                                </li>
                                <li className="py-5 border-b md:py-6 border-off-black border-opacity-80">
                                  <span class="inline-block text-left xl:leading-[1.2] font-normal font-display text-navy flex-1 block">
                                    연합회장
                                  </span>
                                  <span class="inline-block text-gray-500 text-left ml-6 xl:leading-[1.2] font-normal font-display text-navy block">
                                    (전)뉴저지버겐카운티한인학부모연합회
                                  </span>
                                </li>
                                <li className="py-5 border-b md:py-6 border-off-black border-opacity-80">
                                  <span class="inline-block text-left xl:leading-[1.2] font-normal font-display text-navy flex-1 block">
                                    교육위원
                                  </span>
                                  <span class="inline-block text-gray-500 text-left ml-6 xl:leading-[1.2] font-normal font-display text-navy block">
                                    (전)뉴저지 노우드학군 교육위원 5선
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>{" "}
                        </div>
                      </section>
                    </Container>
                  </>
                ))}
            </m.div>
          </Container>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}

const query = groq`
 *[_type == "about" && title.en == "Our Mission"] | order(_createdAt desc) {
...,
foundersMessage,
foundersImage {
    ...asset->
},
content
 
}
`;

export async function getStaticProps({ params, preview = false }) {
  const program = await getClient(preview).fetch(query);

  return {
    props: {
      postdata: program,
      preview,
    },
    revalidate: 10,
  };
}
