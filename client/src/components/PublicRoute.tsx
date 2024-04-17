import { authContext } from "contexts/AuthProvider";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = () => {
  const { auth } = useContext(authContext);

  if (auth.loggedIn) return <Navigate to="/" />;

  return (
    <div>
      <Outlet />
    </div>
  );
};
