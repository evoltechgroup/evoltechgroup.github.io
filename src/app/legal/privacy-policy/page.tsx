import type { Metadata } from "next";
import { absoluteUrl } from "@/app/seo.config";
import cookieBannerImage from "@/assets/images/privacy-policy/cookie-banner.jpg";
import PrivacyPolicyContent from "./policyContentClient";

const informationCollected = [
  "Name, email address, phone number",
  "Company name, designation, and business contact details",
  "IP address and device identifiers",
  "Browser type and operating system",
  "State or country from which you accessed the Services",
  "Log files, system activity, and performance metrics",
  "Usage patterns across applications and infrastructure",
];

const informationUses = [
  "Provide access to, operate, maintain, and administer our Services",
  "Communicate transactional information, respond to requests, and deliver customer support via email, mail, phone, or SMS",
  "Send updates, alerts, promotions, surveys, and other relevant information in line with legal requirements",
  "Conduct analysis and research to improve existing Services and develop new ones, including using AI technologies where permitted. We do not use Customer Data to train generalized AI models unless expressly agreed in writing.",
  "Personalize content and advertisements across our Services and third-party platforms",
  "Measure advertising effectiveness and deliver relevant ads",
  "Ensure the security of our Services and resolve technical issues",
  "Comply with laws and regulations, seek legal advice, and protect legal rights",
  "Safeguard the safety, rights, property, and security of users, employees, and the public",
  "Prevent fraud and enforce terms and policies",
  "Use information for any other purpose with your consent or as directed by you",
];

const sharingDisclosures = [
  "Our affiliates and subsidiaries under common ownership and/or control",
  "Cloud and infrastructure providers as well as technology vendors supporting development and operations",
  "Professional advisors including legal, financial, compliance, and marketing partners",
  "Regulatory authorities when required by law",
  "Parties involved in mergers, acquisitions, or restructuring",
  "We do not sell personal information",
];

const rights = [
  "Access your personal data",
  "Request correction or deletion",
  "Opt out of certain data uses",
  "Request data portability",
];

const cookieUses = [
  "Analytics and performance monitoring",
  "User experience enhancement",
];

