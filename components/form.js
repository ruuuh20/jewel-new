export default function Form() {
  return (
    <div className="mb-8 mt-4 md:mb-0 md:mx-20 xl:mx-32 2xl:mx-40">
      <form
        method="POST"
        action="https://formspree.io/f/moqrlknp"
        className="contact-form"
      >
        <input type="text" name="_gotcha" className="hidden" />

        <div className="mb-4">
          <label className="sr-only" htmlFor="name">
            Name
          </label>
          <input
            className="appearance-none w-full py-3 px-4 leading-tight border-transparent border-2 focus:outline-none focus:border-yellow text-xl transition ease-in-out duration-200 textb-off-lack"
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="sr-only" htmlFor="_replyto">
            Email
          </label>
          <input
            className="appearance-none w-full py-3 px-4 leading-tight border-transparent border-2 focus:outline-none focus:border-yellow text-xl transition ease-in-out duration-200 textb-off-lack"
            id="_replyto"
            type="email"
            name="_replyto"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="sr-only" htmlFor="tel">
            Phone
          </label>
          <input
            className="appearance-none w-full py-3 px-4 leading-tight border-transparent border-2 focus:outline-none focus:border-yellow text-xl transition ease-in-out duration-200 textb-off-lack"
            id="tel"
            type="tel"
            placeholder="Phone"
            name="tel"
            required
          />
        </div>
        <div className="mb-4">
          <label className="sr-only" htmlFor="message">
            Message
          </label>
          <textarea
            rows="3"
            className="appearance-none w-full py-3 px-4 leading-tight border-transparent border-2 focus:outline-none focus:border-yellow text-xl transition ease-in-out duration-200 textb-off-lack"
            id="message"
            placeholder="Message"
            name="message"
          />
        </div>

        <button
          className="tracking-wide text-lg lg:text-xl block ml-auto text-right rounded-lg border-4 border-purple py-2 px-8 bg-purple text-white"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
