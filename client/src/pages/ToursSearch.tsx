import { SlLocationPin } from "react-icons/sl";
import { FaStar } from "react-icons/fa";

import { data } from "data/data";
import { Tour } from "data/tour";
import { useEffect, useState } from "react";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import { config } from "utils/config";
import { toast } from "react-toastify";

export const ToursSearch = ({ request }: any) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const location = searchParams.get("location")?.trim();
  const distance = Number(searchParams.get("distance")?.trim()) || undefined;
  const max = searchParams.get("max")?.trim();

  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    fetch(config.server_url + "/tours", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        let tours: Tour[] = data?.data || [];

        tours = tours.filter((tour) => {
          if (distance && tour.distance > distance) return false;

          if (
            location &&
            !tour.location.toLowerCase().includes(location.toLowerCase())
          )
            return false;

          return true;
        });

        setTours(tours);
      })
      .catch((error) => {
        toast("get tours failed", { type: "error" });
      });
  }, []);

  useEffect(() => {}, []);

  return (
    <div className="my-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
      {tours.map((tour, idx) => (
        <div key={idx} className="rounded-md shadow-md overflow-hidden">
          <img
            src={config.server_url + "/" + tour.img}
            alt=""
            className="w-full h-40 object-cover"
          />
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
  );
};
