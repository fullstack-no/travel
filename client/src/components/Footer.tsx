import logo from "assets/logo.png";
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-200 shadow-md mt-auto">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div>
          <img src={logo} alt="" className="w-32 mb-4" />

          <p className="text-slate-500 mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam mini
          </p>

          <div className="flex items-center gap-2">
            <FaYoutube />
            <FaGithub />
            <FaFacebook />
            <FaInstagram />
          </div>
        </div>

        <div className="space-y-6 text-slate-500">
          <div className="text-lg text-slate-800">Discover</div>
          <NavLink to={"/"} className={"block"}>
            Home
          </NavLink>
          <NavLink to={"/about"} className={"block"}>
            About
          </NavLink>
          <NavLink to={"/tours"} className={"block"}>
            Tour
          </NavLink>
        </div>

        <div className="space-y-6 text-slate-500">
          <div className="text-lg text-slate-800">Quick Links</div>
          <NavLink to={"/"} className={"block"}>
            Gallery
          </NavLink>
          <NavLink to={"/about"} className={"block"}>
            Login
          </NavLink>
          <NavLink to={"/tours"} className={"block"}>
            Register
          </NavLink>
        </div>

        <div className="text-slate-500">
          <div className="text-lg text-slate-800 mb-6">Contact</div>
          <div className={" mb-4 flex items-center gap-6"}>
            <div className="flex items-center gap-2">
              <CiLocationOn className="text-amber-500" />
              <div className="text-lg font-medium">Address:</div>
            </div>

            <div className="text-slate-500">Ha Noi, Vietnam</div>
          </div>

          <div className={" mb-4 flex items-center gap-6"}>
            <div className="flex items-center gap-2">
              <CiMail className="text-amber-500" />
              <div className="text-lg font-medium">Email:</div>
            </div>

            <div className="text-slate-500">abc@gmail.com</div>
          </div>

          <div className={" mb-4 flex items-center gap-6"}>
            <div className="flex items-center gap-2">
              <FaPhone className="text-amber-500" />
              <div className="text-lg font-medium">Phone:</div>
            </div>

            <div className="text-slate-500">+0123456789</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
