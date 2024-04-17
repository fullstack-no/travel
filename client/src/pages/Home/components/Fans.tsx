import Slider from "react-slick";

import avatar1 from "assets/ava-1.jpg";
import avatar2 from "assets/ava-2.jpg";
import avatar3 from "assets/ava-3.jpg";

const list = [
  { img: avatar1, name: "John", position: "customer" },
  { img: avatar2, name: "John", position: "customer" },
  { img: avatar3, name: "John", position: "customer" },
];

export const Fans = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };

  return (
    <div className="mb-20">
      <div className="w-fit py-2 px-4 rounded-full bg-amber-500 text-slate-800 text-xl mb-6 alex-font">
        Fans Love
      </div>

      <h1 className="text-4xl font-medium mb-6">
        what our fans saying about us
      </h1>

      <div className="my-12 mx-4">
        <Slider {...settings}>
          {[...Array(3)].map((item, idx) => (
            <div key={idx}>
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {list.map((customer, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="text-slate-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Commodi a obcaecati assumenda reprehenderit quae molestiae
                      quo, eaque iusto iure, nihil repellendus, magni expedita
                      molestias maiores dolorem omnis ea voluptates nisi?
                    </div>

                    <div className="flex items-center gap-4">
                      <img
                        src={customer.img}
                        alt="avatar"
                        className="w-24 h-24 rounded-md"
                      />

                      <div className="space-y-4">
                        <div className="text-lg font-medium">
                          {customer.name}
                        </div>
                        <div>{customer.position}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
