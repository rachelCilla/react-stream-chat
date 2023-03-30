import { DetailedHTMLProps, forwardRef, ButtonHTMLAttributes } from "react";

export const Button = forwardRef<
  // first param= the type of our ref
  //second param= specifies type of props for the component.The code below is saying that the prop types we are going to pass in are the same prop types you can pass into a nomral input element
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>(({ className, children, ...rest }, ref) => {
  return (
    <button
      className={` transition-colors disabled:bg-gray-500  text-white font-bold hover:bg-blue-500 focus:bg-blue-400border-2 border-gray-900 bg-blue-600 rounded p-2 w-full ${className}`}
      {...rest}
      ref={ref}
    >
      {children}
    </button>
  );
});
