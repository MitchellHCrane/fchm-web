"use client";

import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

/** Ported from 1stclassnextjs/src/app/components/Reviews.js */
const stats = [
  "30+ Years Experience",
  "Multiple Lenders",
  "Local Mortgage Experts",
  "Thousands of Loans Closed",
  "Licensed in Multiple States",
];

const reviews = [
  {
    body: "We had a pleasant experience working with Linda Skehan on a second mortgage for our home. She took care of our questions and provided knowledgeable help.",
    author: "Patricia H.",
  },
  {
    body: "Phenomenal job! Kept me updated throughout the entire process. Was able to work with my schedule and close the loan quickly. Would definitely recommend and use again.",
    author: "Ross U.",
  },
  {
    body: "We have purchased 2 homes through Troy. He is quick and very attentive. He answered all our questions as first time home buyers and helped us feel comfortable throughout the whole process!",
    author: "Marisa W.",
  },
  {
    body: "What an incredible company. Offering various loan types and a variety of rates. This will be your best decision for your home loan needs.",
    author: "Sariah K.",
  },
  {
    body: "Working with Kari was sooo easy. We did not think we were in a position to buy and Kari not only told us we were but she literally did EVERYTHING for us!",
    author: "Rylee R.",
  },
  {
    body: "What a great experience from start to close! Thoughtful and caring! Would highly recommend!",
    author: "Alan D.",
  },
];

const PAGE_SIZE = 3;
const ROTATE_MS = 7000;
const FADE_MS = 500;

function Stars() {
  return (
    <div className="flex gap-0.5 text-[#f5bb54]" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className="size-5" />
      ))}
    </div>
  );
}

export function Reviews() {
  const pages = Math.ceil(reviews.length / PAGE_SIZE);
  const [page, setPage] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setPage((p) => (p + 1) % pages);
        setShow(true);
      }, FADE_MS);
    }, ROTATE_MS);
    return () => clearInterval(timer);
  }, [pages]);

  const visible = reviews.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section className="bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-[#004e82] sm:text-4xl">Helping Utah families and homeowners since 1992.</h2>
        <p className="mt-4 text-lg text-gray-600">We shop multiple lenders to find the right mortgage solution for you.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-semibold text-[#2ca4f2]">
          {stats.map((stat, i) => (
            <span key={stat} className="flex items-center gap-x-3">
              {i > 0 && (
                <span className="text-gray-300" aria-hidden="true">
                  |
                </span>
              )}
              {stat}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 transition-opacity duration-500 lg:grid-cols-3" style={{ opacity: show ? 1 : 0 }}>
        {visible.map((review) => (
          <figure key={review.author} className="flex flex-col rounded-2xl bg-gray-50 p-8 text-sm/6 shadow-[0_8px_16px_rgba(145,149,157,0.15)]">
            <Stars />
            <blockquote className="mt-4 grow text-gray-900">
              <p>{`"${review.body}"`}</p>
            </blockquote>
            <figcaption className="mt-6">
              <div className="font-semibold text-[#2ca4f2]">{review.author}</div>
              <div className="text-gray-500">Google Reviews</div>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-2" aria-hidden="true">
        {Array.from({ length: pages }).map((_, i) => (
          <span key={i} className={`size-2 rounded-full ${i === page ? "bg-[#2ca4f2]" : "bg-gray-300"}`} />
        ))}
      </div>
    </section>
  );
}
