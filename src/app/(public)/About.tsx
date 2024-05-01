import { FaCheck } from "react-icons/fa6";
import Image from "next/image";

export default function About() {
  return (
    <div className="app-container py-6 grid md:grid-cols-10">
      <Image
        src="/images/about-img.webp"
        alt=""
        width={600}
        height={600}
        className=" w-full col-span-4 "
      />
      <div className="flex flex-col justify-center gap-3 col-span-6 [&_p]:opacity-80">
        <h1 className="text-2xl">About Me</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis eaque
          nesciunt at tempora ratione mollitia eius dolor rerum error quod
          perspiciatis, voluptatibus eos, omnis ipsam earum reprehenderit sunt,
          <br /> <br />
          explicabo distinctio. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sit nesciunt, facilis ullam consectetur delectus
          illum hic, quam eveniet placeat quia possimus dolor ratione tempora
          perferendis in doloribus voluptas at perspiciatis?
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
