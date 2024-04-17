import { SlLocationPin } from "react-icons/sl";
import { FaStar } from "react-icons/fa";

import { data } from "data/data";
import { Tour } from "data/tour";
import { useEffect, useState } from "react";
import {
  NavLink,
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

import { IoLocationOutline } from "react-icons/io5";
import { CiClock1 } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";

export const Tours = ({ request }: any) => {
  const [formState, setFormState] = useState({
    location: "",
    distance: "",
    max: "",
  });

  const navigate = useNavigate();

  const [tours, setTours] = useState<Tour[]>(data);

  useEffect(() => {}, []);

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
    <div className="pt-20">
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

      <div className="my-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {tours.map((tour, idx) => (
          <div key={idx} className="rounded-md shadow-md overflow-hidden">
            <img src={tour.img} alt="" className="w-full h-40 object-cover" />
            <div className="p-4">
              <div className="flex justify-between gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <SlLocationPin className="text-amber-500" />
                  <div>{tour.location}</div>
                </div>
                <div className="flex items-center gap-2">
                  <FaStar className="text-amber-500" />
                  <div className="text-slate-500">
                    {tour.star ? tour.star : "Not Rated"}
                  </div>
                </div>
              </div>

              <h1 className="text-xl font-bold mb-6">
                <NavLink to={`/tours/${tour.id}`}>{tour.name}</NavLink>
              </h1>
              <div className="flex items-center justify-between gap-4">
                <div className="text-gray-500">
                  <span className="text-amber-500 text-xl">${tour.price}</span>
                  /person
                </div>

                <button className="text-white bg-amber-500 hover:bg-amber-600 py-2 px-4 rounded-full text-lg">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
