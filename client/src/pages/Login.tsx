import { useState } from "react";

import img from "assets/login.png";
import userImg from "assets/user.png";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { config } from "utils/config";

export const Login = () => {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;

    setFormState({ ...formState, [target.name]: target.value });
  };

  const handleSubmit = () => {
    fetch(config.server_url + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.access_token) {
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("refresh_token", data.refresh_token);
          toast("login successfully", { type: "success" });

          window.location.href = "/";
        } else {
          toast(data.message, { type: "error" });
        }
      })
      .catch((err) => {
        toast("login failed", { type: "error" });
      });
  };

  return (
    <div className="mx-auto w-full xl:w-1/2  max-w-7xl my-20 flex items-stretch shadow-md">
      <img src={img} alt="" className="w-3/5 grow-0 shrink-0" />

      <div className="w-2/5 relative p-8 bg-amber-500">
        <img
          src={userImg}
          alt=""
          className="w-28 h-28 absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2"
        />

        <div className="mt-12 text-4xl font-bold text-white mb-8 text-center">
          Login
        </div>

        <form className="mb-8">
          <input
            type="text"
            className="w-full block rounded-md p-4 mb-4 border-none focus:outline-none"
            name="username"
            placeholder="username"
            value={formState.username}
            onChange={handleChangeForm}
          />

          <input
            type="password"
            className="w-full block rounded-md p-4 mb-4 border-none focus:outline-none"
            name="password"
            placeholder="password"
            value={formState.password}
            onChange={handleChangeForm}
          />

          <button
            className="block w-full p-4 rounded-md border-none focus:outline-none bg-slate-800 text-white"
            type="button"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>

        <div className="text-center text-white">
          Don't have an account?
          <NavLink
            to="/register"
            className="text-slate-800 hover:underline ml-1"
          >
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};
