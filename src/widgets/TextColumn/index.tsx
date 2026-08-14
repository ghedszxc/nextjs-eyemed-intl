"use client";
import AppConfig from "../../logic/configs/AppConfig";
import { ITextColumn } from "@/widgets/TextColumn/ITextColumn.interface";

// Components
import Container from "@/components/Container";
import AnimateSwipe from "@/components/utils/AnimateSwipe";

const TextColumn = ({ title1, bodyText }: ITextColumn) => {
  // Hooks
  // Variables
  // Functions
  // Effects
  // Styles

  return (
    <div className="bg-card">
      <Container className="py-[40px] md:py-[60px] lg:py-[80px]">
        <AnimateSwipe>
          <div className="font-bold text-[32px] leading-[42px] lg:text-[38px] lg:leading-[52px]">
            {title1}
          </div>
        </AnimateSwipe>

        <AnimateSwipe>
          <div className="grid grid-cols-1 gap-6 my-10 md:prose-textColumnDesktop prose-textColumnMobile">
            {AppConfig.html(bodyText)}
          </div>
        </AnimateSwipe>
      </Container>
    </div>
  );
};

export default TextColumn;
