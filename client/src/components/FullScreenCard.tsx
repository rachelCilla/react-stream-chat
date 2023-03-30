import { ReactNode } from "react";

// type for props. ReactNode is a type that can accept any type of value that can be rendered by React
type FullScreenCardProps = {
  children: ReactNode;
};

// FullScreenCard is a comp. that will be used to wrap our login/signup form. It is the gray background that surrounds the form
export const FullScreenCard = ({ children }: FullScreenCardProps) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full">{children}</div>
    </div>
  );
};
// FullScreenCard.Body is a comp. that will be used to wrap our login/signup form. It is the white background that surrounds the form
FullScreenCard.Body = function ({ children }: FullScreenCardProps) {
  return <div className="bg-white rounded-lg shadow- p-6">{children}</div>;
};
// this is the "create account" button on the login page below the white box form
FullScreenCard.BelowCard = function ({ children }: FullScreenCardProps) {
  return <div className=" my-2 justify-center flex gap-3">{children}</div>;
};
