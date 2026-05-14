"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { MouseEvent } from "react";

type PolicySection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type Props = {
  sections: PolicySection[];
};

function PolicySectionBlock({ section }: { section: PolicySection }) {
  return (
    <section id={section.id} className="scroll-mt-36 pt-2">
      <h2 className="text-3xl font-semibold tracking-tight text-[#1B1E28]">
        {section.title}
      </h2>
      {section.paragraphs?.map((paragraph, index) => (
        <p
          key={`${section.id}-paragraph-${index}`}
          className="mt-5 text-lg leading-8 text-[#5E6678]"
        >
          {paragraph}
        </p>
      ))}
      {section.bullets && (
        <ul className="mt-5 space-y-4 text-lg leading-8 text-[#5E6678]">
          {section.bullets.map((bullet, index) => (
            <li
              key={`${section.id}-bullet-${index}`}
              className="flex items-start gap-3"
            >
              <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2B3447]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default function PrivacyPolicyContent({ sections }: Props) {
  const [activeSectionId, setActiveSectionId] = useState(sections[0]?.id ?? "");
  const sectionIds = useMemo(
    () => sections.map((section) => section.id),
    [sections],
  );

  useEffect(() => {
    const updateActiveSection = () => {
      let current = sectionIds[0] ?? "";
      const threshold = 180;

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const top = section.getBoundingClientRect().top;
        if (top <= threshold) {
          current = id;
        } else {
          break;
        }
      }

      setActiveSectionId((prev) => (prev === current ? prev : current));
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sectionIds]);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (!section) return;

    const yOffset = -120;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveSectionId(id);
  };

  return (
    <section className="py-12 lg:py-16">
      <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 grid-rows-1 gap-5 max-w-7xl mx-auto px-4 lg:px-0">
        <div className="col-span-4 sm:col-span-6 lg:col-span-10 col-start-1 sm:col-start-2 lg:col-start-2">
          <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-start">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="inline-flex items-center rounded-full border border-[#2F3A50]/20 bg-yellow-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#2F3A50]">
                On This Page
              </p>
              <nav className="mt-5 flex flex-col gap-3 border-l border-[#C9CFDA] pl-4">
                {sections.map((section) => {
                  const isActive = section.id === activeSectionId;

                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={(event) => handleNavClick(event, section.id)}
                      className={`text-sm transition-colors ${
                        isActive
                          ? "font-semibold text-[#1B1E28]"
                          : "text-[#596176] hover:text-[#1B1E28]"
                      }`}
                      aria-current={isActive ? "location" : undefined}
                    >
                      {section.title}
                    </a>
                  );
                })}
              </nav>
            </aside>

            <div className="space-y-12">
              {sections.map((section) => (
                <PolicySectionBlock key={section.id} section={section} />
              ))}

              <section className="border-t border-[#D3D8E0] pt-12">
                <h2 className="text-3xl font-semibold tracking-tight text-[#1B1E28]">
                  Privacy Requests and Support
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5E6678]">
                  Requests will be verified and responded to within 30 days.
                  Where a request relates to Customer Data over which our direct
                  customer is the data controller, EvolTech will redirect the
                  requester to the appropriate client contact.
                </p>
                <p className="mt-5 text-lg leading-8 text-[#5E6678]">
                  California law also requires us to explain our handling of Do
                  Not Track signals. Because there currently is not an industry
                  or legal standard for recognizing or honoring DNT signals, we
                  do not respond to them at this time. Do Not Track is different
                  from legally recognized browser-based opt-out preference
                  signals.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="mailto:privacy@evoltechgroup.com"
                    className="inline-flex items-center rounded-full bg-yellow-500 px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-[#2D3343] hover:text-white"
                  >
                    Contact privacy@evoltechgroup.com
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full border border-[#1B1E28]/30 px-5 py-2.5 text-sm font-semibold text-[#1B1E28] transition-colors hover:bg-white"
                  >
                    Contact Us
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
