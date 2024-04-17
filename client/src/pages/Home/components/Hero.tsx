import globeImg from "../../../assets/world.png";
import hero1 from "../../../assets/hero-img01.jpg";
import hero2 from "../../../assets/hero-img02.jpg";
import herovideo from "../../../assets/hero-video.mp4";

import { IoLocationOutline } from "react-icons/io5";
import { CiClock1 } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

export const Hero = () => {
  const [formState, setFormState] = useState({
    location: "",
    distance: "",
    max: "",
  });

  const navigate = useNavigate();

  const changeState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setFormState({ ...formState, [target.name]: target.value });
  };

  const validateForm = () => {
    const { distance, location, max } = formState;
    const errors = {
      distance: "",
      location: "",
      max: "",
    };

    if (distance) {
      if (isNaN(Number(distance))) {
        errors.distance = "must be a number";
      }
    }

    if (max) {
      if (isNaN(Number(max))) {
        errors.max = "must be a number";
      }
    }

    return errors;
  };
  const handleSubmit = () => {
    const errors = validateForm();
    console.log(errors);

    if (Object.values(errors).filter((item) => item).length) {
      const error = Object.entries(errors).find((item) => item[1]);
      if (error) {
        alert(error[0] + " " + error[1]);
      }

      return;
    }

    console.log("submit");
    navigate({
      pathname: "/tours/search",
      search: createSearchParams(
        Object.fromEntries(
          Object.entries(formState).map((item) => {
            item[1] = item[1].trim();
            return item;
          })
        )
      ).toString(),
    });
  };

  return (
    <div className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-2 mb-10">
            <div className="px-6 py-3 rounded-full bg-amber-500 text-slate-80 dark:text-slate-200">
              Know Before you go
            </div>

            <img src={globeImg} alt="" className="w-12 h-12" />
          </div>

          <h1 className="text-4xl font-medium mb-10">
            traveling opens the door to creating
            <span className="text-amber-500">memories</span>
          </h1>

          <p className="text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            exercitationem rem neque molestias quaerat. Facere dolorem ipsum
            vero eveniet totam id. Quos eius quisquam sed fugiat dolor
            consectetur recusandae animi.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 order-1 lg:order-2">
          <img
            src={hero1}
            alt=""
            className="h-72 rounded-3xl border border-amber-500 object-cover"
          />
          <video
            controls
            className="h-72 rounded-3xl border border-amber-500 object-cover mt-6"
          >
            <source src={herovideo} type="video/mp4" />
          </video>
          <img
            src={hero2}
            alt=""
            className="h-72 rounded-3xl border border-amber-500 object-cover mt-12"
          />
        </div>
      </div>

      <form className="relative w-fit px-8 py-3 rounded-md xl:rounded-full bg-slate-100 dark:bg-slate-700  xl:flex gap-8 divide-y xl:divide-y-0 xl:divide-x divide-slate-200 dark:divide-slate-600">
        <div className="flex items-center gap-4 xl:pl-8 xl:first:pl-0">
          <GoPeople className="text-amber-500" size={24} />

          <div className="space-y-0 ">
            <h1 className="text-lg font-medium">Location</h1>
            <input
              type="text"
              placeholder="Where are you going?"
              name="location"
              value={formState.location}
              onChange={changeState}
              autoComplete="off"
              className="py-2 border-none focus:outline-none bg-transparent rounded-md placeholder:text-slate-500 w-60"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 xl:pl-8 xl:first:pl-0">
          <IoLocationOutline className="text-amber-500" size={24} />

          <div className="space-y-0 ">
            <h1 className="text-lg font-medium">Distance</h1>
            <input
              type="text"
              placeholder="Distance km/h"
              name="distance"
              value={formState.distance}
              onChange={changeState}
              autoComplete="off"
              className="py-2 border-none focus:outline-none bg-transparent rounded-md placeholder:text-slate-500 w-60"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 xl:pl-8 xl:first:pl-0">
          <CiClock1 className="text-amber-500" size={24} />

          <div className="space-y-0 ">
            <h1 className="text-lg font-medium">Max People</h1>
            <input
              type="text"
              placeholder="0"
              name="max"
              value={formState.max}
              onChange={changeState}
              autoComplete="off"
              className="py-2 border-none focus:outline-none bg-transparent rounded-md placeholder:text-slate-500 w-60"
            />
          </div>
        </div>

        <button
          className="w-full xl:w-fit  flex xl:block justify-center  p-2 rounded-md bg-amber-400 hover:bg-amber-500 text-white self-center"
          type="button"
          onClick={handleSubmit}
        >
          <IoSearchOutline size={32} />
        </button>
      </form>
    </div>
  );
};