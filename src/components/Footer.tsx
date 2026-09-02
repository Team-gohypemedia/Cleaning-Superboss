"use client";

import Link from "next/link";

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
  "SMART CLEANING TECHNOLOGY · INSTANT AUTOMATED QUOTES · 100% SPOTLESS GUARANTEE · 5-STAR RATED CLEANERS · SERVING LOCALLY & EXPANDING GLOBALLY";

const capabilitiesLinks = [
  { label: "RESIDENTIAL CLEANING", href: "#services" },
  { label: "DEEP CLEANING", href: "#services" },
  { label: "OFFICE & COMMERCIAL", href: "#services" },
  { label: "AIRBNB TURNOVERS", href: "#services" },
  { label: "WINDOW CLEANING", href: "#services" },
  { label: "CARPET & UPHOLSTERY", href: "#services" },
] as const;

function MarqueeStrip() {
  return (
    <div className="flex shrink-0 items-center gap-16 pr-16 whitespace-nowrap">
      {Array.from({ length: 4 }).map((_, repeatIndex) => (
        <span
          key={`repeat-${repeatIndex}`}
          className="whitespace-nowrap font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-[#FAF6F0]"
        >
          {marqueeText.split(" · ").map((text, idx, arr) => (
            <span key={idx}>
              {text}
              {idx < arr.length - 1 && (
                <span className="text-[#5680e9] mx-4 inline-block font-bold">·</span>
              )}
            </span>
          ))}
          {/* Add trailing dot to separate repeats */}
          <span className="text-[#5680e9] mx-4 inline-block font-bold">·</span>
        </span>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full">
      {/* 1. Sustainability / Capability Marquee Strip */}
      <section className="w-full overflow-hidden bg-[#1C1B1F] py-3.5 text-white border-y border-[#E5E1D3]/10">
        <h2 className="sr-only">Capabilities marquee</h2>
        <div className="flex w-max items-center animate-marquee motion-reduce:animate-none [will-change:transform]">
          <MarqueeStrip />
          <MarqueeStrip />
        </div>
      </section>

      {/* 2. Main Footer Section */}
      <div className="relative overflow-hidden bg-[#FAF6F0] text-[#1C1B1F] pt-10 sm:pt-12 pb-8 border-t border-[#E5E1D3]">
        {/* Background Soft Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-t from-[#5680e9]/8 via-transparent to-transparent blur-[160px] pointer-events-none z-0" />

        <div className="w-full px-6 md:px-12 2xl:px-24 mx-auto relative z-10">
          <div className="grid grid-cols-2 gap-8 mb-8 relative z-10 md:grid-cols-12">
            
            {/* Column 1: Brand Logo & Short Desc */}
            <div className="col-span-2 md:col-span-3">
              <Link href="/" className="inline-block mb-1.5 hover:opacity-90 transition-opacity overflow-visible">
                <div className="h-9 sm:h-10 w-[180px] sm:w-[210px] flex items-center justify-start overflow-visible">
                  <img
                    src="/logo.png"
                    alt="Cleaning Superboss"
                    className="h-full w-auto max-w-none object-contain scale-[1.55] sm:scale-[1.7] origin-left drop-shadow-sm"
                  />
                </div>
              </Link>
              <p className="text-xs text-[#1C1B1F]/70 leading-relaxed pr-4 font-light mt-1">
                Cleaning Superboss is the premier technology-driven cleaning company and platform. Elevating residential living, corporate offices, and hospitality turnovers through smart technology and trusted professionals.
              </p>
            </div>

            {/* Column 2: Capabilities Links */}
            <div className="col-span-1 md:col-span-3">
              <h4 className="font-bold text-xs uppercase mb-4 tracking-wider text-[#1C1B1F]">
                SERVICES
              </h4>
              <ul className="space-y-2.5 text-[11px] text-[#1C1B1F]/70 tracking-wider">
                {capabilitiesLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-[#5680e9] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Get Support */}
            <div className="col-span-1 md:col-span-3">
              <h4 className="font-bold text-xs uppercase mb-4 tracking-wider text-[#1C1B1F]">
                GET IN TOUCH
              </h4>

              <div className="space-y-3.5 text-xs">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-wider text-[#1C1B1F]/50">
                    CUSTOMER CARE EMAIL
                  </p>
                  <p className="text-xs font-semibold text-[#1C1B1F] hover:text-[#5680e9] transition-colors mt-0.5">
                    <a href="mailto:hello@cleaningsuperboss.com">
                      hello@cleaningsuperboss.com
                    </a>
                  </p>
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-wider text-[#1C1B1F]/50">
                    BOOKING ASSISTANCE
                  </p>
                  <p className="text-xs font-semibold text-[#1C1B1F] hover:text-[#5680e9] transition-colors mt-0.5">
                    <a href="tel:+18005552677">+1 (800) 555-BOSS</a>
                  </p>
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-wider text-[#1C1B1F]/50">
                    COVERAGE
                  </p>
                  <p className="text-xs font-semibold text-[#1C1B1F] mt-0.5">
                    Serving Locally · Expanding Globally
                  </p>
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-wider text-[#1C1B1F]/50">
                    SUPPORT HOURS
                  </p>
                  <p className="text-xs font-semibold text-[#1C1B1F] mt-0.5">
                    24/7 Digital Support & Live Dispatch
                  </p>
                </div>
              </div>
            </div>

            {/* Column 4: Newsletter & Social */}
            <div className="col-span-2 md:col-span-3">
              <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#1C1B1F] font-semibold leading-relaxed mb-3">
                SUBSCRIBE FOR EXCLUSIVE OFFERS & PLATFORM UPDATES
              </p>

              <form
                className="flex flex-col space-y-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="relative flex items-center border-b border-[#E5E1D3] pb-2 focus-within:border-[#5680e9] transition-colors">
                  <input
                    type="email"
                    required
                    placeholder="ENTER YOUR EMAIL"
                    className="w-full bg-transparent text-xs text-[#1C1B1F] placeholder:text-[#1C1B1F]/40 uppercase tracking-wider outline-none pr-12 py-1"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 text-xs font-bold uppercase tracking-wider text-[#1C1B1F] hover:text-[#5680e9] transition-colors cursor-pointer"
                  >
                    JOIN
                  </button>
                </div>
                <p className="text-[9px] uppercase tracking-wider text-[#1C1B1F]/50 pt-1">
                  BY SUBSCRIBING, YOU AGREE TO OUR TERMS & PRIVACY POLICY.
                </p>
              </form>

              <div className="mt-5">
                <p className="text-[9px] font-bold uppercase tracking-wider text-[#1C1B1F]/50 mb-2">
                  FOLLOW CLEANING SUPERBOSS
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex size-8 items-center justify-center rounded-full border border-[#E5E1D3] text-[#1C1B1F] hover:border-[#5680e9] hover:text-[#5680e9] transition-all"
                  >
                    <FacebookIcon className="size-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex size-8 items-center justify-center rounded-full border border-[#E5E1D3] text-[#1C1B1F] hover:border-[#5680e9] hover:text-[#5680e9] transition-all"
                  >
                    <LinkedinIcon className="size-4" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="flex size-8 items-center justify-center rounded-full border border-[#E5E1D3] text-[#1C1B1F] hover:border-[#5680e9] hover:text-[#5680e9] transition-all"
                  >
                    <YoutubeIcon className="size-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom copyright row */}
          <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-[#E5E1D3] flex flex-row justify-between items-center relative z-10 w-full">
            <p className="text-[8px] sm:text-[9px] text-[#1C1B1F]/50 uppercase tracking-widest font-medium">
              &copy; {new Date().getFullYear()} CLEANING SUPERBOSS. ALL RIGHTS RESERVED.
            </p>
            <div className="text-[8px] sm:text-[9px] uppercase tracking-widest text-[#1C1B1F]/50 font-bold">
              THE FUTURE OF CLEANING HAS ARRIVED
            </div>
          </div>

        </div>

        {/* Faded Background Text Watermark */}
        <div className="absolute bottom-1 left-0 right-0 text-center pointer-events-none z-0 select-none overflow-hidden leading-none">
          <span className="block text-[6vw] md:text-[5vw] lg:text-5xl xl:text-6xl font-bold uppercase tracking-[0.45em] text-transparent bg-clip-text bg-gradient-to-b from-[#1C1B1F]/6 to-transparent translate-x-[3.5vw]">
            CLEANING SUPERBOSS
          </span>
        </div>
      </div>
    </footer>
  );
}
