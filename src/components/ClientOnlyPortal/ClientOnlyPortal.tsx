import React, { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type ClientOnlyPortalProps = {
  selector: string;
  children: ReactNode;
  elemRef?: HTMLDivElement | null;
};

const ClientOnlyPortal: React.FC<ClientOnlyPortalProps> = ({
  children,
  selector,
  elemRef,
}) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    if (selector) ref.current = document.querySelector(selector);
  }, [selector]);

  if(elemRef) return createPortal(children, elemRef);
  return ref.current ? createPortal(children, ref.current) : null;
};
export default ClientOnlyPortal;
