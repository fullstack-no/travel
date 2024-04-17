import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { About, Home, Tours } from "../pages";
import { ToursSearch } from "pages/ToursSearch";
import { TourDetails } from "pages/TourDetail";
import { ToastContainer } from "react-toastify";
import { Thanks } from "pages/Thanks";
import { Login } from "pages/Login";
import { Register } from "pages/Register";
import { PublicRoute } from "./PublicRoute";
import { useContext } from "react";
import { authContext } from "contexts/AuthProvider";

export const Layout = () => {
  const { auth } = useContext(authContext);

  if (auth.loggedIn === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <ToastContainer />
      <Header />

      <div className="container mx-auto">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/tours" Component={Tours} />
          <Route path="/tours/search" Component={ToursSearch} />
          <Route path="/tours/:id" Component={TourDetails} />
          <Route path="/thank-you" Component={Thanks} />

          <Route Component={PublicRoute}>
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
          </Route>
        </Routes>
      </div>

      <Footer />
    </div>
  );
};
