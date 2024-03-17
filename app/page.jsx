"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import SplitType from "split-type";
import Star from "./components/star";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
  const tl = useRef();
  const titleRef = useRef();
  const descRef = useRef();

  useGSAP(() => {
    const titleText = new SplitType(titleRef.current);
    const descText = new SplitType(descRef.current);

    tl.current = gsap
      .timeline()
      .from(".wrapper", {
        backgroundColor: "#030712",
        duration: 0.8,
      })
      .from(titleText.chars, {
        y: 70,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "back.out(1.7)",
        stagger: {
          amount: 0.7,
        },
      })
      .from(
        descText.chars,
        {
          y: 70,
          duration: 1,
          opacity: 0,
          ease: "back.out(1.7)",
          stagger: {
            amount: 0.7,
          },
          onComplete: () => {
            gsap.to(".line", {
              scaleX: 1,
              duration: 0.5,
            });
          },
        },
        "-=1.5"
      )
      .from(
        ".star-1",
        {
          x: -50,
          opacity: 0,
          rotate: 360,
          duration: 1,
        },
        "-=1.5"
      )
      .from(
        ".star-2",
        {
          y: -50,
          x: 50,
          opacity: 0,
          scale: 0,
          rotate: -270,
          duration: 1,
        },
        "-=1.5"
      )
      .from(
        ".star-3",
        {
          y: -50,
          x: -50,
          opacity: 0,
          scale: 0,
          rotate: 180,
          duration: 1,
          onComplete: () => {
            gsap.to(".star-1", {
              rotate: -345,
              scrollTrigger: {
                trigger: ".desc",
                start: "bottom center",
                end: "bottom top",
                scrub: 1.5,
              },
            });
            gsap.to(".star-2", {
              rotate: 210,
              scrollTrigger: {
                trigger: ".desc",
                start: "bottom center",
                end: "bottom top",
                scrub: 1.5,
              },
            });
            gsap.to(".star-3", {
              rotate: -135,
              scrollTrigger: {
                trigger: ".desc",
                start: "bottom center",
                end: "bottom top",
                scrub: 1.5,
              },
            });
          },
        },
        "-=1.3"
      );
  }, null);

  return (
    <div className="h-[1000vh] overflow-x-hidden">
      <div className="h-[100svh] flex flex-col justify-center px-6 relative wrapper">
        <Star className="fill-indigo-300 w-10 top-56 star-1" />
        <Star className="fill-gray-950 w-6 top-[17rem] right-10 star-2" stroke="#f9fafb" />
        <Star className="fill-orange-400 w-10 bottom-[17rem] right-7 star-3" />
        <div className="header">
          <div className="flex flex-col self-start w-full mb-2 title-wrapper" ref={titleRef}>
            <p className="col-span-2 text-6xl marhaban">Marhaban</p>
            <p className="col-span-2 text-[2.8rem] whitespace-nowrap ms-auto -mt-1 !text-end ya-ramadhan">
              Ya <span className="text-indigo-300">Ramadhan</span>
            </p>
          </div>
          <p className="max-w-60 overflow-y-hidden font-medium leading-snug desc" ref={descRef}>
            May{" "}
            <span className="text-orange-400 relative">
              <span className="line absolute bottom-0 left-0 w-full h-[2px] scale-x-0 origin-left bg-orange-400"></span>
              Allah SWT
            </span>{" "}
            always grant safety in this blessed month
          </p>
        </div>
      </div>
    </div>
  );
}
