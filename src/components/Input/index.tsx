import { Input as ShadInput } from "@/components/ui/input";
import { IInput } from "./IInput.interface";
import { FC } from "react";

const Input: FC<IInput> = (props) => <ShadInput {...props} />;

export default Input;
