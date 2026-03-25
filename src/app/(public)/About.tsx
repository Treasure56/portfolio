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
          I&apos;m a Web & Mobile App Engineer based in Nigeria, with a strong
          focus on user experience and clean, scalable code. I work with
          founders and product teams to build web apps, mobile apps, and
          AI-powered products taking ideas from concept all the way to a live,
          polished product. My approach: before I write a single line of code, I
          think about the person using it. How do they navigate? Where do they
          get frustrated? What makes them trust the product? That thinking shows
          up in everything I build.
        </p>
        <div className="grid grid-cols-2 gap-y-4 gap-x-2 mt-2">
          {skills.map((skill) => (
            <div key={skill} className="flex items-center gap-3">
              <div className="flex-shrink-0 bg-secondary/10 p-1.5 rounded-full">
                <FaCheck className="text-secondary text-sm" />
              </div>
              <span className="text-sm font-medium text-gray-700">{skill}</span>
            </div>
          ))}
        </div>
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
