import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode | string;
  disabled?: boolean;
  onClick?:()=>void
};
const Button = ({ className, children, disabled, onClick }: Props) => {
  return (
    <button onClick={onClick} className={`border text-lg font-medium text-white rounded-md  ${className}`} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
export {};