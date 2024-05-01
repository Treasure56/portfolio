import { Sofia_Sans_Condensed } from "next/font/google";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-4 justify-center app-container py-6">
      <h1 className="text-center text-2xl font-bold ">Contact Me</h1>
      <div className="flex justify-center items-center gap-4 text-3xl">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            className=" border p-2 rounded-full"
            target=""
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

const socials = [
  {
    icon: <FaGithub />,
    link: "https://helloworld",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://helloworld",
  },
  {
    icon: <FaFacebook />,
    link: "https://helloworld",
  },
  {
    icon: <FaXTwitter />,
    link: "https://helloworld",
  },
  {
    icon: <FaEnvelope />,
    link: "simplicitytreasure@gmail.com",
  },
];
