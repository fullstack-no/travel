import { WiDayCloudy } from "react-icons/wi";
import { FiSettings } from "react-icons/fi";
import { LiaMapSignsSolid } from "react-icons/lia";

const list = [
  { icon: WiDayCloudy, title: "Calculate weather" },
  { icon: LiaMapSignsSolid, title: "Best tour guide" },
  { icon: FiSettings, title: "Customization" },
];

export const Serve = () => {
  return (
    <div className="mb-20 lg:flex gap-8">
      <div className="mb-8 lg:mb-0">
        <div className="mb-6 text-4xl alex-font text-amber-500">
          What we serve
        </div>
        <h1 className="text-4xl font-medium">We offer our best services</h1>
      </div>

      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((item, idx) => (
          <li key={idx}>
            <div className="shadow-md rounded-md p-4 bg-slate-200">
              <div className="w-fit p-2 bg-amber-500 rounded-full text-white">
                <item.icon size={32} />
              </div>

              <h1 className="text-xl font-medium my-6">{item.title}</h1>
              <p className="text-slate-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                dolores vero voluptatu
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
