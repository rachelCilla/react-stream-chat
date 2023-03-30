import { Input } from "../components/Input";
import { useRef } from "react";
import { Button } from "../components/Button";

export const Signup = () => {
  // useRef() is a built-in React hook that allows us to create a reference to a DOM element.  We can then use that reference to access the DOM element.  We can then use that reference to access the value of the input element.
  //useRef() set usernameRef to equal the value of
  const usernameRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const imageUrl = useRef<HTMLInputElement>(null);

  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center">Sign Up</h1>
      <form className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-5 items-center justify-items-end">
        <label htmlFor="userName">Username</label>
        {/* pattern="\S*" removes all whitespace */}
        <Input id="userName" pattern="\S*" required ref={usernameRef} />

        <label htmlFor="name">Name</label>
        <Input id="name" required ref={nameRef} />

        <label htmlFor="imageUrl">Image Url</label>
        <Input id="imageUrl" type="url" ref={imageUrl} />
        <Button type="submit" className="col-span-full">
          Sign Up{" "}
        </Button>
      </form>
    </>
  );
};
