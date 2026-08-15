# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js

## Users

Prospective clients evaluating Ackerman as a software agency to build a website or web app for them — business owners and teams shopping for a dev partner, not end users of a product Ackerman itself operates.

## Product Purpose

Marketing/business site for Ackerman, a software house / development agency. Its job is to represent the agency's capability and win client engagements for website and web app builds.

## Positioning

Specialty differentiator: multi-language applications with full RTL support (English, Urdu, Arabic) — architecture-level i18n, not bolted-on translation. Proof: Kampus (kampuscloud.app), Ackerman's own production SaaS, ships trilingual; the agency site itself runs trilingual as a live demo.

## Operating Context

Prospects evaluate via the marketing site, then contact by email/form. Flagship case study: Kampus — AI-powered school management SaaS (8 modules, 4 portals, 3 languages, web + mobile). Sibling codebase at ~/RiderProjects/WEB_KAMPUS supplies design DNA and the hand-rolled i18n mechanism.

## Capabilities and Constraints

- Built with Next.js 16 (App Router), plain-CSS design system in globals.css, hand-rolled i18n (`en` bare path, `/ur`, `/ar` prefixed; proxy.ts geo/cookie routing).
- Services: ERP, CRM, CMS, POS systems; AI solutions (chatbots, n8n workflow automation, data analysis); custom web & mobile apps; multilingual/RTL products.
- Content gating: testimonials/stats/case-study slots carry `placeholder: true` flags — placeholders render in dev only with visible tags; production hides them until real, permissioned content lands. /testimonials is noindex + out of nav until a real quote exists.

## Brand Commitments

Name: Ackerman (software agency / software house). Logo, voice, and visual identity not yet provided — user will supply later.

## Evidence on Hand

None yet. No portfolio pieces, case studies, testimonials, or existing copy provided. Do not fabricate client work, testimonials, or proof points.

## Product Principles

- Represent Ackerman as a credible, capable software agency to prospective clients.
- Do not invent brand identity, portfolio work, or claims ahead of the user providing them.
- Build on Next.js as the confirmed stack.

## Accessibility & Inclusion

[No product-specific requirement established yet.]
