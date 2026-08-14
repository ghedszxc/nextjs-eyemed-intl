import { IHamburger } from "./Hamburger.interface";

const Hamburger = ({ isActive, handleToggle }: IHamburger) => {
  return (
    <div className={"bg-gray p-[12px] cursor-pointer"} onClick={handleToggle}>
      <div
        className={`w-[18px] my-[3px] h-[2px] bg-black rounded ${isActive ? "opacity-0" : ""}`}
      ></div>
      <div
        className={`w-[18px] my-[3px] h-[2px] bg-black rounded ${isActive ? "rotate-45" : ""}`}
      ></div>
      <div
        className={`w-[18px] my-[3px] h-[2px] bg-black rounded ${isActive ? "-rotate-45 relative bottom-[4px]" : ""}`}
      ></div>
    </div>
  );
};

export default Hamburger;
