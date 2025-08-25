import { CircleCheck, Gift, Megaphone } from "lucide-react";
import WhatsappIcon from "@/icons/whatsapp.svg";
export default function RegisterLeft() {
  return (
    <aside className="min-h-screen max-lg:hidden w-full flex items-center justify-center bg-[#ebf3ea] p-4 ">
      <div className="w-full rounded-2xl bg-white p-6 shadow-[0_8px_24px_rgba(16,24,40,.06)] ring-1 ring-[#f4f7f4] md:p-8">
        {/* Logo */}
        <div className="mb-6 text-2xl font-semibold text-[#97aa99]">Logo</div>

        {/* Headline */}
        <h1 className="mb-6 text-3xl font-extrabold leading-tight text-[#0f172a] md:text-4xl">
          Experience the future of
          <br />
          <span className="text-[#3f8e43]">WhatsApp Marketing</span>
        </h1>

        {/* Credits banner */}
        <div className="mb-6 rounded-xl bg-[#3f8e43] p-3 text-white shadow-sm">
          <div className="flex items-center gap-3 ">
            <div className="[&>svg]:w-[23px] [&>svg]:h-[23px] rounded-md p-3 bg-white/20">
              <Gift />
            </div>

            <div className="space-y-0.5">
              <p className="text-sm font-semibold tracking-wide">
                $500 FREE Ad Credits
              </p>
              <p className="text-xs/5 opacity-90">
                Run Click to WhatsApp Ads &amp; 5X your leads
              </p>
            </div>
          </div>
        </div>

        {/* Section label */}
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[.18em] text-[#97aa99]">
          Your Free Forever Plan Includes
        </p>

        {/* Feature list */}
        <ul className="mb-6 space-y-3">
          <li className="flex items-center gap-3 rounded-xl border border-[#f4f7f4] bg-white p-3 shadow-sm">
            <div className="[&>svg]:w-[23px] [&>svg]:h-[23px] rounded-md p-3  bg-[#ebf3ea] text-[#3f8e43]">
              <WhatsappIcon />
            </div>
            <div className="leading-tight">
              <p className="text-[15px] font-semibold text-[#0f172a]">
                FREE WhatsApp Business API
              </p>
              <p className="text-[12px] text-[#3f8e43]">
                Instant verification &amp; setup with Meta
              </p>
            </div>
          </li>

          <li className="flex items-center gap-3 rounded-xl border border-[#f4f7f4] bg-white p-3 shadow-sm">
            <div className="[&>svg]:w-[23px] [&>svg]:h-[23px] rounded-md p-3  bg-[#ebf3ea] text-[#3f8e43]">
              <Megaphone />
            </div>
            <div className="leading-tight">
              <p className="text-[15px] font-semibold text-[#0f172a]">
                Advanced AI Ads Manager
              </p>
              <p className="text-[12px] text-[#3f8e43]">
                AI‑powered Ad Campaign optimisation &amp; targeting
              </p>
            </div>
          </li>

          <li className="flex items-center gap-3 rounded-xl border border-[#f4f7f4] bg-white p-3 shadow-sm">
            <div className="[&>svg]:w-[23px] [&>svg]:h-[23px] rounded-md p-3  bg-[#ebf3ea] text-[#3f8e43]">
              <CircleCheck />
            </div>
            <div className="leading-tight">
              <p className="text-[15px] font-semibold text-[#0f172a]">
                FREE Blue Tick Application
              </p>
              <p className="text-[12px] text-[#3f8e43]">
                Apply for BLUE TICK &amp; get a verified WhatsApp Business
                Account
              </p>
            </div>
          </li>
        </ul>

        {/* Trusted logos */}
        <div className="mt-2">
          <p className="mb-3 text-center text-[11px] font-medium tracking-wide text-[#97aa99]">
            Trusted by 70000+ Brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[#97aa99]">
            <span className="font-semibold opacity-90">PhotosWalah</span>
            <span className="font-semibold opacity-90">rentomojo</span>
            <span className="font-semibold opacity-90">Skullcandy</span>
            <span className="font-semibold opacity-90">vivo</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
