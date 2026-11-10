import { PiEnvelopeSimple, PiWhatsappLogo } from "react-icons/pi";
import { contact, owner, socials } from "@/data/site";
import { socialIcons } from "@/components/icons";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="Contact" className="site-container scroll-mt-20 py-20 md:py-28">
      <Reveal>
        <div className="pop rounded-3xl bg-surface px-6 py-14 md:px-14 md:py-20">
          <h2 className="display text-[clamp(2.6rem,6.4vw,5.25rem)]">
            {contact.heading[0]} <span className="mark">{contact.heading[1]}</span>
          </h2>
          <p className="mt-5 max-w-[44ch] text-lg text-soft">{contact.subtext}</p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={owner.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand"
            >
              <PiWhatsappLogo className="size-5" aria-hidden="true" />
              Chat on WhatsApp
            </a>
            <a href={`mailto:${owner.email}`} className="btn-outline">
              <PiEnvelopeSimple className="size-5" aria-hidden="true" />
              Send an email
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2.5">
            {socials
              .filter((s) => s.url && s.icon !== "email")
              .map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <li key={s.name}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sticker transition-colors hover:bg-tint"
                    >
                      {Icon && <Icon className="size-4" aria-hidden="true" />}
                      {s.name}
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
