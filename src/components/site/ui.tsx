import Image from "next/image";

export function Logo({ invert = false }: { invert?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" aria-hidden className="h-8 w-8 shrink-0">
        <rect width="32" height="32" rx="8" fill="#0047FF" />
        <path d="M8.5 22.5V9.5l7.5 8 7.5-8v13" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className={`text-[19px] font-bold tracking-[-0.04em] ${invert ? "text-white" : "text-ink"}`}>mmbtech</span>
    </span>
  );
}

/** Minimal browser chrome around a site screenshot. */
export function BrowserFrame({
  id,
  url,
  alt,
  thumb = false,
  priority = false,
  sizes,
  className = "",
}: {
  id: string;
  url: string;
  alt: string;
  thumb?: boolean;
  priority?: boolean;
  sizes: string;
  className?: string;
}) {
  const host = url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  return (
    <div className={`overflow-hidden rounded-[10px] bg-white shadow-frame ${className}`}>
      <div className="flex h-7 items-center gap-3 border-b border-line bg-[#FBFBFC] px-3">
        <span className="flex gap-1.5">
          <i className="h-2 w-2 rounded-full bg-[#E1E3E8]" />
          <i className="h-2 w-2 rounded-full bg-[#E1E3E8]" />
          <i className="h-2 w-2 rounded-full bg-[#E1E3E8]" />
        </span>
        <span className="mx-auto max-w-[70%] truncate rounded-md bg-paper px-2.5 py-0.5 text-[10.5px] font-medium text-faint">{host}</span>
        <span className="w-[42px]" />
      </div>
      <Image
        src={`/projects/${thumb ? "thumb/" : ""}${id}.webp`}
        alt={alt}
        width={thumb ? 720 : 1440}
        height={thumb ? 450 : 900}
        sizes={sizes}
        priority={priority}
        className="block h-auto w-full"
      />
    </div>
  );
}

export function PhoneFrame({ id, alt, className = "" }: { id: string; alt: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[22px] bg-ink p-[5px] shadow-frame ${className}`}>
      <div className="overflow-hidden rounded-[17px]">
        <Image src={`/projects/${id}-m.webp`} alt={alt} width={390} height={844} sizes="200px" className="block h-auto w-full" />
      </div>
    </div>
  );
}

export function Check({ className = "h-4 w-4 text-blue" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className={`shrink-0 ${className}`}>
      <path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Arrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className={`shrink-0 ${className}`}>
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className={`shrink-0 ${className}`}>
      <path d="M5 11l6-6M6 5h5v5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
