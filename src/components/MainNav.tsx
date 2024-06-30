import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <div>
      {isAuthenticated ? (
        <Button onClick={async () => await logout()}> Logout</Button>
      ) : (
        <Button
          onClick={async () => await loginWithRedirect()}
          className="bg-blue-600 text-white"
        >
          Login
        </Button>
      )}
    </div>
  );
};

export default MainNav;
