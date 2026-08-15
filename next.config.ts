import type { NextConfig } from "next";

/**
 * Security response headers.
 *
 * These are not a ranking factor in themselves, but a site that ships none of
 * them fails most third-party trust and audit checks a B2B buyer might run,
 * and HSTS is a prerequisite for preload. Kept deliberately conservative: no
 * CSP here, because this site loads Google Fonts and a wrong CSP breaks the
 * page silently. Add one deliberately, tested, rather than by reflex.
 */
const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Only meaningful once served over HTTPS on the real domain. Harmless on
  // http://localhost, where browsers ignore it.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/(.*)", headers: SECURITY_HEADERS }];
  },
};

export default nextConfig;
