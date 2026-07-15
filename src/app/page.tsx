import { LandingPage } from "@/components/LandingPage";
import { WHATSAPP_NUMBER } from "@/lib/site";
import { INSTAGRAM_URL, SERVICE_AREAS, SITE_NAME, SITE_URL } from "@/lib/seo";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo-drf.png`,
  telephone: `+${WHATSAPP_NUMBER}`,
  description:
    "Música ao vivo personalizada para casamentos, cerimônias e recepções em Itaúna/MG e região.",
  sameAs: [INSTAGRAM_URL],
  areaServed: SERVICE_AREAS.map((city) => ({
    "@type": "City",
    name: city,
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <LandingPage />
    </>
  );
}
