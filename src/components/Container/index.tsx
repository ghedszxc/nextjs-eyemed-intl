import { IContainer } from "./IContainer";
import { cx, cva } from "class-variance-authority";

const ContainerCVA = cva([]);

export default function Container({ children, ...props }: IContainer) {
  const classes = cx(`max-w-[1280px] mx-auto px-5 ${props.className}`);
  const cvaClasses = ContainerCVA({ className: classes });

  return (
    <div {...props} className={cvaClasses}>
      {children}
    </div>
  );
}
