import Link from "next/link";
import { PiArrowUp } from "react-icons/pi";
import { nav, owner, socials } from "@/data/site";
import { socialIcons } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="border-t-[1.5px] border-ink bg-paper">
      <div className="site-container flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between md:pr-24">
        <div>
          <p className="font-display text-2xl">{owner.name}</p>
          <p className="mt-1 text-soft">{owner.title}</p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 font-medium">
          {nav.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="hover:text-brand-text">
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <a href={owner.resume} download target="_blank" className="hover:text-brand-text">
              Resume
            </a>
          </li>
        </ul>

        <ul className="flex items-center gap-2">
          {socials
            .filter((s) => s.url)
            .map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    title={s.name}
                    className="flex size-10 items-center justify-center rounded-full border-[1.5px] border-ink bg-paper transition-colors hover:bg-tint"
                  >
                    {Icon && <Icon className="size-4" aria-hidden="true" />}
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="site-container flex items-center justify-between gap-4 border-t border-line py-5 text-sm text-soft md:pr-24">
        <p>
          © {new Date().getFullYear()} {owner.name}. All rights reserved.
        </p>
        <a href="#top" className="flex items-center gap-1.5 font-medium text-ink hover:text-brand-text">
          Back to top
          <PiArrowUp className="size-4" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
