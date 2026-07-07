import {
  config,
  getGoogleMapsUrl,
  getSiteUrl,
} from "../lib/config";

const structuredData = () => ({
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "@id": `${getSiteUrl()}/#organization`,
  name: config.name,
  url: getSiteUrl(),
  logo: `${getSiteUrl()}/logo.png`,
  image: `${getSiteUrl()}/logo.png`,
  description: config.seo.description,
  telephone: `+${config.phone.whatsapp}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: config.location.street,
    addressLocality: config.location.city,
    addressRegion: config.location.state,
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "Place", name: "Ponta Negra, Natal" },
    { "@type": "Place", name: "Capim Macio, Natal" },
    { "@type": "Place", name: "Cidade Verde, Natal" },
    { "@type": "Place", name: "Pium, Natal" },
  ],
  sameAs: config.social.instagram?.url ? [config.social.instagram.url] : [],
  hasMap: getGoogleMapsUrl(),
});

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData()) }}
    />
  );
}
