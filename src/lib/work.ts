import type { Locale } from "./i18n/config";

/**
 * Case studies.
 *
 * `kampus` is real - Ackerman's own product, live at kampuscloud.app.
 *
 * ⚠️ TODO(user): the other four are DEMO case studies written to show the
 * design. Replace them with real client work (or delete them) before launch -
 * the client names and result figures below are invented.
 */
export type CaseStudy = {
  slug: string;
  /** true only for work that genuinely exists and can be shown. */
  real: boolean;
  url?: string;
  /** Accent for the generated cover art. */
  tone: "blue" | "ink" | "slate";
  t: Record<
    Locale,
    {
      client: string;
      sector: string;
      title: string;
      line: string;
      metric: string;
      metricLabel: string;
    }
  >;
};

export const WORK: CaseStudy[] = [
  {
    slug: "kampus",
    real: true,
    url: "https://kampuscloud.app",
    tone: "blue",
    t: {
      en: {
        client: "Kampus",
        sector: "Education · Our own product",
        title: "Kampus",
        line: "One platform replacing five systems for multi-campus schools, in three languages.",
        metric: "8",
        metricLabel: "modules in one system",
      },
      ur: {
        client: "Kampus",
        sector: "تعلیم · ہمارا اپنا پروڈکٹ",
        title: "Kampus",
        line: "ملٹی کیمپس اسکولوں کے لیے پانچ نظاموں کی جگہ ایک پلیٹ فارم، تین زبانوں میں۔",
        metric: "8",
        metricLabel: "ماڈیولز ایک نظام میں",
      },
      ar: {
        client: "Kampus",
        sector: "التعليم · منتجنا الخاص",
        title: "Kampus",
        line: "منصة واحدة تحل محل خمسة أنظمة للمدارس متعددة الفروع، بثلاث لغات.",
        metric: "8",
        metricLabel: "وحدات في نظام واحد",
      },
    },
  },
  {
    slug: "meridian-clinics",
    real: false,
    tone: "ink",
    t: {
      en: {
        client: "Meridian Dental",
        sector: "Clinics · AI & automation",
        title: "Answering every call, day and night",
        line: "An assistant that books appointments around the clock, plus reminders at 48, 24 and 2 hours before.",
        metric: "−34%",
        metricLabel: "no-show rate",
      },
      ur: {
        client: "Meridian Dental",
        sector: "کلینکس · AI اور آٹومیشن",
        title: "ہر کال کا جواب، دن ہو یا رات",
        line: "ایک اسسٹنٹ جو چوبیس گھنٹے اپائنٹمنٹ بُک کرتا ہے، اور 48، 24 اور 2 گھنٹے پہلے یاد دہانی بھیجتا ہے۔",
        metric: "−34%",
        metricLabel: "غیر حاضری کی شرح",
      },
      ar: {
        client: "Meridian Dental",
        sector: "العيادات · الذكاء الاصطناعي والأتمتة",
        title: "الرد على كل مكالمة، ليلًا ونهارًا",
        line: "مساعد يحجز المواعيد على مدار الساعة، مع تذكيرات قبل 48 و24 وساعتين.",
        metric: "−34%",
        metricLabel: "معدل عدم الحضور",
      },
    },
  },
  {
    slug: "zenith-retail",
    real: false,
    tone: "slate",
    t: {
      en: {
        client: "Zenith Retail Group",
        sector: "Retail · Data & reporting",
        title: "Six branches, one set of numbers",
        line: "Every till, stockroom and staff rota feeding a single live dashboard instead of six spreadsheets.",
        metric: "6 → 1",
        metricLabel: "reporting systems",
      },
      ur: {
        client: "Zenith Retail Group",
        sector: "ریٹیل · ڈیٹا اور رپورٹنگ",
        title: "چھ برانچیں، ایک ہی حساب",
        line: "ہر کاؤنٹر، اسٹاک روم اور شفٹ اب چھ اسپریڈ شیٹس کی جگہ ایک لائیو ڈیش بورڈ میں۔",
        metric: "6 → 1",
        metricLabel: "رپورٹنگ سسٹمز",
      },
      ar: {
        client: "Zenith Retail Group",
        sector: "التجزئة · البيانات والتقارير",
        title: "ستة فروع، أرقام واحدة",
        line: "كل نقطة بيع ومخزن وجدول ورديات يغذي لوحة واحدة حية بدل ستة جداول.",
        metric: "6 → 1",
        metricLabel: "أنظمة تقارير",
      },
    },
  },
  {
    slug: "northgate-field",
    real: false,
    tone: "ink",
    t: {
      en: {
        client: "Northgate Facilities",
        sector: "Field services · Mobile",
        title: "Reports finished before the van leaves",
        line: "An offline-first inspection app that captures photos, signatures and time on site, then files the report itself.",
        metric: "2 hrs",
        metricLabel: "saved per engineer, daily",
      },
      ur: {
        client: "Northgate Facilities",
        sector: "فیلڈ سروسز · موبائل",
        title: "رپورٹ گاڑی نکلنے سے پہلے مکمل",
        line: "آف لائن چلنے والی انسپیکشن ایپ جو تصاویر، دستخط اور وقت درج کرتی ہے، پھر خود رپورٹ بھیج دیتی ہے۔",
        metric: "2 گھنٹے",
        metricLabel: "روزانہ فی انجینئر بچت",
      },
      ar: {
        client: "Northgate Facilities",
        sector: "الخدمات الميدانية · تطبيقات الجوال",
        title: "التقرير جاهز قبل مغادرة الموقع",
        line: "تطبيق فحص يعمل دون إنترنت، يلتقط الصور والتواقيع ووقت الزيارة ثم يرسل التقرير تلقائيًا.",
        metric: "ساعتان",
        metricLabel: "توفير يومي لكل مهندس",
      },
    },
  },
  {
    slug: "kingsfield-accounts",
    real: false,
    tone: "blue",
    t: {
      en: {
        client: "Kingsfield Accountancy",
        sector: "Professional services · Automation",
        title: "Invoices that file themselves",
        line: "Receipts and invoices read automatically into the ledger, with filing deadlines flagged 30 days out.",
        metric: "0",
        metricLabel: "missed deadlines since launch",
      },
      ur: {
        client: "Kingsfield Accountancy",
        sector: "پروفیشنل سروسز · آٹومیشن",
        title: "انوائسز جو خود فائل ہو جائیں",
        line: "رسیدیں اور انوائسز خودکار طور پر کھاتوں میں درج، اور ڈیڈ لائن سے 30 دن پہلے اطلاع۔",
        metric: "0",
        metricLabel: "لانچ کے بعد چھوٹی ڈیڈ لائنز",
      },
      ar: {
        client: "Kingsfield Accountancy",
        sector: "الخدمات المهنية · الأتمتة",
        title: "فواتير تحفظ نفسها",
        line: "الإيصالات والفواتير تُقرأ تلقائيًا إلى الدفاتر، مع تنبيه قبل 30 يومًا من كل موعد تقديم.",
        metric: "0",
        metricLabel: "مواعيد فائتة منذ الإطلاق",
      },
    },
  },
];

export function visibleWork(): CaseStudy[] {
  return WORK;
}
