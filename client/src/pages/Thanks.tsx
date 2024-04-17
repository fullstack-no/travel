import { FaCheck } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const Thanks = () => {
  return (
    <div className="w-full pt-20 flex items-center justify-center">
      <div className="w-full max-w-md text-center">
        <div className="p-4 rounded-full bg-amber-500 inline-flex items-center w-fit">
          <FaCheck className="text-white text-xl" />
        </div>

        <div className="capitalize alex-font font-bold text-4xl text-slate-800 my-8">
          thank you
        </div>

        <div className="text-lg text-slate-700 font-medium mb-8">
          your tour is booked!
        </div>

        <NavLink
          to={"/"}
          className={
            "capitalize text-lg text-white bg-amber-500 hover:bg-amber-600 rounded-full py-3 px-6 block text-center"
          }
        >
          back to home
        </NavLink>
      </div>
    </div>
  );
};
