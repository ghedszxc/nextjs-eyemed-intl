"use client";

import { FC, useRef } from "react";
import { IKeyFigure, IKeyFigures } from "./KeyFigures.interface";
import useOnScreen from "@/hooks/useOnScreen";

// Components
import Container from "@/components/Container";
import AnimateSwipe from "@/components/utils/AnimateSwipe";

const KeyFigures: FC<IKeyFigures> = ({ keyFigures }) => {
  
  const parentDiv = useRef(null);
  const activateAnimation = useRef(false);
  const isElemVisible = useOnScreen(parentDiv);

  if (isElemVisible && !activateAnimation.current) {
    keyFigures.map((data, key) => {
      const obj = document.getElementById(`num_${key}`);
      animateValue(obj, 100, data.value, 700);
    })

    activateAnimation.current = true  
  }

  function animateValue(obj: any, start: any, value: any, duration: any) {
    let startTimestamp: any = null;
    const step = (timestamp: any) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      let isPlusSignExist = /\+/.test(value);
      let getValue = parseInt(value.replace(/\D+/g, ""));

      obj.innerHTML = `${Math.floor(progress * (getValue - start) + start).toLocaleString()} ${isPlusSignExist && '+'}`;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  return (
    <AnimateSwipe>
      <Container>
        <div ref={parentDiv} className="w-full bg-primary text-white flex items-center flex-col md:flex-row md:justify-around py-8 mb-12 md:mb-16 lg:mb-20 mt-4">
          {keyFigures.map((kf: IKeyFigure, index: number) => (
            <div className="flex flex-col items-center max-w-72 py-4 md:py-0 h-36" key={index}>
              <div className="font-bold text-[2.5rem] text-center" id={`num_${index}`}>{kf.value}</div>
              <div className="text-md text-center">
                {kf.description}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </AnimateSwipe>
  );
};

export default KeyFigures;
