import { SITE } from "@/lib/seo";
import { getDict } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";

/**
 * SoftwareApplication markup for Kampus.
 *
 * Kampus is the one thing on this site that is unambiguously real and running,
 * so it is the one product entity worth declaring. Everything here is read
 * from the same dictionary the page renders, so the markup cannot drift from
 * the visible copy and stays translated for free.
 *
 * Deliberately no `offers` and no `aggregateRating`: there are no public
 * prices and no collected reviews for Kampus, and inventing either to chase a
 * star rich result is exactly the structured-data spam Google penalises.
 */
export default function KampusLd({ locale }: { locale: Locale }) {
  const c = getDict(locale).kampusCase;

  const ld = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    // Stable across all three locales so the translations resolve to one
    // entity rather than three competing products.
    "@id": `${SITE.url}#kampus`,
    name: "Kampus",
    url: "https://kampuscloud.app",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web, iOS, Android",
    description: c.sub,
    featureList: c.built.modules,
    inLanguage: ["en", "ur", "ar"],
    audience: {
      "@type": "Audience",
      audienceType: c.built.portals.join(", "),
    },
    creator: { "@id": `${SITE.url}#organization` },
    provider: { "@id": `${SITE.url}#organization` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}
