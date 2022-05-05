export default function UpcomingEvent() {
    return (
         <div className="flex flex-wrap">
              <h2
                className="relative block pb-2 mb-2 text-3xl uppercase md:text-4xl lg:text-5xl 2xl:text-6xl after:absolute after:h-[4px] after:bg-blue after:w-[100%] after:left-[0] after:right-[12.5%] after:bottom-[-5%]"
                // after:absolute
                // after:h-[4px]
                // after:bg-purple
                // after:w-[70%]
                // after:left-[0]
                // after:right-[12.5%]
                // after:top-[8%]
              >
                Upcoming event
                {/* <div className="line w-[350px] mt-2 h-[4px] bg-blue"></div> */}
              </h2>

              <div className="relative flex justify-center w-full mx-auto mt-8 align-middle">
                {/* <ImageComponent
                    image={
                      homepageData.heroImage !== null
                        ? homepageData.heroImage.url
                        : "https://via.placeholder.com/50"
                    }
                  /> */}
                <Image
                  src={homepageData.heroImage.url}
                  width="400"
                  height="600"
                />

                <br />
                <br />
              </div>
            </div>
    )
}