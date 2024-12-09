import Head from "next/head";
import { useRouter } from "next/router";
// import { getClient, usePreviewSubscription } from "../sanity";
import { NextSeo } from "next-seo";
import Image from "next/image"
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
                  Korean American Immigration History Exhibit
                </h1>
              </section>
          </div>

        
        <Container>
            <section>
             <div className="pt-[17.5vw] md:pt-[12vw] xl:pt-[7vw] relative">
      <div className="absolute top-0 left-[calc(50%-1px)] h-[15vw] md:h-[10vw] xl:h-[6vw] bg-white/30 w-[1px]"></div>

      <div className="flex flex-wrap justify-center border-b border-white/30 pb-[5vw] md:pb-[3.3vw]">
        <div className="w-11/12 md:w-8/12">
          
              <h2 className="mb-3">asdjasd</h2>
          
        
          
          
            <h3 className="text-[8vw] line-1 md:text-[5.75vw] font-display tracking-tight text-center">Korean American Immigration History Exhibit</h3>
          
        </div>
      </div>
    </div>
             <div className="pt-[17.5vw] md:pt-[12vw] xl:pt-[7vw] relative">
      <div className="absolute top-0 left-[calc(50%-1px)] h-[15vw] md:h-[10vw] xl:h-[6vw] bg-white/30 w-[1px]"></div>

      <div className="flex flex-wrap justify-center border-b border-white/30 pb-[5vw] md:pb-[3.3vw]">
        <div className="w-11/12 md:w-8/12">
          
              
        
          
          
            <h3 className="text-[4vw] line-1 md:text-[2vw] font-display tracking-tight text-center">First Korean Immigrants to Hawaii</h3>
          
        </div>
      </div>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="col-span-1 md:border-r md:border-white/30 flex justify-center py-12 md:py-[7.5vw]">
                    <div className="w-10/12 md:w-9/12">
                      <div className="md:max-w-[550px] mx-auto text-[20px] md:text-[23px] xl:text-[26px] line-12">
                        <p>With the Chosun King Kojong&rsquo;s approval and
through Yoominwon (Immigrant Recruiting
Agency) 121 applicants for labor emigration to Hawaii were recruited from across the country. Following a physical examination at
Port Nagasaki, Japan, 19 of these applicants
were deemed unfit for travel. </p>
                        <br/>

                        <p>On December 2, 1902, the remaining 102 applicants left
Chemulpo (present day Incheon) for the U.S. aboard the S.S. Gaelic, an American Trans-Pacific
steamship. The first group of these pioneer immigrants arrived in Port Honolulu, Hawaii on
January 13, 1903, with labor immigration continuing until 1905. During this period, a total of
7,415 Koreans migrated to Hawaii. Consisting of Christians, exchange students, farmhands, and
others, they were dispersed across Hawaii's 5 islands—primarily on sugarcane fields and
pineapple farms—to build their new lives here through manual labor.</p>
<br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<br/>
                       
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

      <div className="flex flex-wrap justify-center border-b border-white/30 pb-[5vw] md:pb-[3.3vw]">
     
      </div>
    </div>
             <div className="pt-[17.5vw] md:pt-[12vw] xl:pt-[7vw] relative">
      <div className="absolute top-0 left-[calc(50%-1px)] h-[15vw] md:h-[10vw] xl:h-[6vw] bg-white/30 w-[1px]"></div>

      <div className="flex flex-wrap justify-center border-b border-white/30 pb-[5vw] md:pb-[3.3vw]">
        <div className="w-11/12 md:w-8/12">
          
              
        
          
          
            <h3 className="text-[4vw] line-1 md:text-[2vw] font-display tracking-tight text-center">Pachappa Camp- The first Koreatown
in the United States
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
                        <p>In 1905, Korean immigrant and activist Dosan Ahn Chang-Ho founded the first Koreatown in the United States. Over the next eight years, Pachappa Camp in Riverside, California became the home of approximately 300 Korean American men, women, and children.
Most of the adult residents were agricultural laborers who worked on citrus and other fruit
farms in nearby towns. In addition to its approximately 20 single-story, wood-frame
dwellings, Pachappa Camp had language schools, a community center, and a Presbyterian
Church. Its residents enjoyed a lively social and political life until the Great Citrus Freeze of
1913, when families began moving to other California agricultural communities. By 1918,
Pachappa Camp was no more. However, its legacy lives on.</p>
                        <br/>

                        
<br/>
                       
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
