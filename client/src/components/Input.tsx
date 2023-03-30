// INPUTs on the signup/login page
import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react";

export const Input = forwardRef<
  // first param= the type of our ref
  //second param= specifies type of props for the component.The code below is saying that the prop types we are going to pass in are the same prop types you can pass into a nomral input element
  HTMLInputElement,
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
>(({ className, ...rest }, ref) => {
  return (
    <input
      className={`py-1 px-2 border border-gray-400 focus:border-blue-500 outline-none rounded w-full ${className}`}
      {...rest}
      ref={ref}
    />
  );
});
