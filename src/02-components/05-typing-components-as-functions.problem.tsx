import React from "react";

export const Button: React.FC<{ className: string }> = ({
  className,
}: {
  className: string;
}) => {
  return {
    sayHi: "hi",
  };
};

const Parent = () => {
  return (
    <>
      <Button className="x"></Button>
    </>
  );
};
