import { useState } from 'react';

// ============================================
// LEGACY FORM (keeping as-is in case it's used somewhere)
// ============================================
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
            className="w-full px-4 py-3 text-base leading-tight text-black transition duration-200 ease-in-out border-2 border-gray-200 appearance-none md:text-xl focus:outline-none focus:border-[#c17854]"
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
            className="w-full px-4 py-3 text-base leading-tight text-black transition duration-200 ease-in-out border-2 border-gray-200 appearance-none md:text-xl focus:outline-none focus:border-[#c17854]"
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
            className="w-full px-4 py-3 text-base leading-tight text-black transition duration-200 ease-in-out border-2 border-gray-200 appearance-none md:text-xl focus:outline-none focus:border-[#c17854]"
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
            className="w-full px-4 py-3 text-base leading-tight transition duration-200 ease-in-out border-2 border-gray-200 appearance-none md:text-xl focus:outline-none focus:border-[#c17854]"
            id="message"
            placeholder="Message"
            name="message"
          />
        </div>

        <button
          className="block px-6 py-2 ml-auto text-lg tracking-wide text-right text-white border-2 rounded-lg lg:text-xl border-[#c17854] bg-[#c17854] hover:bg-[#a85232] transition-all duration-300"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

// ============================================
// CONTACT FORM - Modernized
// ============================================
export const ContactForm = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const form = e.target;
    const formData = new FormData(form);

    try {
      // Your existing Formspree endpoint
      const response = await fetch('https://formspree.io/f/moqrlknp', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="text" name="_gotcha" className="hidden" />
      
      {/* Name Field */}
      <div>
        <label htmlFor="full-name" className="block text-sm font-semibold text-[#120902] mb-2">
          Name <span className="text-[#c17854]">*</span>
        </label>
        <input
          type="text"
          name="name"
          id="full-name"
          placeholder="First and Last Name"
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c17854] focus:outline-none transition-colors"
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email-address" className="block text-sm font-semibold text-[#120902] mb-2">
          Email Address <span className="text-[#c17854]">*</span>
        </label>
        <input
          type="email"
          name="_replyto"
          id="email-address"
          placeholder="email@domain.tld"
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c17854] focus:outline-none transition-colors"
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[#120902] mb-2">
          Message <span className="text-[#c17854]">*</span>
        </label>
        <textarea
          rows="5"
          name="message"
          id="message"
          placeholder="Your Message"
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c17854] focus:outline-none transition-colors resize-none"
        />
      </div>

      <input type="hidden" name="_subject" value="Contact Form Submission" />

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={loading}
          className={`
            w-full px-8 py-4 font-bold text-white rounded-lg shadow-lg 
            transition-all duration-300
            ${loading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-[#c17854] hover:bg-[#a85232] hover:shadow-xl hover:-translate-y-0.5'
            }
          `}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="p-4 border-2 border-green-200 rounded-lg bg-green-50">
          <p className="font-semibold text-green-800">
            ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 border-2 border-red-200 rounded-lg bg-red-50">
          <p className="font-semibold text-red-800">
            ✗ Oops! There was an error sending your message. Please try again or email us directly.
          </p>
        </div>
      )}
    </form>
  );
}

