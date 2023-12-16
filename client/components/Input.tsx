import * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  onChange: (e: any) => void;
  value?: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  className,
  id,
  onChange,
  value,
  label,
  type,
}) => {
  return (
    <div className="relative w-full">
      <input
        className={cn(
          "text-md peer block w-full appearance-none rounded-sm border border-black bg-white px-6 pb-1 pt-6 text-black focus:outline-none focus:ring-1",
          className,
        )}
        id={id}
        type={type ? type : "text"}
        placeholder=" "
        {...(value && { value })}
        onChange={onChange}
      />

      <label
        className="
        text-md absolute left-6 top-4 z-10 origin-[0] -translate-y-3
        scale-75 transform cursor-text text-black duration-100
        peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3
        peer-focus:scale-75
        "
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
