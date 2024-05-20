import MovieCard from "@/components/Root/MovieCard";
import { fetchDataFromApi } from "@/lib/api";
import { convertDate } from "@/lib/date";
import { Movies } from "@/types";

const SearchResult = async ({ slug }: { slug: string }) => {
  const data = await fetchDataFromApi(`/search/multi?query=${slug}`);
  return (
    <div className='mx-auto px-[10%] pt-[120px] h-full text-white'>
      <h2 className='text-2xl'>{`Search results of '${slug}'`}</h2>
      <div className='mt-7 flex flex-wrap gap-4 justify-center items-center  pb-10'>
        {data?.results?.length > 0 ? (
          <>
            {data?.results.map((item: Movies, index: number) => {
              if (item.media_type === "person") return;
              return (
                <MovieCard
                  key={index}
                  id={item.id}
                  imageSrc={item.poster_path}
                  title={item.title || item.name}
                  realiseDate={convertDate(
                    item.release_date || item.first_air_date
                  )}
                  mediaType={item.media_type}
                />
              );
            })}
          </>
        ) : (
          <span className='text-white text-2xl font-bold'>
            Sorry, Results not found!
          </span>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
