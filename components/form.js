export default function Form() {
  return (
    <div className="mt-4 mb-8 md:mb-0 md:mx-20 xl:mx-32 2xl:mx-40">
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
            className="w-full px-4 py-3 text-xl leading-tight text-black transition duration-200 ease-in-out border-2 border-transparent appearance-none focus:outline-none focus:border-yellow"
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
            className="w-full px-4 py-3 text-xl leading-tight text-black transition duration-200 ease-in-out border-2 border-transparent appearance-none focus:outline-none focus:border-yellow"
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
            className="w-full px-4 py-3 text-xl leading-tight text-black transition duration-200 ease-in-out border-2 border-transparent appearance-none focus:outline-none focus:border-yellow"
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
            className="w-full px-4 py-3 text-xl leading-tight transition duration-200 ease-in-out border-2 border-transparent appearance-none focus:outline-none focus:border-yellow textb-off-lack"
            id="message"
            placeholder="Message"
            name="message"
          />
        </div>

        <button
          className="block px-8 py-2 ml-auto text-lg tracking-wide text-right text-white border-4 rounded-lg lg:text-xl border-blue bg-blue"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
