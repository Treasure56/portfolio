"use client";

import { useState } from "react";
import Link from "next/link";
import { PiList } from "react-icons/pi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cta, nav, owner } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-[1.5px] border-ink bg-paper">
      <nav
        aria-label="Primary"
        className="site-container flex h-[68px] items-center justify-between gap-6"
      >
        <Link
          href="/"
          className="-rotate-2 rounded-lg bg-brand px-3 py-1.5 font-display text-base text-brand-ink"
        >
          {owner.name}
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="rounded-full px-4 py-2 text-[0.95rem] font-medium text-ink transition-colors hover:bg-tint"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link href={cta.href} className="btn-brand !px-5 !py-2.5 max-sm:hidden">
            {cta.label}
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="pop-sm flex size-10 items-center justify-center rounded-full bg-paper lg:hidden"
              aria-label="Open menu"
            >
              <PiList className="size-5" />
            </SheetTrigger>
            <SheetContent className="border-l-[1.5px] border-ink bg-paper font-body text-ink">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription asChild>
                  <div className="mt-10 text-left">
                    <ul className="flex flex-col">
                      {nav.map((item) => (
                        <li key={item.name} className="border-b border-line">
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="block py-4 text-3xl text-ink"
                            style={{ fontFamily: "var(--font-display), serif" }}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={cta.href}
                      onClick={() => setOpen(false)}
                      className="btn-brand mt-8 w-full"
                    >
                      {cta.label}
                    </Link>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
