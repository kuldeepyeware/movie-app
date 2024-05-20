import { fetchDataFromApi } from "@/lib/api";
import MovieCard from "../Root/MovieCard";
import { convertDate } from "@/lib/date";
import { Movies } from "@/types";

const Popular = async () => {
  const data = await fetchDataFromApi(`/movie/popular`);
  const movies = data.results;
  return (
    <div className='mt-[400px]'>
      <h2 className='text-white font-bold text-2xl mx-5 md:mx-5 lg:m-0'>
        Popular
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

export default Popular;
