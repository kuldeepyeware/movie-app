import { fetchDataFromApi } from "@/lib/api";
import MovieCard from "../Root/MovieCard";
import { convertDate } from "@/lib/date";
import { Movies } from "@/types";

const SimilarMovie = async ({
  mediaType,
  id,
}: {
  mediaType: string;
  id: string;
}) => {
  const data = await fetchDataFromApi(`/${mediaType}/${id}/similar`);
  const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";
  return (
    <div className='w-full'>
      {data?.results?.length >= 1 && (
        <>
          <h2 className='text-white text-2xl mt-10'>{title}</h2>
          <div className='flex gap-5 mt-5 justify-center lg:flex-nowrap flex-wrap'>
            {data?.results?.slice(0, 5).map((item: Movies, index: number) => (
              <MovieCard
                mediaType={mediaType}
                key={index}
                id={item.id}
                imageSrc={item.poster_path}
                title={item.title || item.name}
                realiseDate={convertDate(
                  item.release_date || item.first_air_date
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SimilarMovie;
