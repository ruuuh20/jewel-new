import Link from "next/link";
import Container from "@/components/container";

/**
 * RelatedPages Component
 * 
 * Reusable bottom navigation component showing related pages as cards
 * 
 * @param {Object} props
 * @param {string} props.title - Section title (e.g., "Learn More About Educate Together")
 * @param {Array} props.pages - Array of page objects with: { href, title, description }
 * @param {string} props.context - Optional context ('about', 'programs', etc.) for styling
 * 
 * Usage:
 * <RelatedPages 
 *   title="Explore More"
 *   pages={[
 *     { href: "/about", title: "Our Mission", description: "Learn about our vision" },
 *     { href: "/programs", title: "Programs", description: "See what we offer" }
 *   ]}
 * />
 */

export default function RelatedPages({ title, pages, context = "default" }) {
  // Default pages if none provided (About section)
  const defaultPages = [
    { href: "/about", title: "Our Mission", description: "Learn about our vision and values" },
    { href: "/founder", title: "Founder's Message", description: "Hear from our founder" },
    { href: "/leadership", title: "Leadership", description: "Meet our team" },
    { href: "/history", title: "Our History", description: "Explore our journey" },
  ];

  const displayPages = pages || defaultPages;
  const displayTitle = title || "Learn More About Educate Together";

  return (
    <Container>
      <section className="py-12 border-t border-gray-200 md:py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-8 text-center">
            {displayTitle}
          </h3>
          <div className={`grid gap-6 ${
            displayPages.length === 2 ? 'md:grid-cols-2 max-w-3xl mx-auto' :
            displayPages.length === 3 ? 'md:grid-cols-3' :
            'md:grid-cols-2 lg:grid-cols-4'
          }`}>
            {displayPages.map((page, index) => (
              <Link href={page.href} key={index}>
                <a className="group">
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#c17854] h-full hover:-translate-y-1">
                    <h4 className="text-xl font-bold text-[#120902] mb-2 group-hover:text-[#1e3a5f] transition-colors">
                      {page.title}
                    </h4>
                    <p className="text-sm text-gray-600 md:text-base">
                      {page.description}
                    </p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}