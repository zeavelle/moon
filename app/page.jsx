"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import SplitType from "split-type";
import Star from "./components/star";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
  const [render, setRender] = useState(0);

  const tl = useRef();
  const titleRef = useRef();
  const descRef = useRef();
  const starRef1 = useRef();
  const starRef2 = useRef();
  const starRef3 = useRef();

  useGSAP(() => {
    const titleText = new SplitType(titleRef.current);
    const descText = new SplitType(descRef.current);

    tl.current = gsap
      .timeline()
      .from(titleText.chars, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        stagger: {
          amount: 0.5,
        },
      })
      .from(descText.chars, {
        y: -20,
        opacity: 0,
        duration: 1,
        stagger: {
          amount: 0.3
        }
      }, "-=1")
      .from(starRef1.current, {
        x: -50,
        opacity: 0,
        rotate: 360,
        duration: 1
      }, "-=1.5")
      .from(starRef2.current, {
        y: -50,
        x: 50,
        opacity: 0,
        scale: 0,
        rotate: -270,
        duration: 1
      }, "-=1.5")
      .from(starRef3.current, {
        y: -50,
        x: -50,
        opacity: 0,
        scale: 0,
        rotate: 180,
        duration: 1
      }, "-=1.3");
  }, null);

  return (
    <div className="h-[200vh] overflow-x-hidden">
      {/* <button
        className="fixed top-2 left-2 bg-indigo-700 py-1 px-3 rounded text-sm opacity-20 z-50"
        onClick={() => setRender((prev) => prev + 1)}
      >
        Render = {render}
      </button> */}
      <div className="h-[100svh] flex flex-col justify-center px-6 relative">
        <Star className="fill-gray-50 w-10 top-56" ref={starRef1}/>
        <Star className="fill-gray-950 w-6 top-[17rem] right-10" stroke="#818cf8" ref={starRef2}/>
        <Star className="fill-indigo-400 w-10 bottom-[17rem] right-7" ref={starRef3} />
        <div className="flex flex-col self-start w-full mb-2 overflow-y-hidden title-wrapper" ref={titleRef}>
          <p className="col-span-2 text-6xl">Marhaban</p>
          <p className="col-span-2 text-[2.8rem] whitespace-nowrap ms-auto -mt-1 !text-end">Ya <span className="text-indigo-400">Ramadhan</span></p>
        </div>
        <p className="max-w-60 overflow-y-hidden leading-snug" ref={descRef}>
          May <span className="text-indigo-400">Allah SWT</span> always grant safety in this blessed month
        </p>
      </div>
    </div>
  );
}
