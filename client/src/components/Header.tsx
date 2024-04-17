import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

import { MdMenu } from "react-icons/md";
import { useContext, useState } from "react";
import { authContext } from "contexts/AuthProvider";
import { toast } from "react-toastify";

const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Tour", path: "/tours" },
];

export const Header = () => {
  const { auth, setAuth } = useContext(authContext);

  const [openMenu, setOpenMenu] = useState(false);

  const handleLogout = () => {
    //  clear token
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    // setcontext
    setAuth((auth: any) => ({ ...auth, loggedIn: false }));

    toast("logged out", { type: "success" });
  };

  return (
    <header className="sticky top-0 left-0 shadow-md bg-white dark:bg-slate-800 z-10">
      <div className="container mx-auto px-4 h-16 flex items-center">
        <img src={logo} alt="logo" className="w-32 mr-12" />

        <ul className="hidden lg:flex items-center gap-4 mx-auto">
          {links.map((link, idx) => (
            <li key={idx}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md hover:bg-slate-200 hover:text-amber-500 dark:hover:bg-slate-700 ${
                    isActive
                      ? "text-amber-500"
                      : "text-slate-700 dark:text-slate-200"
                  }`
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-4">
          {!auth.loggedIn ? (
            <>
              <NavLink
                to="/login"
                className="px-4 py-2 rounded-full text-slate-700 hover:bg-slate-200 hover:text-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-slate-100"
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="px-4 py-2 rounded-full bg-amber-500 text-slate-100 hover:bg-amber-600 hover:text-slate-50"
              >
                Register
              </NavLink>
            </>
          ) : (
            <>
              <div className="py-2 px-3">{auth.user?.username ?? "user"}</div>
              <button
                className="px-4 py-2 rounded-full bg-slate-400 text-slate-100 hover:bg-slate-500 hover:text-slate-50"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
        </div>

        <div className="relative ml-4 lg:hidden">
          <button
            className="p-4 rounded-full bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200 hover:bg-slate-200 hover:text-slate-800 dark:hover:bg-slate-600 dark:hover:text-slate-100 flex items-center"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <MdMenu />
          </button>

          <div
            className={`absolute top-full right-0 translate-y-2 w-80 bg-slate-50 dark:bg-slate-800 rounded-md shadow-md transition-opacity duration-500 overflow-hidden ${
              openMenu ? "opacity-100" : "opacity-0 h-0"
            }`}
          >
            <ul className="py-2 flex flex-col items-stretch divide-y divide-slate-200 dark:divide-slate-700">
              {links.map((link, idx) => (
                <li key={idx}>
                  <NavLink
                    to={link.path}
                    className={`block px-4 py-4 text-slate-700 dark:text-slate-200 hover:bg-slate-200 hover:text-amber-500 dark:hover:bg-slate-700`}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
