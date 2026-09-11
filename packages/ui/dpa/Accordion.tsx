"use client";

import { useState } from "react";
import type { AssistanceProgram } from "@content/dpa";
import { RichText } from "./RichText";

/** Ported from dpa-1stclass/src/app/page.tsx */
export function Accordion({ programs }: { programs: AssistanceProgram[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      {programs.map((program, index) => (
        <div key={index} className="my-12 p-6 bg-gray-100 shadow-md rounded-lg">
          <div className="flex justify-between items-center">
            <h2
              className={`${index % 2 !== 0 ? "text-[#004e82]" : "text-[#2ca4f2]"} text-2xl font-bold cursor-pointer`}
              onClick={() => toggle(index)}
            >
              {program.title}
            </h2>
            <div>
              {openIndex === index ? (
                <svg
                  onClick={() => toggle(index)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 text-black cursor-pointer"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
              ) : (
                <svg
                  onClick={() => toggle(index)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 text-black cursor-pointer"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              )}
            </div>
          </div>
          {openIndex === index && (
            <>
              <p className="text-gray-700 my-4">
                <RichText value={program.paragraph} />
              </p>
              <ul className="list-disc list-inside space-y-2">
                {program.bulletPoints.map((bullet, idx) => (
                  <li key={idx} className="text-gray-600">
                    <RichText value={bullet} />
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </>
  );
}
