import { SlLocationPin } from "react-icons/sl";
import { FaStar } from "react-icons/fa";
import { data } from "data/data";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Tour } from "data/tour";
import { config } from "utils/config";
import { toast } from "react-toastify";

export const Explore = () => {
  // const list = data.slice(0, 8);

  const [list, setList] = useState<Tour[]>([]);

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
        setList(data?.data || []);
      })
      .catch((error) => {
        toast("get tours failed", { type: "error" });
      });
  }, []);

  return (
    <div className="mb-20">
      <div className="w-fit py-2 px-4 rounded-full bg-amber-500 alex-font text-2xl mb-4">
        explore
      </div>

      <h1 className="text-4xl font-medium mb-8">Our Featured Tours</h1>

      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {list.map((item, idx) => (
          <li key={idx}>
            <div className="shadow-md rounded-md bg-slate-50 overflow-hidden">
              <img
                src={config.server_url + "/" + item.img}
                alt=""
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center gap-8 justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <SlLocationPin className="text-amber-500" />
                    <div>{item.location}</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaStar className="text-amber-500" />
                    <div className="text-slate-500">
                      {item.star ? item.star : "Not Rated"}
                    </div>
                  </div>
                </div>

                <h1 className="text-xl font-bold mb-6">
                  <NavLink to={`/tours/${item.id}`}>{item.name}</NavLink>
                </h1>
                <div className="flex items-center justify-between gap-4">
                  <div className="text-gray-500">
                    <span className="text-amber-500 text-xl">
                      ${item.price}
                    </span>
                    /person
                  </div>

                  <button className="text-white bg-amber-500 hover:bg-amber-600 py-2 px-4 rounded-full text-lg">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
