"use client";

import { useRef } from "react";
import AppConfig from "../../logic/configs/AppConfig";
import { IArticleText } from "./ArticleText.interface";
import Container from "@/components/Container";
import AnimateSwipe from "@/components/utils/AnimateSwipe";

const ArticleText = ({ title1, bodyText, padding = "both" }: IArticleText) => {
  // Hooks
  // Variables
  // Functions
  const getPadding = AppConfig.getWidgetPadding;
  const ref = useRef<HTMLDivElement>(null);
  // Effects
  // Styles

  return (
    <Container>
      <div ref={ref}></div>
      <div
        className={`max-w-[956px] m-auto py-[35px] lg:py-[80px] ${getPadding(
          padding,
          "lg"
        )}`}
      >
        <AnimateSwipe>
          <div className="font-bold text-[32px] lg:text-[38px] leading-[42px] lg:leading-[52px]">
            {title1}
          </div>
        </AnimateSwipe>

        {/* <AnimateSwipe>
          <div className="text-3xl pt-1 pb-2 pl-0">{subtitle}</div>
        </AnimateSwipe> */}

        <AnimateSwipe ref={ref}>
          <div className="prose-articleTextMobile lg:prose-articleTextDesktop mt-4 text-lg prose-list">
            {bodyText}
          </div>
        </AnimateSwipe>
      </div>
    </Container>
  );
};

export default ArticleText;
