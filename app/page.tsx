import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import HomePage from "@/components/home/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carmel Oasis Photo Gallery and Convent Care Story",
  description:
    "Explore Carmel Oasis at Pushpasadan Old Age Home through real campus photography, convent-led care storytelling, community moments, and search-friendly content.",
  openGraph: {
    title: "Carmel Oasis | Pushpasadan Old Age Home",
    description:
      "A warmer, more interactive homepage for Carmel Oasis with real photos, stronger trust signals, and richer SEO content.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carmel Oasis | Pushpasadan Old Age Home",
    description:
      "Real photos, calmer storytelling, and a stronger homepage for Carmel Oasis.",
  },
};

const elderlyCareStructuredData = {
  "@context": "https://schema.org",
  "@type": "ElderlyCare",
  name: "Carmel Oasis at Pushpasadan Old Age Home",
  alternateName: "Pushpasadan Old Age Home",
  description:
    "A convent-run elder care home presented through real campus photography, faith-rooted hospitality, and community-centered storytelling.",
  serviceType: "Residential elder care",
  areaServed: "India",
  image: [
    "/photos/carmel-oasis-exterior.jpg",
    "/photos/sisters-front.jpg",
    "/photos/community-team.jpg",
  ],
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why does this homepage help SEO more than the previous version?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It now includes real campus imagery, richer headings, image alt text, structured FAQ content, and place-based copy that helps search engines understand the page more clearly.",
      },
    },
    {
      "@type": "Question",
      name: "How do the new photos improve trust?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The photos connect the website to actual people, actual grounds, and the actual atmosphere of Carmel Oasis, which makes the page feel more credible and welcoming.",
      },
    },
    {
      "@type": "Question",
      name: "What should be added next for even stronger rankings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Verified contact details, a map location, local address information, and dedicated supporting pages for facilities, mission, and enquiries would strengthen local search visibility further.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(elderlyCareStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}
