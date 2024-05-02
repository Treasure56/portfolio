"use client";
import { useEffect, useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        if (!scrolled) setScrolled(true);
      } else if (window.scrollY < 100) {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`flex w-full fixed top-0 z-30 app-container py-4 justify-between ${
        scrolled ? "bg-light shadow" : ""
      }`}
    >
      <Link href="" className="font-bold text-md">
        hello
      </Link>
      <>
        <Sheet>
          <SheetTrigger
            className="md:hidden"
            title="show sidebar"
            aria-label="show sidebar"
          >
            <FaBars />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex gap-4 flex-col ">
                  {navLinks.map((navlink) => (
                    <Link
                      key={navlink.name}
                      href={navlink.href}
                      className="nav-link"
                    >
                      {navlink.name}
                    </Link>
                  ))}
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </>
      <div className="flex gap-4 max-md:hidden">
        {navLinks.map((navlink) => (
          <Link key={navlink.name} href={navlink.href} className="nav-link">
            {navlink.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

const navLinks = [
  {
    name: "About",
    href: "/#About",
  },
  {
    name: "Projects",
    href: "/#Projects",
  },
  {
    name: "Contact",
    href: "/#Contact",
  },
];
