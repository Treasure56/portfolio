import Image from "next/image";

export default function Technologies() {
  return (
    <section className="relative h-20 max-md:pb-40">
      <div className="absolute -top-1/2 p-2 w-10/12 md:flex left-1/2 -translate-x-1/2 bg-light rounded-xl shadow-2xl border items-center justify-evenly grid grid-cols-2 place-items-center ">
        <h1 className="font-semibold text-sm col-span-2 max-md:text-center max-md:whitespace-nowrap">
          Technologies <br /> I Work With
        </h1>
        {tech.map((tech, index) => (
          <div
            key={index}
            className="size-20 p-3 flex flex-col justify-center items-center gap-1"
          >
            <Image
              src={tech.logo}
              alt=""
              width={200}
              height={200}
              className="w-full aspect-square"
            />
            <span className="text-xs whitespace-nowrap">{tech.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const tech = [
  {
    logo: "/images/tailwind-css.png",
    title: "Tailwind CSS",
  },
  {
    logo: "/images/next.js.png",
    title: "Next.js",
  },
  {
    logo: "/images/typescript.png",
    title: "TypeScript",
  },
  {
    logo: "/images/react-native.png",
    title: "React Native",
  },
  {
    logo: "/images/expo.png",
    title: "Expo",
  },
  {
    logo: "/images/git.png",
    title: "git",
  },
];
