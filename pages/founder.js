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
  PortableText,
  urlFor,
} from "../sanity";
import ImageStandard from "@/components/imageStandard";
import ImageWrapper from "@/components/imageWrapper";
import ImageComponent from "@/components/image";

import Image from "next/image";

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
                        <div className="relative w-full m-auto mb-8 overflow-hidden md:w-5/12 content md:mb-0">
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
                        <div className="w-full  md:w-7/12 content md:pr-10 xl:pr-14 md:pl-4">
                          <div className="content">
                            <p>안녕하세요. 김경화입니다.</p>
                            <p>
                              처음, <br />
                              <br />
                              비영리 한인학부모지원단체 함께하는교육은 미국에서
                              아이들을 키우고 있는 엄마 아빠들이 모여서 다음과
                              같은 취지와 목표를 가지고 시작했습니다.{" "}
                            </p>
                            <p className="ml-6">
                              <span>1.</span>문제를 공감합니다. 원래 미국이라는
                              곳이 획일적이지 않은 나라입니다. 동네마다 제각기
                              다른 교육정책과 시스템을 가지고 있는 이 나라의
                              휘황찬란한 다양함이 우리 부모들에게는
                              외로움입니다.
                            </p>
                            <p className="ml-6">
                              <span>2.</span> 지식을 공유합니다. 혼자 알고
                              있으면 비밀이고, 둘이 알며 상식이 되고, 열이 알면
                              흐름입니다. 그 흐름이 방향을 잡으면 물줅고,
                              물줄기가 커지면 변화입니다.
                            </p>
                            <p className="ml-6">
                              <span>3.</span>지혜를 모읍니다. 체험을 통해 지혜를
                              얻습니다. 지혜로운 부모가 우리아이들에게 사랑을
                              전하고 그들도 사랑을 하고 나누면 좋은 세상이
                              온다고 믿습니다.
                            </p>
                            <p className="ml-6">
                              <span>4.</span>믿는 바를 실천합니다. 우리가 지금
                              살고 있는 커뮤니티에서 좋은 본보기를 만들어 내고
                              싶습니다.
                            </p>
                            <p>
                              그러자, <br />
                              <br /> 미국학교 교육자들과 지역 커뮤니티 리더들이
                              서로 배우자고 힘을 보탰습니다. 그들은 한국을 알고
                              싶어하고 아시아를 배우는 보석이 되겠다고 합니다.
                              우리는 미국을 배우고 서양을 알고 싶어하는 보석이
                              되기로 했습니다. 그렇게 모인 두 문화를 가진 우리
                              한사람 한사람은 여러가지 모양과 본연의 색상을 지닌
                              보석입니다.{" "}
                            </p>
                            <p>
                              이곳에 오신 여러분은 어떤 보석으로 빛나고
                              싶으십니까?{" "}
                            </p>
                            <p>
                              아름다운 모양의 독특한 광채를 비추는 보석들이
                              움직이는 멋진 보물섬에 오신 여러분을 환영합니다!
                            </p>
                            <p>
                              김경화 <br />
                              함께하는교육 대표
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="content">
                        <div className="text-center w-full text-2xl py-6">
                          <h4>프로필</h4>
                        </div>
                        <div className="flex flex-wrap text-center justify-center align-middle">
                          <div className="">
                            <ul className="border-t border-off-black border-opacity-80">
                              <li className="flex py-5 md:py-6 border-b border-off-black border-opacity-80">
                                <span class="text-left text-gray-500 md:flex-1 text-md md:text-md xl:text-xl xl:leading-[1.2] font-normal font-display text-navy flex-1 block">
                                  대표
                                </span>
                                <span class="text-left ml-6 text-md md:text-md xl:text-xl xl:leading-[1.2] font-normal font-display text-navy block">
                                  함께하는교육
                                </span>
                              </li>
                              <li className="flex py-5 md:py-6 border-b border-off-black border-opacity-80">
                                <span class="text-left text-gray-500 md:flex-1 text-md md:text-md xl:text-xl xl:leading-[1.2] font-normal font-display text-navy flex-1 block">
                                  수석부회장
                                </span>

                                <span class="text-left ml-6 text-md md:text-md xl:text-xl xl:leading-[1.2] font-normal font-display text-navy block">
                                  뉴욕한인회 36대, 37대
                                </span>
                              </li>
                              <li className="flex py-5 md:py-6 border-b border-off-black border-opacity-80">
                                <span class="text-left md:flex-1 text-gray-500 text-md md:text-md xl:text-xl xl:leading-[1.2] font-normal font-display text-navy flex-1 block">
                                  교장
                                </span>

                                <span class="text-left ml-6 text-md md:text-md xl:text-xl xl:leading-[1.2] font-normal font-display text-navy block">
                                  가나다라한국문화학교
                                </span>
                              </li>
                              <li className="flex py-5 md:py-6 border-b border-off-black border-opacity-80">
                                <span class="text-left md:flex-1 text-gray-500 text-md md:text-md xl:text-xl xl:leading-[1.2] font-normal font-display text-navy flex-1 block">
                                  대표
                                </span>

                                <span class="text-left ml-6 text-md md:text-md xl:text-xl xl:leading-[1.2] font-normal font-display text-navy block">
                                  재외동포청소년네트워크
                                </span>
                              </li>
                              <li className="flex py-5 md:py-6 border-b border-off-black border-opacity-80">
                                <span class="text-left md:flex-1 text-gray-500 text-md md:text-md xl:text-xl xl:leading-[1.2] font-normal font-display text-navy flex-1 block">
                                  이사
                                </span>

                                <span class="text-left ml-6 text-md md:text-md xl:text-xl xl:leading-[1.2] font-normal font-display text-navy block">
                                  전미여성유권자연맹 뉴저지노던벨리지구
                                </span>
                              </li>
                              <li className="flex py-5 md:py-6 border-b border-off-black border-opacity-80">
                                <span class="text-left md:flex-1 text-gray-500 text-md md:text-md xl:text-xl xl:leading-[1.2] font-normal font-display text-navy flex-1 block">
                                  개설위원장
                                </span>

                                <span class="text-left ml-6 text-md md:text-md xl:text-xl xl:leading-[1.2] font-normal font-display text-navy block">
                                  (전)미주한국어재단 한국어반개설위원회
                                </span>
                              </li>
                              <li className="flex py-5 md:py-6 border-b border-off-black border-opacity-80">
                                <span class="text-left md:flex-1 text-gray-500 text-md md:text-md xl:text-xl xl:leading-[1.2] font-normal font-display text-navy flex-1 block">
                                  감사
                                </span>

                                <span class="text-left ml-6 text-md md:text-md xl:text-xl xl:leading-[1.2] font-normal font-display text-navy block">
                                  (전)민주평통뉴욕협의회 18기
                                </span>
                              </li>
                              <li className="flex py-5 md:py-6 border-b border-off-black border-opacity-80">
                                <span class="text-left md:flex-1 text-gray-500 text-md md:text-md xl:text-xl xl:leading-[1.2] font-normal font-display text-navy flex-1 block">
                                  교육분과위원장
                                </span>

                                <span class="text-left ml-6 text-md md:text-md xl:text-xl xl:leading-[1.2] font-normal font-display text-navy block">
                                  (전)민주평통뉴욕협의회 16기
                                </span>
                              </li>
                              <li className="flex py-5 md:py-8 border-b border-off-black border-opacity-80">
                                <span class="text-left md:flex-1 text-gray-500 text-md md:text-md xl:text-xl xl:leading-[1.2] font-normal font-display text-navy flex-1 block">
                                  자문위원
                                </span>

                                <span class="text-left ml-6 text-md md:text-md xl:text-xl xl:leading-[1.2] font-normal font-display text-navy block">
                                  (전)민주평통뉴욕협의회 14기
                                </span>
                              </li>
                              <li className="flex py-5 md:py-8 border-b border-off-black border-opacity-80">
                                <span class="text-left md:flex-1 text-gray-500 text-md md:text-md xl:text-xl xl:leading-[1.2] font-normal font-display text-navy flex-1 block">
                                  연합회장
                                </span>

                                <span class="text-left ml-6 text-md md:text-md xl:text-xl xl:leading-[1.2] font-normal font-display text-navy block">
                                  (전)뉴저지버겐카운티한인학부모연합회
                                </span>
                              </li>
                              <li className="flex py-5 md:py-8 border-b border-off-black border-opacity-80">
                                <span class="text-left md:flex-1 text-gray-500 text-md md:text-md xl:text-xl xl:leading-[1.2] font-normal font-display text-navy flex-1 block">
                                  교육위원
                                </span>

                                <span class="text-left ml-6 text-md md:text-md xl:text-xl xl:leading-[1.2] font-normal font-display text-navy block">
                                  (전)뉴저지 노우드학군 교육위원 5선
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>{" "}
                      </div>
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
 *[_type == "about" && title.en == "About"] | order(_createdAt desc) {
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
