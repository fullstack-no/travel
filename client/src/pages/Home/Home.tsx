import { Experience } from "./components/Experience";
import { Explore } from "./components/Explore";
import { Fans } from "./components/Fans";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { Serve } from "./components/Serve";
import { Subscribe } from "./components/Subscribe";

export const Home = () => {
  return (
    <div className="container mx-auto">
      <Hero />
      <Serve />
      <Explore />
      <Experience />
      <Gallery />
      <Fans />
      <Subscribe />
    </div>
  );
};
