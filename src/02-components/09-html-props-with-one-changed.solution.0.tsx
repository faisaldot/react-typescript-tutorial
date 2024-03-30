import { ComponentProps } from "react";
import { Equal, Expect } from "../helpers/type-utils";

// Solution one
type InputPropsType = Omit<ComponentProps<"input">, "onChange"> & {
  onChange: (value: string) => void;
};

// Solution two
interface InputPropsInterface
  extends Omit<ComponentProps<"input">, "onChange"> {
  onChange: (value: string) => void;
}

export const Input = (props: InputPropsType) => {
  return (
    <input
      {...props}
      onChange={(e) => {
        e.target.value;
      }}
    ></input>
  );
};

const Parent = () => {
  return (
    <Input
      onChange={(e) => {
        console.log(e);

        type test = Expect<Equal<typeof e, string>>;
      }}
    ></Input>
  );
};