// ============================================
// MEMBER FORM - Modernized with Your Original Fields
// ============================================
export const MemberForm = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const form = e.target;
    const formData = new FormData(form);

    try {
      // Your existing Formspree endpoint
      const response = await fetch('https://formspree.io/f/mvollrpo', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Full Name */}
      <div>
        <label htmlFor="full-name" className="block text-sm font-semibold text-[#120902] mb-2">
          Full Name <span className="text-[#c17854]">*</span>
        </label>
        <input
          type="text"
          name="name"
          id="full-name"
          placeholder="First and Last"
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c17854] focus:outline-none transition-colors"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email-address" className="block text-sm font-semibold text-[#120902] mb-2">
          Email Address <span className="text-[#c17854]">*</span>
        </label>
        <input
          type="email"
          name="_replyto"
          id="email-address"
          placeholder="email@domain.tld"
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c17854] focus:outline-none transition-colors"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone-number" className="block text-sm font-semibold text-[#120902] mb-2">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          id="phone-number"
          placeholder="###-###-####"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c17854] focus:outline-none transition-colors"
        />
      </div>

      {/* I am a: */}
      <div>
        <label htmlFor="timely" className="block text-sm font-semibold text-[#120902] mb-2">
          I am a: <span className="text-[#c17854]">*</span>
        </label>
        <select
          name="timely"
          id="timely"
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c17854] focus:outline-none transition-colors"
        >
          <option value="" disabled selected>Choose</option>
          <option value="District Administrator">District Administrator</option>
          <option value="School Teacher">School Teacher</option>
          <option value="Student">Student</option>
          <option value="Parent">Parent</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* How did you hear about us? */}
      <div>
        <label htmlFor="quality" className="block text-sm font-semibold text-[#120902] mb-2">
          How did you hear about us? <span className="text-[#c17854]">*</span>
        </label>
        <select
          name="quality"
          id="quality"
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c17854] focus:outline-none transition-colors"
        >
          <option value="" disabled selected>Choose</option>
          <option value="Word of mouth">Word of mouth</option>
          <option value="Search Engine/Google">Search Engine/Google</option>
          <option value="Social Media">Social Media</option>
          <option value="Networking Event">Networking Event</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Additional Comments */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[#120902] mb-2">
          Additional Comments <span className="text-[#c17854]">*</span>
        </label>
        <textarea
          rows="3"
          name="message"
          id="message"
          placeholder="Comments"
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c17854] focus:outline-none transition-colors resize-none"
        />
      </div>

      <input type="hidden" name="_subject" value="Survey Responses" />

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={loading}
          className={`
            w-full px-8 py-4 font-bold text-white rounded-lg shadow-lg 
            transition-all duration-300
            ${loading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-[#c17854] hover:bg-[#a85232] hover:shadow-xl hover:-translate-y-0.5'
            }
          `}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </div>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="p-4 border-2 border-green-200 rounded-lg bg-green-50">
          <p className="font-semibold text-green-800">
            ✓ Thank you for your membership application! We'll review it and get back to you soon.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 border-2 border-red-200 rounded-lg bg-red-50">
          <p className="font-semibold text-red-800">
            ✗ Oops! There was an error submitting your application. Please try again or email us directly.
          </p>
        </div>
      )}
    </form>
  );
}

// ============================================
// PARTNERSHIP FORM - Modernized with Your Original Fields
// ============================================
export const PartnershipForm = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const form = e.target;
    const formData = new FormData(form);

    try {
      // Your existing Formspree endpoint
      const response = await fetch('https://formspree.io/f/mwkyypro', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Organization/Company Name */}
      <div>
        <label htmlFor="full-name" className="block text-sm font-semibold text-[#120902] mb-2">
          Organization/Company Name <span className="text-[#c17854]">*</span>
        </label>
        <input
          type="text"
          name="name"
          id="full-name"
          placeholder="Your organization/company"
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c17854] focus:outline-none transition-colors"
        />
      </div>

      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-semibold text-[#120902] mb-2">
          Title <span className="text-[#c17854]">*</span>
        </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Your title"
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c17854] focus:outline-none transition-colors"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-[#120902] mb-2">
          Email Address <span className="text-[#c17854]">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email"
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c17854] focus:outline-none transition-colors"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-[#120902] mb-2">
          Phone <span className="text-[#c17854]">*</span>
        </label>
        <input
          type="tel"
          name="_replyto"
          id="phone"
          placeholder="Your Phone #"
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c17854] focus:outline-none transition-colors"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[#120902] mb-2">
          Message <span className="text-[#c17854]">*</span>
        </label>
        <textarea
          rows="5"
          name="message"
          id="message"
          placeholder="Your Message"
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c17854] focus:outline-none transition-colors resize-none"
        />
      </div>

      <input type="hidden" name="_subject" value="Contact Form Submission" />

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={loading}
          className={`
            w-full px-8 py-4 font-bold text-white rounded-lg shadow-lg 
            transition-all duration-300
            ${loading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-[#c17854] hover:bg-[#a85232] hover:shadow-xl hover:-translate-y-0.5'
            }
          `}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </div>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="p-4 border-2 border-green-200 rounded-lg bg-green-50">
          <p className="font-semibold text-green-800">
            ✓ Thank you for your partnership inquiry! We're excited to explore collaboration opportunities with you.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 border-2 border-red-200 rounded-lg bg-red-50">
          <p className="font-semibold text-red-800">
            ✗ Oops! There was an error submitting your inquiry. Please try again or email us directly.
          </p>
        </div>
      )}
    </form>
  );
}