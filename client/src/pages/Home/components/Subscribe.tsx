import img from "assets/male-tourist.png";

export const Subscribe = () => {
  return (
    <div className="py-8 px-6 bg-sky-300 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
      <div className="order-2 lg:order-1">
        <h1 className="text-4xl text-slate-800 font-medium mb-6 leading-[3rem]">
          Subscribe now to get usefull traveling information.
        </h1>
        <div className="bg-white p-4 w-full max-w-lg flex items-center justify-between gap-8 mb-12">
          <input
            type="text"
            placeholder="Enter your email"
            className="grow text-lg placeholder:text-gray-500 border-none focus:outline-none"
          />

          <button className="text-white text-xl bg-amber-500 py-2 px-4 rounded-md">
            Subscribe
          </button>
        </div>

        <p className="text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          facere inventore quia! Quibusdam recusandae quia aliquam voluptatibus
          quos ex, quas sapiente nesciunt porro inventore ipsum voluptates
          mollitia libero ipsam repellat!
        </p>
      </div>

      <img
        src={img}
        alt=""
        className="order-1 lg:order-2 w-full max-w-lg mx-auto"
      />
    </div>
  );
};
