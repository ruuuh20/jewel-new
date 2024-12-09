import Head from "next/head";
import { useRouter } from "next/router";
// import { getClient, usePreviewSubscription } from "../sanity";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Layout from "@/components/layout";
import Container from "@/components/container";
import { fade, textReveal } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";

export default function Exhibit(props) {
  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  return (
    <>
      <div className="bg-dark text-light">
        <Layout isExhibitPage={true}>
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
                <section>
                  <h1 className="uppercase text-[18vw]/[0.95] md:text-[10.75vw]/[0.95] lg:text-[10.8vw]/[0.95] xl:text-[11vw]/[0.95] font-display tracking-tight w-full text-center md:whitespace-nowrap border-b border-white/30 pb-3">
                    Korean American Immigration History: A story for everyone
                  </h1>
                </section>
              </div>

              <Container>
                <section>
                  <div className="pt-[17.5vw] md:pt-[12vw] xl:pt-[7vw] relative">
                    <div className="absolute top-0 left-[calc(50%-1px)] h-[15vw] md:h-[10vw] xl:h-[6vw] bg-white/30 w-[1px]"></div>

                    <div className="flex flex-wrap justify-center border-b border-white/30 pb-[5vw] md:pb-[3.3vw]">
                      <div className="w-11/12 md:w-8/12">
                        <h2 className="mx-auto mb-3 text-center">
                          The history of Korean Americans is an important part
                          of the larger story of America.
                        </h2>

                        <h3 className="text-[8vw] line-1 md:text-[5.75vw] font-display tracking-tight text-center">
                          Korean American Immigration History Exhibit
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="pt-[17.5vw] md:pt-[12vw] xl:pt-[7vw] relative">
                    <div className="absolute top-0 left-[calc(50%-1px)] h-[15vw] md:h-[10vw] xl:h-[6vw] bg-white/30 w-[1px]"></div>

                    <div className="flex flex-wrap justify-center border-b border-white/30 pb-[5vw] md:pb-[3.3vw]">
                      <div className="w-11/12 md:w-8/12">
                        <h3 className="text-[4vw] line-1 md:text-[2vw] font-display tracking-tight text-center">
                          First Korean Immigrants to Hawaii
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="col-span-1 md:border-r md:border-white/30 flex justify-center py-12 md:py-[7.5vw]">
                      <div className="w-10/12 md:w-9/12">
                        <div className="md:max-w-[550px] mx-auto text-[20px] md:text-[23px] xl:text-[26px] line-12">
                          <p>
                            With the Chosun King Kojong&rsquo;s approval and
                            through Yoominwon (Immigrant Recruiting Agency) 121
                            applicants for labor emigration to Hawaii were
                            recruited from across the country. Following a
                            physical examination at Port Nagasaki, Japan, 19 of
                            these applicants were deemed unfit for travel.{" "}
                          </p>
                          <br />

                          <p>
                            On December 2, 1902, the remaining 102 applicants
                            left Chemulpo (present day Incheon) for the U.S.
                            aboard the S.S. Gaelic, an American Trans-Pacific
                            steamship. The first group of these pioneer
                            immigrants arrived in Port Honolulu, Hawaii on
                            January 13, 1903, with labor immigration continuing
                            until 1905. During this period, a total of 7,415
                            Koreans migrated to Hawaii. Consisting of
                            Christians, exchange students, farmhands, and
                            others, they were dispersed across Hawaii's 5
                            islands—primarily on sugarcane fields and pineapple
                            farms—to build their new lives here through manual
                            labor.
                          </p>
                          <br />

                          <br />
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1 pl-0 pr-0 mb-3 md:p-4 md:p-5 md:pr-0 md:pb-0 md:mb-0">
                      <div class="relative">
                        <div class="aspect-square aspect-2">
                          <Image
                            src="/slides/slide1-0.png"
                            // width={768}
                            // height="100%"
                            layout="fill"
                            className="md:text-right"
                          />
                        </div>
                      </div>
                      <div class="relative mt-4">
                        <div class="aspect-square aspect-2">
                          <Image
                            src="/slides/slide1-a.png"
                            // width={768}
                            // height="100%"
                            layout="fill"
                            className="md:text-right"
                          />
                        </div>
                      </div>
                      <div class="relative mt-4">
                        <div class="aspect-square aspect-2">
                          <Image
                            src="/slides/slide1-b.png"
                            // width={768}
                            // height="100%"
                            layout="fill"
                            className="md:text-right"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* slide 2 */}
                <section>
                  <div className="pt-[17.5vw] md:pt-[12vw] xl:pt-[7vw] relative">
                    <div className="absolute top-0 left-[calc(50%-1px)] h-[15vw] md:h-[10vw] xl:h-[6vw] bg-white/30 w-[1px]"></div>

                    <div className="flex flex-wrap justify-center border-b border-white/30 pb-[5vw] md:pb-[3.3vw]"></div>
                  </div>
                  <div className="pt-[17.5vw] md:pt-[12vw] xl:pt-[7vw] relative">
                    <div className="absolute top-0 left-[calc(50%-1px)] h-[15vw] md:h-[10vw] xl:h-[6vw] bg-white/30 w-[1px]"></div>

                    <div className="flex flex-wrap justify-center border-b border-white/30 pb-[5vw] md:pb-[3.3vw]">
                      <div className="w-11/12 md:w-8/12">
                        <h3 className="text-[4vw] line-1 md:text-[2vw] font-display tracking-tight text-center">
                          Pachappa Camp- The first Koreatown in the United
                          States
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="col-span-1 pl-0 pr-0 mb-3 md:p-4 md:p-5 md:pr-0 md:pb-0 md:mb-0">
                      <div className="w-10/12 md:w-9/12">
                        <div class="relative">
                          <div class="aspect-square aspect-2">
                            <Image
                              src="/slides/slide2-a.jpeg"
                              // width={768}
                              // height="100%"
                              layout="fill"
                              className="md:text-right"
                            />
                          </div>
                        </div>
                        <div class="relative mt-4">
                          <div class="aspect-square aspect-2">
                            <Image
                              src="/slides/slide2-b.jpeg"
                              // width={768}
                              // height="100%"
                              layout="fill"
                              className="md:text-right"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1 md:border-r md:border-white/30 flex justify-center py-12 md:py-[7.5vw]">
                      <div className="w-10/12 md:w-9/12">
                        <div className="md:max-w-[550px] mx-auto text-[20px] md:text-[23px] xl:text-[26px] line-12">
                          <p>
                            In 1905, Korean immigrant and activist Dosan Ahn
                            Chang-Ho founded the first Koreatown in the United
                            States. Over the next eight years, Pachappa Camp in
                            Riverside, California became the home of
                            approximately 300 Korean American men, women, and
                            children. Most of the adult residents were
                            agricultural laborers who worked on citrus and other
                            fruit farms in nearby towns. In addition to its
                            approximately 20 single-story, wood-frame dwellings,
                            Pachappa Camp had language schools, a community
                            center, and a Presbyterian Church. Its residents
                            enjoyed a lively social and political life until the
                            Great Citrus Freeze of 1913, when families began
                            moving to other California agricultural communities.
                            By 1918, Pachappa Camp was no more. However, its
                            legacy lives on.
                          </p>
                          <br />

                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* slide 3 */}
                <section>
                  <div className="pt-[17.5vw] md:pt-[12vw] xl:pt-[7vw] relative">
                    <div className="absolute top-0 left-[calc(50%-1px)] h-[15vw] md:h-[10vw] xl:h-[6vw] bg-white/30 w-[1px]"></div>

                    <div className="flex flex-wrap justify-center border-b border-white/30 pb-[5vw] md:pb-[3.3vw]">
                      <div className="w-11/12 md:w-8/12">
                        <h3 className="text-[4vw] line-1 md:text-[2vw] font-display tracking-tight text-center">
                          The Korean Congress in Philadelphia{" "}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="col-span-1 md:border-r md:border-white/30 flex justify-center py-12 md:py-[7.5vw]">
                      <div className="w-10/12 md:w-9/12">
                        <div className="md:max-w-[550px] mx-auto text-[20px] md:text-[23px] xl:text-[26px] line-12">
                          <p>
                            On April 14, 1919, in response to the 3.1
                            Independence Movement in Korea, Jae-pil Seo, along
                            with Syngman Rhee and Han-kyung Chung, gathered with
                            national leaders and 150 Korean Americans in what
                            they coined “The First Korean Congress.” Lasting 3
                            days, this gathering has been referred to as the
                            March First Independence Movement in the U.S. The
                            Congress finished with a march through the streets,
                            a demonstration that was supported by the city of
                            Philadelphia, cheered on by 100 Korean independence
                            supporters, and accompanied by a marching band. The
                            group stopped once they reached the Hall of
                            Independence, where they read the Declaration of
                            Independence that was later unveiled in Seoul.
                          </p>
                          <br />

                          <br />
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1 pl-0 pr-0 mb-3 md:p-4 md:p-5 md:pr-0 md:pb-0 md:mb-0">
                      <div class="relative">
                        <div class="aspect-square aspect-2">
                          <Image
                            src="/slides/slide3-a.jpg"
                            // width={768}
                            // height="100%"
                            layout="fill"
                            className="md:text-right"
                          />
                        </div>
                      </div>
                      <div class="relative mt-4">
                        <div class="aspect-square aspect-2">
                          <Image
                            src="/slides/slide3-b.webp"
                            // width={768}
                            // height="100%"
                            layout="fill"
                            className="md:text-right"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* slide 4 */}
                <section>
                  <div className="pt-[17.5vw] md:pt-[12vw] xl:pt-[7vw] relative">
                    <div className="absolute top-0 left-[calc(50%-1px)] h-[15vw] md:h-[10vw] xl:h-[6vw] bg-white/30 w-[1px]"></div>

                    <div className="flex flex-wrap justify-center border-b border-white/30 pb-[5vw] md:pb-[3.3vw]"></div>
                  </div>
                  <div className="pt-[17.5vw] md:pt-[12vw] xl:pt-[7vw] relative">
                    <div className="absolute top-0 left-[calc(50%-1px)] h-[15vw] md:h-[10vw] xl:h-[6vw] bg-white/30 w-[1px]"></div>

                    <div className="flex flex-wrap justify-center border-b border-white/30 pb-[5vw] md:pb-[3.3vw]">
                      <div className="w-11/12 md:w-8/12">
                        <h3 className="text-[4vw] line-1 md:text-[2vw] font-display tracking-tight text-center">
                          The Establishment of New York’s First Korean American
                          Community
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="col-span-1 pl-0 pr-0 mb-3 md:p-4 md:p-5 md:pr-0 md:pb-0 md:mb-0">
                      <div className="w-10/12 md:w-9/12">
                        <div class="relative">
                          <div class="aspect-square">
                            <Image
                              src="/slides/slide4-a.jpeg"
                              // width={768}
                              // height="100%"
                              layout="fill"
                              className="md:text-right"
                            />
                          </div>
                        </div>
                        <div class="relative mt-4">
                          <div class="aspect-square">
                            <Image
                              src="/slides/slide4-b.jpg"
                              // width={768}
                              // height="100%"
                              layout="fill"
                              className="md:text-right"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1 md:border-r md:border-white/30 flex justify-center py-12 md:py-[7.5vw]">
                      <div className="w-10/12 md:w-9/12">
                        <div className="md:max-w-[550px] mx-auto text-[20px] md:text-[23px] xl:text-[26px] line-12">
                          <p>
                            The first recorded history of a Korean American
                            community in New York is April 18, 1921, when the
                            Korean American Church in New York was established,
                            becoming the center of the Korean American community
                            in New York. The church began with the financial
                            support of the American Methodist Church. In 1927,
                            the church moved from its borrowed space (an
                            American church on 21st street) to their very own
                            space on 115th street. Their English name, “The
                            Korean Church and Institute” communicated the
                            mission of the church to serve as both a venue for
                            practicing faith, as well as a center for the
                            provision of services for Korean Americans; through
                            the days both before and after liberation, the
                            church was a sacred place for Koreanswho had lost
                            their country to regain a sense of belonging. The
                            building itself was also used as a space for various
                            rallies and temporary shelter for student councils,
                            volunteer organizations, and more.
                          </p>
                          <br />
                          <p>
                            While the Korean church was being established, the
                            North American Korean Students’ Congress, a
                            collective of Korean students in the U.S., was
                            founded in New York to promote friendship and unity
                            among students. On April 30, 1921, this Congress
                            established itself at Manhattan International House.
                            An annual meeting was held in early June of every
                            year led by Yong-jik Lee and Byung-ok Cho—their
                            elected president and vice president,
                            respectively—to discuss domestic and foreign issues,
                            as well as to encourage one another. They published
                            “The Korean Student Bulletin” and other similar
                            articles to preserve their Korean culture and morale
                            while living abroad.
                          </p>

                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* slide 5 */}
                <section>
                  <div className="pt-[17.5vw] md:pt-[12vw] xl:pt-[7vw] relative">
                    <div className="flex flex-wrap justify-center border-b border-white/30 pb-[5vw] md:pb-[3.3vw]"></div>
                  </div>
                  <div className="pt-[17.5vw] md:pt-[12vw] xl:pt-[7vw] relative">
                    <div className="absolute top-0 left-[calc(50%-1px)] h-[15vw] md:h-[10vw] xl:h-[6vw] bg-white/30 w-[1px]"></div>

                    <div className="flex flex-wrap justify-center border-b border-white/30 pb-[5vw] md:pb-[3.3vw]">
                      <div className="w-11/12 md:w-8/12">
                        <h3 className="text-[4vw] line-1 md:text-[2vw] font-display tracking-tight text-center">
                          Syngman Rhee and the Spirit of Independence
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="col-span-1 md:border-r md:border-white/30 flex justify-center py-12 md:py-[7.5vw]">
                      <div className="w-10/12 md:w-9/12">
                        <div className="md:max-w-[550px] mx-auto text-[20px] md:text-[23px] xl:text-[26px] line-12">
                          <p>
                            After receiving his Doctorate from Princeton
                            University in 1910 and leading the First Korean
                            Congress with Jaepil Seo in 1919, Syngman Rhee
                            headed to Washington where he established the Korean
                            Commission to America and Europe and was appointed
                            acting president of the provincial government of
                            Korea.
                          </p>
                          <br />
                          <p>
                            On August 29, 1942, Syngman Rhee featured on the
                            first ever broadcast of radio show Voice of America
                            to give Syngman Rhee addressing compatriots through
                            Voice of America (multiple times) his speech titled
                            “Informing our 20 million Compatriots.” He began
                            with, “lam Syngman Rhee. | am addressing our 20
                            million compatriots across the country and scattered
                            abroad.” Day-by-day he brought news of the Pacific
                            War, telling even the news that was unfavorable to
                            Japan and thus imbuing his listeners everywhere with
                            the Spirit of Independence. After Korea's
                            independence, he was flown back to Korea aboard a
                            U.S. military aircraft where he eventually became
                            South Korea's first president.
                          </p>

                          <br />
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1 pl-0 pr-0 mb-3 md:p-4 md:p-5 md:pr-0 md:pb-0 md:mb-0">
                      <div class="relative">
                        <div class="aspect-square">
                          <Image
                            src="/slides/slide5-a.jpg"
                            // width={768}
                            // height="100%"
                            layout="fill"
                            className="md:text-right"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* slide 6 */}
                <section>
                  <div className="pt-[17.5vw] md:pt-[12vw] xl:pt-[7vw] relative">
                    <div className="absolute top-0 left-[calc(50%-1px)] h-[15vw] md:h-[10vw] xl:h-[6vw] bg-white/30 w-[1px]"></div>

                    <div className="flex flex-wrap justify-center border-b border-white/30 pb-[5vw] md:pb-[3.3vw]"></div>
                  </div>
                  <div className="pt-[17.5vw] md:pt-[12vw] xl:pt-[7vw] relative">
                    <div className="absolute top-0 left-[calc(50%-1px)] h-[15vw] md:h-[10vw] xl:h-[6vw] bg-white/30 w-[1px]"></div>

                    <div className="flex flex-wrap justify-center border-b border-white/30 pb-[5vw] md:pb-[3.3vw]">
                      <div className="w-11/12 md:w-8/12">
                        <h3 className="text-[4vw] line-1 md:text-[2vw] font-display tracking-tight text-center">
                          The Outbreak of Korean War and Participation by UN
                          Forces
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="col-span-1 pl-0 pr-0 mb-3 md:p-4 md:p-5 md:pr-0 md:pb-0 md:mb-0">
                      <div className="w-10/12 md:w-9/12">
                        <div class="relative">
                          <div class="aspect-square aspect-2">
                            <Image
                              src="/slides/slide6-a.jpeg"
                              // width={768}
                              // height="100%"
                              layout="fill"
                              className="md:text-right"
                            />
                          </div>
                        </div>
                        <div class="relative mt-4">
                          <div class="aspect-square aspect-2">
                            <Image
                              src="/slides/slide6-b.jpg"
                              // width={768}
                              // height="100%"
                              layout="fill"
                              className="md:text-right"
                            />
                          </div>
                        </div>
                        <div class="relative mt-4">
                          <div class="aspect-square aspect-2">
                            <Image
                              src="/slides/slide6-c.jpeg"
                              // width={768}
                              // height="100%"
                              layout="fill"
                              className="md:text-right"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1 md:border-r md:border-white/30 flex justify-center py-12 md:py-[7.5vw]">
                      <div className="w-10/12 md:w-9/12">
                        <div className="md:max-w-[550px] mx-auto text-[20px] md:text-[23px] xl:text-[26px] line-12">
                          <p>
                            On the dawn of June 25th, 1950, North Korea invaded
                            South Korea across the 38th parallel. That same day
                            at 2 p.m., an emergency draft was issued by the UN
                            Security Council at President Truman's urging,
                            resulting in UN forces joining the Korean War. The
                            battle began with the deployment of the first unit
                            of the U.S. military, Task Force Smith, to the
                            Battle of Osan. The infantry was severely
                            under-equipped and under- prepared. Until the War's
                            ceasefire on July 27th, 1973, a total of 263 units
                            were deployed, including 7 infantry divisions, 1
                            cavalry division, 1 marine division, the Far East
                            Fleet, the U.S. 7th Fleet, and 66 units of the Far
                            East Air force. Within a 3- year span the UN forces
                            recorded 37,902 deaths, of which 33,686 were
                            Americans.
                          </p>
                          <br />

                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* slide 7 */}
                <section>
                  <div className="pt-[17.5vw] md:pt-[12vw] xl:pt-[7vw] relative">
                    <div className="flex flex-wrap justify-center border-b border-white/30 pb-[5vw] md:pb-[3.3vw]"></div>
                  </div>
                  <div className="pt-[17.5vw] md:pt-[12vw] xl:pt-[7vw] relative">
                    <div className="absolute top-0 left-[calc(50%-1px)] h-[15vw] md:h-[10vw] xl:h-[6vw] bg-white/30 w-[1px]"></div>

                    <div className="flex flex-wrap justify-center border-b border-white/30 pb-[5vw] md:pb-[3.3vw]">
                      <div className="w-11/12 md:w-8/12">
                        <h3 className="text-[4vw] line-1 md:text-[2vw] font-display tracking-tight text-center">
                          The Catalyst of the Hallyu Wave: Taekwondo
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="col-span-1 md:border-r md:border-white/30 flex justify-center py-12 md:py-[7.5vw]">
                      <div className="w-10/12 md:w-9/12">
                        <div className="md:max-w-[550px] mx-auto text-[20px] md:text-[23px] xl:text-[26px] line-12">
                          <p>
                            In the early 1960s, Korean taekwondo arrived in
                            Manhattan, New York. Some consider this asthe
                            beginning of the so-called “Korean wave” (Hallyu).
                            Following Si-hak Cho, founder of the “Henry Cho
                            Institute" on 27th street in 1961, In-mun Chun
                            opened “Richard Chun Taekwondo Center’ on 77th
                            street in 1962. In the late 1960s, Duk-sung Sohn and
                            Hyun-ok Shin opened their martial art studios and
                            further introduced Korean taekwondo to Americans.
                            Numerous taekwondo masters who came to the U.S.
                            during the 1970s and 80s also seized the
                            opportunity. With their presence, Korean taekwondo
                            surpassed the popularity of Japanese karate and
                            Chinese kung fu. The pioneering work of these
                            masters contributed to the adoption of taekwondo as
                            an official Olympic event.
                          </p>
                          <br />
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1 pl-0 pr-0 mb-3 md:p-4 md:p-5 md:pr-0 md:pb-0 md:mb-0">
                      <div class="relative">
                        <div class="aspect-square">
                          <Image
                            src="/slides/slide7-a.jpg"
                            // width={768}
                            // height="100%"
                            layout="fill"
                            className="md:text-right"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* slide 8 */}
                <section>
                  <div className="pt-[17.5vw] md:pt-[12vw] xl:pt-[7vw] relative">
                    <div className="absolute top-0 left-[calc(50%-1px)] h-[15vw] md:h-[10vw] xl:h-[6vw] bg-white/30 w-[1px]"></div>

                    <div className="flex flex-wrap justify-center border-b border-white/30 pb-[5vw] md:pb-[3.3vw]"></div>
                  </div>
                  <div className="pt-[17.5vw] md:pt-[12vw] xl:pt-[7vw] relative">
                    <div className="absolute top-0 left-[calc(50%-1px)] h-[15vw] md:h-[10vw] xl:h-[6vw] bg-white/30 w-[1px]"></div>

                    <div className="flex flex-wrap justify-center border-b border-white/30 pb-[5vw] md:pb-[3.3vw]">
                      <div className="w-11/12 md:w-8/12">
                        <h3 className="text-[4vw] line-1 md:text-[2vw] font-display tracking-tight text-center">
                          The Establishment of KAAGNY
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="col-span-1 pl-0 pr-0 mb-3 md:p-4 md:p-5 md:pr-0 md:pb-0 md:mb-0">
                      <div className="w-10/12 md:w-9/12">
                        <div class="relative">
                          <div class="aspect-square aspect-2">
                            <Image
                              src="/slides/slide8-a.jpg"
                              // width={768}
                              // height="100%"
                              layout="fill"
                              className="md:text-right"
                            />
                          </div>
                        </div>
                        <div class="relative mt-4">
                          <div class="aspect-square aspect-2">
                            <Image
                              src="/slides/slide8-b.tif"
                              // width={768}
                              // height="100%"
                              layout="fill"
                              className="md:text-right"
                            />
                          </div>
                        </div>
                        <div class="relative mt-4">
                          <div class="aspect-square aspect-2">
                            <Image
                              src="/slides/slide6-c.jpeg"
                              // width={768}
                              // height="100%"
                              layout="fill"
                              className="md:text-right"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1 md:border-r md:border-white/30 flex justify-center py-12 md:py-[7.5vw]">
                      <div className="w-10/12 md:w-9/12">
                        <div className="md:max-w-[550px] mx-auto text-[20px] md:text-[23px] xl:text-[26px] line-12">
                          <p>
                            In response to the 4.19 Student Revolution in Korea,
                            New York Koreans gathered in front of the UN
                            Headquarters in New York to demonstrate their
                            support of the students fighting for democracy in
                            Korea. This event served as the catalyst for the
                            formation of the Korean American Association of New
                            York, which started out meeting in a Korean church.
                            President Sangbok Seon believed it was time for
                            Korean Americans to begin demonstrating their
                            strength in solidarity with one another. They
                            declared this as the purpose alongside celebrating
                            the birth of a democratic government in Korea as
                            well as harmonizing the community. A pivotal moment
                            for the Korean American community in New York was
                            the1983 purchase of a community building through
                            fundraising by then president of KAAGNY, Ikjo Kang.
                          </p>
                          <br />

                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </Container>
            </m.div>
          </LazyMotion>
        </Layout>
      </div>
    </>
  );
}
