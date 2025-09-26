import { FaCheck } from "react-icons/fa6";
import Image from "next/image";

export default function About() {
  return (
    <div className="app-container py-20 grid md:grid-cols-10" id="About">
      <Image
        src="/images/about-img.webp"
        alt=""
        width={400}
        height={350}
        className=" w-full col-span-4 "
      />
      <div className="flex flex-col justify-center gap-3 col-span-6 [&_p]:opacity-80">
        <h1 className="text-2xl font-lilita">About Me</h1>
        <p>
          I&apos;m a frontend web and mobile developer passionate about building
          fast, intuitive, and accessible products. I work with TypeScript,
          Next.js, Tailwind CSS, and React Native to create clean, scalable
          solutions that focus on user experience. Beyond code, I love learning,
          collaborating, and pushing boundaries to build software that truly
          makes an impact
        </p>
        {skills.map((skill) => (
          <div key={skill} className="flex gap-2">
            <FaCheck className="text-secondary rounded-full border p-1 text-xl  " />
            <p className="text-sm">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const skills = [
  "Web Design",
  "Web Development",
  "Critical Thinking",
  "Team Work",
  "Mobile App Development",
];
