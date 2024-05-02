import { FaCheck } from "react-icons/fa6";
import Image from "next/image";

export default function About() {
  return (
    <div className="app-container py-6 grid md:grid-cols-10" id="About">
      <Image
        src="/images/about-img.webp"
        alt=""
        width={400}
        height={350}
        className=" w-full col-span-4 "
      />
      <div className="flex flex-col justify-center gap-3 col-span-6 [&_p]:opacity-80">
        <h1 className="text-2xl">About Me</h1>
        <p>
          I&apos;m a frontend developer skilled in TypeScript, React, Next.js,
          and Tailwind CSS. I love creating user-friendly websites and apps.
          TypeScript helps me write cleaner code, React builds interactive
          interfaces, Next.js makes apps fast, and Tailwind CSS ensures sleek
          designs. I face challenges but always strive to learn and grow.
          <br /> <br />
          My goal is to innovate and collaborate, making the web better for
          everyone. With each project, I refine my skills and push boundaries. I
          believe in the power of technology to connect people and enhance
          experiences. Join me on this exciting journey of digital exploration!
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
];
