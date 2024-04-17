import img1 from "assets/gallery-01.jpg";
import img2 from "assets/gallery-02.jpg";
import img3 from "assets/gallery-03.jpg";
import img4 from "assets/gallery-04.jpg";
import img5 from "assets/gallery-05.jpg";
import img6 from "assets/gallery-06.jpg";
import img7 from "assets/gallery-07.jpg";

const list = [img1, img3, img7, img4, img6, img5, img2, img7];

export const Gallery = () => {
  return (
    <div className="mb-20">
      <div className="w-fit bg-amber-500 py-2 px-4 rounded-full text-xl mb-6">
        Gallery
      </div>

      <h1 className="font-medium text-4xl mb-6">
        Visit our customers tour gallery
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="grid grid-cols-1 gap-6">
          <img
            src={list[0]}
            alt="single"
            className="rounded-md w-full h-auto hover:scale-105"
          />
          <img
            src={list[1]}
            alt="single"
            className="rounded-md w-full hover:scale-105"
          />
        </div>

        <div className="grid gap-6">
          <img
            src={list[2]}
            alt="single"
            className="rounded-md w-full hover:scale-105"
          />
          <img
            src={list[3]}
            alt="single"
            className="rounded-md w-full hover:scale-105"
          />
        </div>

        <div className="grid gap-6">
          <img
            src={list[4]}
            alt="single"
            className="rounded-md w-full hover:scale-105"
          />
          <img
            src={list[5]}
            alt="single"
            className="rounded-md w-full hover:scale-105"
          />
        </div>

        <div className="grid gap-6">
          <img
            src={list[6]}
            alt="single"
            className="rounded-md w-full hover:scale-105"
          />
          <img
            src={list[7]}
            alt="single"
            className="rounded-md w-full hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};
