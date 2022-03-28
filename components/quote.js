export default function Quote({ quote, personJobTitle}) {
  return (
    <div className="flex flex-wrap w-full my-8 md:my-12 2xl:my-16">
      <div className="w-full">
        <div className="pt-5 pb-5 border-b md:border-t md:border-b-0 border-brown md:pb-0 md:pt-8 2xl:pt-10">
          <span className="block pb-0 mb-2 text-4xl leading-none font-display md:text-5xl 2xl:text-6xl md:mb-0">“</span>
          <p className="block mb-3 -mt-5 text-xl leading-tight font-display md:text-xl lg:text-2xl xl:text-3xl md:leading-tight 2xl:leading-tight md:mb-4">{quote}</p>

          <div className="">
            <span className="block leading-snug md:text-lg">{personJobTitle}</span>
          </div>
        </div>
      </div>
    </div>
  )
}