export type PolicySection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: PolicySection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    paragraphs: [
      'EvolTech LLC ("EvolTech", "Company", "we", "us", or "our") is committed to protecting the privacy and security of personal data processed in connection with the delivery of our software development and technology operations services. This Data Privacy Policy ("Policy") sets forth the principles, obligations, and practices that govern how we collect, use, store, transfer, and dispose of personal data of our clients in the context of our commercial relationships.',
      "EvolTech acts as a data controller when it decides how and why your personal data is used, as described in this Policy.",
      "In some cases, EvolTech provides services to its customers and processes personal data on their behalf, including data relating to their end users (Customer Data). In these situations, the customer is responsible for deciding how and why the data is used as the data controller, and EvolTech acts only on their instructions as a data processor.",
      "When EvolTech processes Customer Data, it does so in accordance with the instructions provided by the customer and the terms of the agreement in place with them.",
      "If there is any difference between this Policy and the applicable agreement with a customer, the terms of that agreement will apply.",
      "Where required by law, EvolTech acts pursuant to a Data Processing Agreement (DPA). If you are a Customer End User and you have questions about how Customer Data is collected and processed through the services we provide to the customer, please contact the customer for more information. Please also see the Notice to Customer End Users section below for additional information that is relevant to you.",
    ],
  },
  {
    id: "scope",
    title: "2. Scope",
    paragraphs: [
      "This Privacy Policy applies to website visitors, clients and prospective clients, end users of applications and systems we build or manage, and business partners and vendors.",
      "This Policy does not apply to job applicants, employees, or independent contractors, whose personal data is subject to separate policies wherever applicable.",
    ],
  },
  {
    id: "information-we-collect",
    title: "3. Information We Collect",
    paragraphs: [
      "We collect information directly from you, automatically using cookies and similar technologies as described in Section 10, and from other sources as relevant to the Services.",
      "We collect information that you directly provide to us when you visit our websites, register to use the Services, fill in a form or download material, correspond with us by phone, email, chat, or otherwise for support, and subscribe to mailing lists, newsletters, or other marketing communications.",
    ],
    bullets: informationCollected,
  },
  {
    id: "how-we-use-information",
    title: "4. How We Use Information",
    bullets: informationUses,
  },
  {
    id: "sharing-and-disclosure",
    title: "5. Sharing and Disclosure",
    bullets: sharingDisclosures,
  },
  {
    id: "data-security-measures",
    title: "6. Data Security Measures",
    paragraphs: [
      "We implement a variety of technical and organizational measures to protect your information against accidental or unlawful access, destruction, loss, misuse, change, or damage.",
      "These measures may include access controls, encryption in transit, logging, monitoring, and incident response procedures. However, no internet or email transmission is ever fully secure or error-free. Please keep this in mind when disclosing any information to us.",
    ],
  },
  {
    id: "data-retention",
    title: "7. Data Retention",
    paragraphs: [
      "We retain personal information only as long as necessary for service delivery and contractual obligations, legal and regulatory compliance, and legitimate business purposes.",
      "Customer data retention is governed by contractual agreements. Retention periods vary based on data type, legal obligations, and contractual requirements. When no longer required, data is securely deleted or anonymized.",
    ],
  },
  {
    id: "international-data-transfers",
    title: "8. International Data Transfers",
    paragraphs: [
      "Given our global operations, including the United States and India, data may be transferred across jurisdictions.",
      "Your information will be protected subject to this Policy and applicable law, which may be different from the laws in your country. Where required, we rely on legally recognized transfer mechanisms such as Standard Contractual Clauses or equivalent safeguards.",
      "By using the Services, you acknowledge and agree to such transfers of your information to the United States and other locations where we or our vendors or partners operate.",
    ],
  },
  {
    id: "your-rights-and-choices",
    title: "9. Your Rights and Choices",
    paragraphs: [
      "Depending on applicable laws, including the CCPA and CPRA where relevant, you may have certain rights including the following:",
    ],
    bullets: rights,
  },
  {
    id: "cookies-and-tracking-technologies",
    title: "10. Cookies and Tracking Technologies",
    paragraphs: [
      "We may use cookies and similar technologies for the following purposes:",
    ],
    bullets: cookieUses,
  },
  {
    id: "links-to-third-party-sites-and-features",
    title: "11. Links to Third Party Sites and Features",
    paragraphs: [
      "Our Services may, from time to time, contain links to or integrate with third-party websites, features, and other services (Third-Party Services). Such Third-Party Services may be accessible via direct links or may operate through embedded or back-end integrations within the Services, including without requiring you to leave the interface or take any affirmative action.",
      "If you are a Customer End User, our customers and their designated administrators may enable or disable such Third-Party Services at their discretion.",
      "We do not control, endorse, or assume any responsibility for any Third-Party Services, including their content, security, or privacy practices. Any information processed, stored, or transmitted by such Third-Party Services is subject to their own terms and privacy policies.",
      "Accordingly, we disclaim all liability arising from or related to your use of, or interaction with, any Third-Party Services, including where such interaction occurs through integrated or automated means. To the extent reasonably practicable, you should review the applicable privacy policies of such Third-Party Services; however, you acknowledge that in certain cases, such policies may not be presented prior to data being shared or processed through such integrations.",
      "Third-Party Services may also share information with us regarding your interactions with them, subject to their respective policies.",
    ],
  },
  {
    id: "childrens-privacy",
    title: "12. Children's Privacy",
    paragraphs: [
      "Our Services are not directed to individuals under 16 years of age. We do not knowingly collect such data.",
      "If a parent or guardian becomes aware that their child has provided us with personal information without their consent, they should contact us using the information below. If we become aware that a child under 16 has provided us with such information, we will take steps to delete it from our files.",
    ],
  },
  {
    id: "changes-to-this-policy",
    title: "13. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy periodically. Updates will be reflected with a revised effective date.",
    ],
  },
  {
    id: "notice-to-customer-end-users",
    title: "14. Notice to Customer End Users",
    paragraphs: [
      "Where you are a Customer End User and the Services are made available to you through one of our entity customers, that customer is the administrator of the Services and is responsible for the accounts over which it has control.",
      "If you are a Customer End User, please direct your data privacy questions and any requests to exercise any rights you may have regarding your information to such customer, as your use of the Services is subject to that organization's policies.",
      "Our customers may make decisions about how you use the Services in accordance with their own policies and procedures, including by requiring you to use identity verification tools or location-based features, and choosing whether to integrate with third-party apps and integrations.",
      "In addition, the administrator of your account may be able to view and access information that you provide to the Services and information about your use of the Services. Our agreements with our customers may require or permit us to provide certain information we collect to such customers.",
      "Please contact your organization or refer to your administrator's organizational policies for more information.",
    ],
  },
  {
    id: "contact-us",
    title: "15. Contact Us",
    paragraphs: [
      "Please feel free to contact us if you have any questions about this Policy or our practices, or if you are seeking to exercise any of your statutory rights.",
      "You may contact us at privacy@evoltechgroup.com.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read EvolTech's privacy policy, including how we collect, use, share, and protect personal information.",
  alternates: {
    canonical: absoluteUrl("/legal/privacy-policy"),
  },
  openGraph: {
    title: "Privacy Policy | EvolTech",
    description:
      "Read EvolTech's privacy policy, including how we collect, use, share, and protect personal information.",
    url: absoluteUrl("/legal/privacy-policy"),
    siteName: "EvolTech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | EvolTech",
    description:
      "Read EvolTech's privacy policy, including how we collect, use, share, and protect personal information.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#EFEFF2] text-[#1B1E28]">
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(7, 15, 41, 0.5) 0%, rgba(7, 15, 41, 0.62) 100%), url(${cookieBannerImage.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 grid-rows-1 gap-5 max-w-7xl mx-auto px-4 lg:px-0">
          <div className="col-span-4 sm:col-span-6 lg:col-span-10 col-start-1 sm:col-start-2 lg:col-start-2 min-h-[500px] md:min-h-[620px] flex flex-col items-center justify-center text-center pt-32 pb-20">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/90 sm:text-lg">
              This page explains how EvolTech collects, uses, shares, stores,
              and protects personal information across our website, client
              relationships, and the services we deliver.
            </p>
            <p className="mt-8 text-sm font-medium uppercase tracking-[0.18em] text-white/80">
              Last Updated: April 29, 2026
            </p>
          </div>
        </div>
      </section>

      <PrivacyPolicyContent sections={sections} />
    </main>
  );
}
