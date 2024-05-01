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
          <SheetTrigger className="md:hidden" name="show sidebar">
            <FaBars />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex gap-4 flex-col ">
                  <Link href="/" className="">
                    About
                  </Link>
                  <Link href="/" className="">
                    Projects
                  </Link>
                  <Link href="/" className="">
                    Contact
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </>
      <div className="flex gap-4 max-md:hidden">
        <Link href="/" className="nav-link">
          About
        </Link>
        <Link href="/" className="nav-link">
          Projects
        </Link>
        <Link href="/" className="nav-link">
          Contact
        </Link>
      </div>
    </div>
  );
}
