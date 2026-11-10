import Image from "next/image";
import { companies } from "@/data/site";

type Company = (typeof companies)[number];

function CompanyMark({ company }: { company: Company }) {
  return (
    <span className="flex items-center gap-3">
      {company.logo && (
        <Image
          src={company.logo}
          alt={company.hideName ? company.name : ""}
          width={160}
          height={64}
          unoptimized={company.logo.endsWith(".svg")}
          // Greyscale so every logo sits in the same tone; multiply hides white logo backgrounds.
          className="h-8 w-auto rounded-md object-contain mix-blend-multiply grayscale"
        />
      )}
      {!company.hideName && (
        <span className="whitespace-nowrap font-display text-xl">{company.name}</span>
      )}
    </span>
  );
}

function Group({ hidden = false }: { hidden?: boolean }) {
  // Repeat the list so one group is always wider than the screen.
  const repeats = Math.max(2, Math.ceil(8 / companies.length));
  const items = Array.from({ length: repeats }, () => companies).flat();
  return (
    <ul aria-hidden={hidden || undefined} className="marquee-group flex shrink-0 items-center">
      {items.map((company, i) => (
        <li
          key={`${company.name}-${i}`}
          // Only the first run of names is read out by screen readers.
          aria-hidden={!hidden && i >= companies.length ? true : undefined}
          className="pr-14 md:pr-20"
        >
          <CompanyMark company={company} />
        </li>
      ))}
    </ul>
  );
}

/** Quiet, slowly scrolling "Companies I have worked with" row under the hero. */
export default function Companies() {
  if (companies.length === 0) return null;

  return (
    <section aria-labelledby="companies-heading" className="site-container">
      <div className="flex flex-col gap-5 border-y border-line py-7 md:flex-row md:items-center md:gap-10">
        <h2
          id="companies-heading"
          className="shrink-0 text-[0.95rem] font-medium leading-snug text-soft md:max-w-[9rem]"
        >
          Companies I have worked with
        </h2>
        <div className="marquee min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
          {/* The paper background lets white logo backgrounds blend away. */}
          <div className="marquee-track flex w-max bg-paper py-1">
            <Group />
            <Group hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
