import { breadcrumbLd, type Crumb } from "@/lib/seo";

/** BreadcrumbList structured data - crumb paths must already be locale-prefixed. */
export default function BreadcrumbLd({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd(crumbs)) }}
    />
  );
}
