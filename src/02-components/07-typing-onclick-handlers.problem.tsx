import React from "react";

interface ButtonProps {
  className: string;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

function Home() {
  return (
    <Button onClick={() => {}} className="hello">
      Hello World!
    </Button>
  );
}
