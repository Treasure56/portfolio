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
    <div
      className="flex flex-col gap-4 justify-center app-container py-6"
      id="Contact"
    >
      <h1 className="text-center text-2xl font-bold ">Contact Me</h1>
      <div className="flex justify-center items-center gap-4 text-3xl">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            className=" border p-2 rounded-full"
            target="_blank"
            aria-label={`contact me on ${social.title}`}
            title={`contact me on ${social.title}`}
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
    title: "Github",
    icon: <FaGithub />,
    link: "https://helloworld",
  },
  {
    title: "LinkedinIn",
    icon: <FaLinkedinIn />,
    link: "https://helloworld",
  },
  {
    title: "Facebook",
    icon: <FaFacebook />,
    link: "https://helloworld",
  },
  {
    title: "X",
    icon: <FaXTwitter />,
    link: "https://helloworld",
  },
  {
    title: "Email",
    icon: <FaEnvelope />,
    link: "simplicitytreasure@gmail.com",
  },
];
