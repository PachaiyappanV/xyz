import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function LoginLeft() {
  return (
    <aside className="max-lg:hidden flex min-h-screen w-full items-center justify-center bg-[#ebf3ea] p-6">
      <div className="w-full rounded-2xl bg-white p-6 shadow-[0_8px_24px_rgba(16,24,40,.06)] ring-1 ring-[#f4f7f4] md:p-8">
        <div className="mb-6 text-2xl font-semibold text-[#97aa99]">Logo</div>

        <p className="mb-4 text-center text-sm font-medium tracking-wide text-gray-700">
          Latest from Brand Dais
        </p>

        <div className="mb-6 overflow-hidden rounded-xl ">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/login_feat.jpg"
              alt="Brand highlight"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <h2 className="mb-2 text-xl font-bold leading-snug text-[#0f172a]">
          Netcore: Creating smarter customer journeys at scale
        </h2>

        <p className="mb-4 text-sm leading-relaxed text-[#6b7280]">
          Discover how Netcore and{" "}
          <span className="font-semibold align-middle text-[10px] text-gray-600">
            Brand Dais
          </span>{" "}
          are transforming fragmented customer data into smarter, AI-powered
          journeys at scale. Learn how our partnership helps retailers deliver
          secure, personalized, real-time engagement across channels.
        </p>

        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#2563eb] hover:underline"
        >
          Read more
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </aside>
  );
}
