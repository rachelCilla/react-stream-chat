// an Outlet is where you put the code that goes inside your layout (in this case, the login/signup form)
import { Outlet } from "react-router-dom";
// FullScreenCard is the layout for our login/signup page
import { FullScreenCard } from "../../components/FullScreenCard";

export function AuthLayout() {
  return (
    <FullScreenCard>
      <FullScreenCard.Body>
        {/* inside the body of our card (white part of login/signup forms), we put anything inside our login or sign up comp.  */}
        <Outlet />
      </FullScreenCard.Body>
      <FullScreenCard.BelowCard>hi</FullScreenCard.BelowCard>
    </FullScreenCard>
  );
}
