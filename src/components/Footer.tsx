"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Local SVG components to guarantee robust resolution under Next.js 16/Turbopack
function FacebookIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
    </svg>
  );
}

function LinkedinIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function YoutubeIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const marqueeText =
  "PROFESSIONAL HOME CLEANING · DEEP CLEANING · BOND CLEANING · AIRBNB TURNOVERS · COMMERCIAL CLEANING · 100% SPOTLESS GUARANTEE · POLICE CHECKED & INSURED";

const capabilitiesLinks = [
  { label: "HOME CLEANING", href: "/services/home" },
  { label: "DEEP CLEANING", href: "/services/deep" },
  { label: "BOND CLEANING (VACATE)", href: "/end-of-lease-cleaning-services" },
  { label: "AIRBNB CLEANING", href: "/services/airbnb" },
  { label: "COMMERCIAL CLEANING", href: "/services/commercial" },
] as const;

function MarqueeStrip() {
  return (
    <div className="flex shrink-0 items-center gap-16 pr-16 whitespace-nowrap">
      {Array.from({ length: 4 }).map((_, repeatIndex) => (
        <span
          key={`repeat-${repeatIndex}`}
          className="whitespace-nowrap font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-[#e3f2fd]"
        >
          {marqueeText.split(" · ").map((text, idx, arr) => (
            <span key={idx}>
              {text}
              {idx < arr.length - 1 && (
                <span className="text-[#2196f3] mx-4 inline-block font-bold">·</span>
              )}
            </span>
          ))}
          {/* Add trailing dot to separate repeats */}
          <span className="text-[#2196f3] mx-4 inline-block font-bold">·</span>
        </span>
      ))}
    </div>
  );
}

interface FooterProps {
  hideServices?: boolean;
}

