"use client";

import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { companyContent } from "@content/company";

/** Ported from 1stclassnextjs/src/app/components/Banner.js. */
const slides = [
  {
    key: "hiring",
    href: "/careers",
    target: "_self",
    content: (
      <>
        <span className="font-semibold">We are hiring!</span>
        <Image alt="First Class Home Mortgage" src="/company/images/fchmLogoColor.png" width={16} height={16} />
        <span className="font-semibold">Learn More</span>
        <ArrowRightIcon className="size-4" />
      </>
    ),
  },
  {
    key: "heloc",
    href: companyContent.helocUrl,
    target: "_blank",
    content: (
      <>
        <span className="font-semibold">Fast Cash 💰 HELOC</span>
        <span className="font-semibold">— Click my link for a fast quote</span>
        <ArrowRightIcon className="size-4" />
      </>
    ),
  },
];

const ROTATE_MS = 6000;

export function Banner() {
  const [isVisible, setIsVisible] = useState(true);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, ROTATE_MS);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="flex items-center gap-x-4 bg-[#2ca4f2] px-6 py-2.5 sm:px-3.5">
      <div className="relative flex-1 overflow-hidden">
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
          {slides.map((slide) => (
            <div key={slide.key} className="flex w-full shrink-0 items-center justify-center">
              <p className="text-sm/6 text-white font-bold">
                <a className="flex items-center gap-2 md:gap-4" href={slide.href} target={slide.target} rel={slide.target === "_blank" ? "noreferrer" : undefined}>
                  {slide.content}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <div className="hidden gap-1.5 sm:flex" aria-hidden="true">
          {slides.map((s, i) => (
            <span key={s.key} className={`size-1.5 rounded-full ${i === current ? "bg-white" : "bg-white/40"}`} />
          ))}
        </div>
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px] cursor-pointer" onClick={() => setIsVisible(false)}>
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="size-5 text-white" />
        </button>
      </div>
    </div>
  );
}
