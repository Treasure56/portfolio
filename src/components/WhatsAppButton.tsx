import { PiWhatsappLogo } from "react-icons/pi";
import { owner } from "@/data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={owner.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with me on WhatsApp"
      title="Chat on WhatsApp"
      className="pop-sm fixed bottom-5 right-5 z-[60] flex size-14 items-center justify-center rounded-full bg-brand text-brand-ink transition-transform hover:-translate-y-0.5 active:translate-y-0.5 md:bottom-7 md:right-7"
    >
      <PiWhatsappLogo className="size-7" aria-hidden="true" />
    </a>
  );
}
