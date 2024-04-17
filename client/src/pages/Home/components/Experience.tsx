import experienceImg from "assets/experience.png";

export const Experience = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
      <div className="order-2 lg:order-1">
        <div className="w-fit px-4 py-2 rounded-full bg-amber-500 text-xl text-slate-800 mb-6">
          Experience
        </div>

        <h1 className="text-4xl font-medium mb-6">
          With our experience we will serve you
        </h1>

        <p className="text-slate-500 mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet quod
          fugiat sed consectetur distinctio voluptate, repellendus vero. Debitis
          eum deserunt corporis modi error, odio facere voluptatem nam dolorum
          minima excepturi.
        </p>

        <div className="flex items-center gap-6 justify-around">
          <div>
            <div className="p-4 rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md bg-amber-500 text-white mb-4 w-fit mx-auto">
              12k+
            </div>
            <div className="text-center text-slate-500">Successful Trip</div>
          </div>

          <div>
            <div className="p-4 rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md bg-amber-500 text-white mb-4 w-fit mx-auto">
              2k+
            </div>
            <div className="text-center text-slate-500">Regular Clients</div>
          </div>

          <div>
            <div className="p-4 rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md bg-amber-500 text-white mb-4 w-fit mx-auto">
              15+
            </div>
            <div className="text-center text-slate-500">Years Experience</div>
          </div>
        </div>
      </div>

      <img
        src={experienceImg}
        alt="serve image"
        className="order-1 lg:oreder-2 w-full max-w-lg mx-auto"
      />
    </div>
  );
};
