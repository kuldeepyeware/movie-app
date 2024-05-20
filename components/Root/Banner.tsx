import { fetchDataFromApi } from "@/lib/api";
import CarouselTop from "./CarouselTop";

const Banner = async () => {
  const data = await fetchDataFromApi("/trending/all/day");
  const movies = data.results;
  return <CarouselTop movies={movies} />;
};

export default Banner;
