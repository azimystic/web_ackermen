import type { Locale } from "./i18n/config";
import type { Quote } from "./i18n/dictionaries/en";
import { showPlaceholders } from "./placeholders";

/**
 * Client testimonials.
 *
 * ⚠️ TODO(user): THESE ARE DEMO QUOTES - written to show the design, not
 * collected from real clients. Replace every entry with a real, permissioned
 * quote before this site goes live. Publishing invented client testimonials
 * misleads the prospects you are trying to win, and the named people and
 * companies below do not exist.
 *
 * To replace one: swap name/role/company for the real ones, paste the real
 * quote split across before/highlight/after, and record who gave permission
 * and when in `permission`.
 */
export type Testimonial = {
  id: string;
  name: string;
  role: string;
  sector: string;
  /** e.g. "written OK from <name>, 2026-08-20" - fill for every real quote. */
  permission?: string;
  quote: Record<Locale, Quote>;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "demo-clinic",
    name: "Sana Iqbal",
    role: "Practice Manager, Meridian Dental",
    sector: "Clinics",
    quote: {
      en: {
        before: "We were losing bookings to voicemail every evening. Now enquiries get answered in seconds and ",
        highlight: "our no-show rate dropped by about a third",
        after: ". The team stopped dreading Monday mornings.",
      },
      ur: {
        before: "ہر شام کالز مِس ہونے سے بکنگ ضائع ہو رہی تھی۔ اب استفسارات سیکنڈوں میں جواب پاتے ہیں اور ",
        highlight: "غیر حاضری کی شرح تقریباً ایک تہائی کم ہو گئی",
        after: "۔ ٹیم کو اب پیر کی صبح سے خوف نہیں آتا۔",
      },
      ar: {
        before: "كنا نخسر الحجوزات بسبب المكالمات الفائتة كل مساء. الآن تُجاب الاستفسارات في ثوانٍ و",
        highlight: "انخفض معدل عدم الحضور بنحو الثلث",
        after: ". لم يعد الفريق يخشى صباح الإثنين.",
      },
    },
  },
  {
    id: "demo-retail",
    name: "Omar Farouk",
    role: "Operations Director, Zenith Retail Group",
    sector: "Retail",
    quote: {
      en: {
        before: "Six branches, six different spreadsheets, and no idea which one was right. Ackerman replaced all of it with ",
        highlight: "one dashboard I check before my coffee",
        after: ". I can finally compare branches on the same numbers.",
      },
      ur: {
        before: "چھ برانچیں، چھ الگ اسپریڈ شیٹس، اور کوئی نہیں جانتا تھا کہ درست کون سی ہے۔ Ackerman نے سب کی جگہ ",
        highlight: "ایک ڈیش بورڈ دیا جو میں چائے سے پہلے دیکھتا ہوں",
        after: "۔ اب سب برانچیں ایک ہی پیمانے پر ماپی جاتی ہیں۔",
      },
      ar: {
        before: "ستة فروع، وستة جداول مختلفة، ولا أحد يعرف أيها الصحيح. استبدلها Ackerman جميعًا بـ",
        highlight: "لوحة واحدة أفتحها قبل قهوتي",
        after: ". أخيرًا أستطيع مقارنة الفروع بالمقياس نفسه.",
      },
    },
  },
  {
    id: "demo-property",
    name: "Hassan Raza",
    role: "Founder, Cornerstone Property",
    sector: "Real estate",
    quote: {
      en: {
        before: "Enquiries used to arrive at midnight and sit until someone opened the inbox. Now every one gets a reply immediately, and ",
        highlight: "viewings book themselves into our calendar",
        after: ". We stopped losing listings to whoever answered first.",
      },
      ur: {
        before: "استفسارات آدھی رات کو آتے اور صبح تک پڑے رہتے تھے۔ اب ہر ایک کو فوراً جواب ملتا ہے، اور ",
        highlight: "ملاقاتیں خود بخود کیلنڈر میں درج ہو جاتی ہیں",
        after: "۔ اب پہلے جواب دینے والے کے ہاتھوں پراپرٹی نہیں جاتی۔",
      },
      ar: {
        before: "كانت الاستفسارات تصل منتصف الليل وتبقى حتى يفتح أحدهم البريد. الآن يحصل كل استفسار على رد فوري، و",
        highlight: "تُحجز المعاينات تلقائيًا في تقويمنا",
        after: ". لم نعد نخسر العقارات لمن يرد أولًا.",
      },
    },
  },
  {
    id: "demo-school",
    name: "Amina Rashid",
    role: "Principal, Al Noor Grammar School",
    sector: "Education",
    quote: {
      en: {
        before: "We replaced five systems with Kampus in a single term. Fee collection is up, and ",
        highlight: "report cards that took two weeks now take an afternoon",
        after: ". The office finally leaves on time.",
      },
      ur: {
        before: "ہم نے ایک ہی سہ ماہی میں پانچ نظاموں کی جگہ Kampus لے لیا۔ فیس وصولی بہتر ہوئی، اور ",
        highlight: "جو رپورٹ کارڈ دو ہفتے لیتے تھے اب ایک دوپہر میں تیار",
        after: "۔ دفتر بالآخر وقت پر بند ہوتا ہے۔",
      },
      ar: {
        before: "استبدلنا خمسة أنظمة بـ Kampus في فصل دراسي واحد. ارتفع تحصيل الرسوم، و",
        highlight: "بطاقات الدرجات التي كانت تستغرق أسبوعين صارت تستغرق بعد ظهر واحد",
        after: ". أخيرًا يغادر المكتب في موعده.",
      },
    },
  },
  {
    id: "demo-field",
    name: "Bilal Ahmed",
    role: "Managing Director, Northgate Facilities",
    sector: "Field services",
    quote: {
      en: {
        before: "Our engineers used to type up reports in the evening. Now the job is captured on site, works with no signal, and ",
        highlight: "the report is in the client's inbox before they leave",
        after: ". That alone paid for the whole project.",
      },
      ur: {
        before: "ہمارے انجینئر شام کو رپورٹیں ٹائپ کرتے تھے۔ اب کام موقع پر ہی درج ہوتا ہے، سگنل کے بغیر بھی چلتا ہے، اور ",
        highlight: "رپورٹ کلائنٹ کے پاس روانگی سے پہلے پہنچ جاتی ہے",
        after: "۔ صرف اسی سے پورے پروجیکٹ کی لاگت نکل آئی۔",
      },
      ar: {
        before: "كان مهندسونا يكتبون التقارير مساءً. الآن يُسجَّل العمل في الموقع، ويعمل دون إنترنت، و",
        highlight: "يصل التقرير إلى العميل قبل أن نغادر",
        after: ". هذا وحده غطى تكلفة المشروع كاملًا.",
      },
    },
  },
  {
    id: "demo-accounting",
    name: "Grace Adeyemi",
    role: "Partner, Kingsfield Accountancy",
    sector: "Professional services",
    quote: {
      en: {
        before: "Invoices used to be typed in by hand, twice. Now they are read and filed automatically and ",
        highlight: "we have not missed a filing deadline since",
        after: ". It gave two people their week back.",
      },
      ur: {
        before: "انوائسز دو بار ہاتھ سے درج ہوتے تھے۔ اب وہ خودکار طریقے سے پڑھے اور فائل ہوتے ہیں اور ",
        highlight: "اس کے بعد سے کوئی ڈیڈ لائن نہیں چھوٹی",
        after: "۔ دو افراد کا پورا ہفتہ بچ گیا۔",
      },
      ar: {
        before: "كانت الفواتير تُدخل يدويًا مرتين. الآن تُقرأ وتُحفظ تلقائيًا و",
        highlight: "لم نفوّت أي موعد تقديم منذ ذلك الحين",
        after: ". أعاد ذلك أسبوعًا كاملًا لشخصين.",
      },
    },
  },
];

/**
 * Quotes safe to show. A testimonial counts as real once `permission` records
 * who approved it and when; until then it is demo copy and is hidden in
 * production. See [[placeholders]].
 */
export function visibleTestimonials(): Testimonial[] {
  if (showPlaceholders()) return TESTIMONIALS;
  return TESTIMONIALS.filter((t) => !!t.permission);
}

/** True once at least one testimonial carries a recorded permission, ie. is real. */
export function hasRealTestimonials(): boolean {
  return TESTIMONIALS.some((t) => !!t.permission);
}
