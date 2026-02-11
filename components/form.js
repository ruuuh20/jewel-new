import { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const form = e.target;
    const formData = new FormData(form);

    try {
      
      const response = await fetch('https://formspree.io/f/xvzbzybn', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus(''), 5000); // Clear message after 5 seconds
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
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-[#120902] mb-2">
          Name <span className="text-[#c17854]">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c17854] focus:outline-none transition-colors"
          placeholder="Your name"
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-[#120902] mb-2">
          Email <span className="text-[#c17854]">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c17854] focus:outline-none transition-colors"
          placeholder="your.email@example.com"
        />
      </div>

      {/* Phone Field (Optional) */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-[#120902] mb-2">
          Phone <span className="text-xs text-gray-400">(Optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c17854] focus:outline-none transition-colors"
          placeholder="(123) 456-7890"
        />
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-[#120902] mb-2">
          Subject <span className="text-[#c17854]">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c17854] focus:outline-none transition-colors"
          placeholder="How can we help?"
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[#120902] mb-2">
          Message <span className="text-[#c17854]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows="6"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c17854] focus:outline-none transition-colors resize-none"
          placeholder="Tell us more about your inquiry..."
        />
      </div>

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