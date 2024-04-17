import { authContext } from "contexts/AuthProvider";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const { auth } = useContext(authContext);

  if (auth.loggedIn === undefined) {
    return <Navigate to={"/login"}></Navigate>;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};
