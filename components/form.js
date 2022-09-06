export const Form = () => {
  return (
    <div className="mt-4 mb-8 md:mb-0 md:mx-20 xl:mx-32 2xl:mx-40">
      <form
        method="POST"
        action="#"
        className="contact-form"
      >
        <input type="text" name="_gotcha" className="hidden" />

        <div className="mb-4">
          <label className="sr-only" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-4 py-3 text-base leading-tight text-black transition duration-200 ease-in-out border-2 border-transparent appearance-none md:text-xl focus:outline-none focus:border-yellow"
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
            className="w-full px-4 py-3 text-base leading-tight text-black transition duration-200 ease-in-out border-2 border-transparent appearance-none md:text-xl focus:outline-none focus:border-yellow"
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
            className="w-full px-4 py-3 text-base leading-tight text-black transition duration-200 ease-in-out border-2 border-transparent appearance-none md:text-xl focus:outline-none focus:border-yellow"
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
            className="w-full px-4 py-3 text-base leading-tight transition duration-200 ease-in-out border-2 border-transparent appearance-none md:text-xl focus:outline-none focus:border-yellow textb-off-lack"
            id="message"
            placeholder="Message"
            name="message"
          />
        </div>

        <button
          className="block px-6 py-2 ml-auto text-lg tracking-wide text-right text-white border-4 rounded-lg lg:text-xl border-blue bg-blue"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export const  ContactForm = () => {
  return (
    <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/moqrlknp}" method="post">
  <fieldset id="fs-frm-inputs">
    <label for="full-name">Name</label>
    <input type="text" name="name" id="full-name" placeholder="First and Last Name" required="true" />
    <label for="email-address">Email Address</label>
    <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="true" />
    <label for="message">Message</label>
    <textarea rows="5" name="message" id="message" placeholder="Your Message" required=""></textarea>
    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
  </fieldset>
  <input type="submit" value="Send Message" />
</form>
  )
}

export const  MemberForm = () => {
  return (
    <form id="fs-frm" name="survey-form" accept-charset="utf-8" action="https://formspree.io/f/mvollrpo" method="post">
  <fieldset id="fs-frm-inputs">
    <label for="full-name">Full Name</label>
    <input type="text" name="name" id="full-name" placeholder="First and Last" required="true" />
    <label for="email-address">Email Address</label>
    <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="true" />
    <label for="email-address">Phone</label>
    <input type="phone" name="_replyto" id="phone-number" placeholder="###-###-####"  />
    <fieldset id="fs-frm-selects">
      <label for="timely">I am a:</label>
      <select name="timely" id="timely" required="">
        <option value="" selected="" disabled="">Choose</option>
        <option value="1">District Administrator</option>
        <option value="3">School Teacher</option>
        <option value="3">Student</option>
        <option value="3">Parent</option>
        <option value="3">Other</option>
       
      </select>
      <label for="timely">How did you hear about us?</label>
      <select name="quality" id="quality" required="">
        <option value="" selected="" disabled="">Choose</option>
        <option value="1">Word of mouth</option>
        <option value="3">Search Engine/Google</option>
        <option value="5">Social Media</option>
        <option value="7">Networking Event</option>
        <option value="9">Other</option>
      </select>
    </fieldset>
    <label for="message">Additional Comments</label>
    <textarea rows="3" name="message" id="message" placeholder="Comments" required=""></textarea>
    <input type="hidden" name="_subject" id="email-subject" value="Survey Responses" />
  </fieldset>
  <input type="submit" value="Submit" />
</form>
  )
}

export const  PartnershipForm = () => {
  return (
    <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/mwkyypro" method="post">
  <fieldset id="fs-frm-inputs">
    <label for="full-name">Organization/Company Name</label>
    <input type="text" name="name" id="full-name" placeholder="Your organization/company" required="true" />
    <label for="full-name">Title</label>
    <input type="text" name="title" id="title" placeholder="Your title" required="true" />
    <label for="email-address">Email Address</label>
    <input type="text" name="email" id="email" placeholder="Your email" required="true" />
    <label for="email-address">Phone</label>
    <input type="phone" name="_replyto" id="phone" placeholder="Your Phone #" required="true" />
    <label for="message">Message</label>
    <textarea rows="5" name="message" id="message" placeholder="Your Message" required=""></textarea>
    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
  </fieldset>
  <input type="submit" value="Submit" />
</form>
  )
}