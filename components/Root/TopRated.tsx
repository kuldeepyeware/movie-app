import { convertDate } from "@/lib/date";
import MovieCard from "../Root/MovieCard";
import { fetchDataFromApi } from "@/lib/api";
import { Movies } from "@/types";

const TopRated = async () => {
  const data = await fetchDataFromApi(`/movie/top_rated`);
  const movies = data.results;
  return (
    <div className='mt-[56px]'>
      <h2 className='text-white font-bold text-2xl  mx-5 md:mx-5 lg:m-0'>
        Top Rated
      </h2>
      <div className='flex gap-5 mt-5 justify-center flex-wrap'>
        {movies.slice(0, 5).map((movie: Movies, index: number) => (
          <MovieCard
            mediaType={"movie"}
            key={index}
            id={movie.id}
            imageSrc={movie.poster_path}
            title={movie.title}
            realiseDate={convertDate(movie.release_date)}
          />
        ))}
      </div>
    </div>
  );
};

export default TopRated;
