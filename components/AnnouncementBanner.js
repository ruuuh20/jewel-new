import { useState, useEffect } from 'react';
import Link from 'next/link';

const AnnouncementBanner = ({ 
  message = "Root & Routes 2025 Applications Now Open",
  linkText = "Apply Today",
  linkUrl = "/root-and-routes",
  bgColor = "bg-[#c17854]",
  textColor = "text-white",
  enabled = true // Easy on/off switch
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the banner
    const dismissed = localStorage.getItem('bannerDismissed');
    if (!dismissed && enabled) {
      setIsVisible(true);
    }
  }, [enabled]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('bannerDismissed', 'true');
  };

  if (!isVisible || !enabled) return null;

  return (
    <div className={`${bgColor} ${textColor} relative overflow-hidden`}>
      <div className="relative flex items-center justify-center px-4 py-3">
        {/* Scrolling text container */}
        <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
          {/* Repeat the content multiple times for seamless loop */}
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex items-center gap-12">
              <span className="text-sm font-medium md:text-base">
                {message}
              </span>
              <Link href={linkUrl}>
                <a className="text-sm font-bold underline transition-opacity md:text-base hover:opacity-80">
                  {linkText} →
                </a>
              </Link>
            </div>
          ))}
        </div>

        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute z-10 transition-opacity transform -translate-y-1/2 right-4 top-1/2 hover:opacity-70"
          aria-label="Dismiss announcement"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        /* Pause on hover */
        .animate-marquee:hover {
          animation-play-state: paused;
        }

        /* Respect reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBanner;