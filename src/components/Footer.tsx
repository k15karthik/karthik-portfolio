import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="hairline-top">
      <div className="container-page py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono-label text-[11px] uppercase text-ink-faint">
          {profile.name} — {profile.location}
        </p>
        <p className="font-mono-label text-[11px] uppercase text-ink-faint">
          Designed &amp; built with Next.js
        </p>
      </div>
    </footer>
  );
}
