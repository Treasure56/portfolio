import Image from "next/image";
import Link from "next/link";
import Technologies from "./Technologies";

export default function HeroSection() {
  return (
    <section className="md:h-[80vh] max-h-[700px] relative overflow-hidden bg-[url(/images/hero-bg.png)]">
      <div className="absolute bg-primary rounded-full blur-[100px] size-[500px] -bottom-40 -right-40 "></div>
      <div className="absolute bg-secondary rounded-full blur-[50px]  size-[500px]  -top-40 -left-40"></div>
      <div className=" max-md:flex-col flex bg-[#ffffffaa] backdrop-blur-[5px] app-container h-full w-full relative">
        <div className="flex flex-col max-md:items-center  md:h-full py-6 max-md:pt-20 justify-center flex-grow gap-2 w-full md:w-7/12">
          <p className="text-l font-bold">Hey there 👋, i&apos;m</p>
          <h1 className=" md:text-6xl text-3xl font-lilita">Treasure Robinson</h1>
          <p className="md:text-2xl text-xl font-semibold">
            Web / Mobile App Developer
          </p>
          <div className="flex gap-3">
            <Link
            href="#Contact"
             className="btn-primary font-semibold w-fit py-3 px-10 shadow-lg">
              Contact
            </Link>
            <Link
            href="https://wa.me/2349039418922"
             className="btn-primary-border font-semibold w-fit py-3 px-10 shadow-lg">
              hire Me
            </Link>
          </div>
        </div>
        <Image
          src="/images/my-emoji.png"
          alt="my avatar"
          width={650}
          height={650}
          className="md:w-5/12 w-full object-contain object-bottom md:object-left-bottom  md:pt-40 pt-6"
          priority
        />
      </div>
    </section>
  );
}
