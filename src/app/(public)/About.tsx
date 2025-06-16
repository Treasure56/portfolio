import { FaCheck } from "react-icons/fa6";
import Image from "next/image";

export default function About() {
  return (
    <div className="app-container py-12 grid md:grid-cols-10" id="About">
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
          {" "}
          I&apos;m a frontend web and mobile app developer who&apos;s passionate about
          building fast, intuitive, and accessible digital products. I work
          primarily with TypeScript, Next.js, and Tailwind CSS for the web, and
          use React Native to craft high-quality mobile experiences. <br />
          <br /> I care deeply about user experience and code quality, every
          project is an opportunity to solve real problems through clean,
          scalable solutions. Whether it&apos;s a responsive website or a
          cross-platform mobile app, I aim to create products that feel
          effortless to use. <br />
          <br /> Beyond the code, I&apos;m driven by a desire to keep learning,
          collaborate with others, and push the boundaries of what&apos;s possible in
          tech. I believe that great software has the power to connect people,
          simplify life, and make a meaningful impact.{" "}
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
