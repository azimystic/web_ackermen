import { ImageResponse } from "next/og";
import { SITE } from "@/lib/seo";

export const runtime = "edge";
export const alt = "Ackerman, software house";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Kampus-agency mark, from the supplied brand asset, inlined so the
// edge-runtime image generator needs no request-time file fetch.
const LOGO_DATA_URI = "data:image/png;base64,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";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#f4f2ec",
          backgroundImage:
            "linear-gradient(to right, rgba(21,23,28,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(21,23,28,0.06) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          color: "#15171c",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img src={LOGO_DATA_URI} width={56} height={56} alt="" />
          <div style={{ fontSize: 40, fontWeight: 700 }}>Ackerman</div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-2px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            Software that speaks every language your business does.
          </div>
          <div
            style={{
              fontSize: 26,
              color: "rgba(21,23,28,0.66)",
              display: "flex",
            }}
          >
            ERP · CRM · CMS · POS · AI solutions · Multilingual apps · EN · اردو · العربية
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 22,
            color: "#1637b8",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#2b5bff",
              display: "flex",
            }}
          />
          {SITE.domain}
        </div>
      </div>
    ),
    size
  );
}