export default function Footer({ hideServices }: FooterProps = {}) {
  const pathname = usePathname();
  const isBondPage =
    pathname === "/end-of-lease-cleaning-services" ||
    pathname === "/services/bond" ||
    pathname?.startsWith("/end-of-lease") ||
    pathname === "/landing/bond-cleaning";

  const shouldHideServices = hideServices || isBondPage;

  const handleLogoClick = (e: React.MouseEvent) => {
    if (isBondPage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full">
      {/* 1. Sustainability / Capability Marquee Strip */}
      <section className="w-full overflow-hidden bg-[#08295b] py-3.5 text-white border-y border-white/10">
        <h2 className="sr-only">Capabilities marquee</h2>
        <div className="flex w-max items-center animate-marquee motion-reduce:animate-none [will-change:transform]">
          <MarqueeStrip />
          <MarqueeStrip />
        </div>
      </section>

      {/* 2. Main Footer Section */}
      <div className="relative overflow-hidden bg-[#f8fbfe] text-[#08295b] pt-10 sm:pt-12 pb-8 border-t border-[#d0e4f7]">
        {/* Background Soft Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-t from-[#0d47a1]/10 via-transparent to-transparent blur-[160px] pointer-events-none z-0" />

        <div className="w-full px-4 sm:px-6 md:px-12 2xl:px-24 mx-auto relative z-10 max-w-full overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 mb-8 relative z-10">
            
            {/* Column 1: Brand Logo & Short Desc */}
            <div className={shouldHideServices ? "col-span-1 sm:col-span-2 md:col-span-4" : "col-span-1 sm:col-span-2 md:col-span-3"}>
              <Link href="/" onClick={handleLogoClick} className="inline-block mb-3 hover:opacity-90 transition-opacity cursor-pointer">
                <div className="h-12 sm:h-14 md:h-16 flex items-center justify-start">
                  <img
                    src="/logo.png"
                    alt="Cleaning Superboss"
                    className="h-full w-auto max-h-[50px] sm:max-h-[58px] md:max-h-[66px] object-contain drop-shadow-sm"
                  />
                </div>
              </Link>
              <p className="text-xs text-[#08295b]/70 leading-relaxed pr-4 font-light mt-1">
                Cleaning Superboss Ltd — registered in Australia, California &amp; London. Providing hotel-grade residential, bond, and commercial cleaning with upfront pricing and police-checked cleaners nationwide.
              </p>
              <div className="mt-3 pt-3 border-t border-[#d0e4f7]/80 space-y-1 text-[11px] text-[#08295b]/80 font-medium">
                <div><strong>ABN:</strong> 48 642 918 203</div>
                <div><strong>Insurance:</strong> $10M Public Liability Cover</div>
                <div><strong>Coverage:</strong> Australia, California &amp; London</div>
              </div>
            </div>

            {/* Column 2: Capabilities Links (Hidden on Bond Page) */}
            {!shouldHideServices && (
              <div className="col-span-1 md:col-span-3">
                <h4 className="font-bold text-xs uppercase mb-4 tracking-wider text-[#08295b]">
                  OUR SERVICES
                </h4>
                <ul className="space-y-2.5 text-[11px] text-[#08295b]/70 tracking-wider">
                  {capabilitiesLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="hover:text-[#0d47a1] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Column 3: Get Support */}
            <div className={shouldHideServices ? "col-span-1 sm:col-span-2 md:col-span-4" : "col-span-1 md:col-span-3"}>
              <h4 className="font-bold text-xs uppercase mb-4 tracking-wider text-[#08295b]">
                CONTACT US
              </h4>

              <div className="space-y-3.5 text-xs">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-wider text-[#08295b]/50">
                    PERTH OFFICE / HEADQUARTERS
                  </p>
                  <p className="text-xs font-semibold text-[#08295b] mt-0.5 leading-snug">
                    Unit 3, 25 Morrison Street, Como WA 6152
                  </p>
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-wider text-[#08295b]/50">
                    CUSTOMER SUPPORT EMAIL
                  </p>
                  <p className="text-xs font-semibold text-[#08295b] hover:text-[#0d47a1] transition-colors mt-0.5">
                    <a href="mailto:hello@cleaningsuperboss.com" className="break-all sm:break-normal">
                      hello@cleaningsuperboss.com
                    </a>
                  </p>
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-wider text-[#08295b]/50">
                    SERVICE COVERAGE
                  </p>
                  <p className="text-xs font-semibold text-[#08295b] mt-0.5">
                    Greater Perth &amp; Western Australia
                  </p>
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-wider text-[#08295b]/50">
                    HOURS OF OPERATION
                  </p>
                  <p className="text-xs font-semibold text-[#08295b] mt-0.5">
                    Mon–Sun: 7:00 AM – 8:00 PM AEST
                  </p>
                </div>
              </div>
            </div>

            {/* Column 4: Newsletter & Social */}
            <div className={shouldHideServices ? "col-span-1 sm:col-span-2 md:col-span-4" : "col-span-1 sm:col-span-2 md:col-span-3"}>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#08295b] font-semibold leading-relaxed mb-3">
                SUBSCRIBE FOR EXCLUSIVE OFFERS & PLATFORM UPDATES
              </p>

              <form
                className="flex flex-col space-y-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="relative flex items-center border-b border-[#d0e4f7] pb-2 focus-within:border-[#2196f3] transition-colors">
                  <input
                    type="email"
                    required
                    placeholder="ENTER YOUR EMAIL"
                    className="w-full bg-transparent text-xs text-[#08295b] placeholder:text-[#08295b]/40 uppercase tracking-wider outline-none pr-12 py-1"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 text-xs font-bold uppercase tracking-wider text-[#08295b] hover:text-[#0d47a1] transition-colors cursor-pointer"
                  >
                    JOIN
                  </button>
                </div>
                <p className="text-[9px] uppercase tracking-wider text-[#08295b]/50 pt-1">
                  BY SUBSCRIBING, YOU AGREE TO OUR TERMS & PRIVACY POLICY.
                </p>
              </form>

              <div className="mt-5">
                <p className="text-[9px] font-bold uppercase tracking-wider text-[#08295b]/50 mb-2">
                  FOLLOW CLEANING SUPERBOSS
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex size-8 items-center justify-center rounded-full border border-[#d0e4f7] text-[#08295b] hover:border-[#0d47a1] hover:text-[#0d47a1] transition-all"
                  >
                    <FacebookIcon className="size-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex size-8 items-center justify-center rounded-full border border-[#d0e4f7] text-[#08295b] hover:border-[#0d47a1] hover:text-[#0d47a1] transition-all"
                  >
                    <LinkedinIcon className="size-4" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="flex size-8 items-center justify-center rounded-full border border-[#d0e4f7] text-[#08295b] hover:border-[#0d47a1] hover:text-[#0d47a1] transition-all"
                  >
                    <YoutubeIcon className="size-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom copyright row */}
          <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-[#d0e4f7] flex flex-col sm:flex-row justify-between items-center gap-2 relative z-10 w-full">
            <p className="text-[8px] sm:text-[9px] text-[#08295b]/60 uppercase tracking-widest font-medium">
              &copy; {new Date().getFullYear()} CLEANING SUPERBOSS LTD · ABN 48 642 918 203. ALL RIGHTS RESERVED.
            </p>
            <div className="text-[8px] sm:text-[9px] uppercase tracking-widest text-[#08295b]/60 font-bold">
              REGISTERED IN AUSTRALIA, CALIFORNIA & LONDON
            </div>
          </div>

        </div>

        {/* Faded Background Text Watermark */}
        <div className="absolute bottom-1 left-0 right-0 text-center pointer-events-none z-0 select-none overflow-hidden leading-none">
          <span className="block text-[6vw] md:text-[5vw] lg:text-5xl xl:text-6xl font-bold uppercase tracking-[0.45em] text-transparent bg-clip-text bg-gradient-to-b from-[#08295b]/6 to-transparent translate-x-[3.5vw]">
            CLEANING SUPERBOSS
          </span>
        </div>
      </div>
    </footer>
  );
}
