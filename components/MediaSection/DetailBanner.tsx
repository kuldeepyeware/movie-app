import Image from "next/image";
import { Badge } from "../ui/badge";
import Rating from "./Rating";
import { fetchDataFromApi } from "@/lib/api";
import { convertDate, formatMinutesToHours } from "@/lib/date";
import { Crew, Director, Genres, Writer } from "@/types";

const DetailBanner = async ({
  crew,
  mediaType,
  id,
}: {
  crew: Crew[];
  mediaType: string;
  id: string;
}) => {
  const data = await fetchDataFromApi(`/${mediaType}/${id}`);
  const director = crew?.filter((f: Crew) => f.job === "Director");
  const writer = crew?.filter(
    (f: Crew) =>
      f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );
  const posterUrl =
    data.poster_path === null
      ? `/no-poster.png`
      : `https://image.tmdb.org/t/p/original${data.poster_path}`;
  return (
    <div className='flex flex-col justify-center items-center gap-10 lg:flex-row'>
      <div className='w-full md:w-2/4  mr-2 z-50 flex justify-center items-center '>
        <Image
          src={posterUrl}
          alt={`${data?.name || data?.title}`}
          className='shadow-2xl shadow-primary rounded-xl'
          width={350}
          height={525}
        />
      </div>
      <div className='w-full z-50 '>
        <h1 className='text-white font-extrabold text-3xl'>
          {data?.name || data?.title}
        </h1>
        <p className=' text-gray-400 text-xl mt-2 italic'>{data?.tagline}</p>
        <div className='flex gap-2 mt-2'>
          {data.genres?.map((data: Genres, index: number) => (
            <Badge key={index} variant={"destructive"}>
              {data.name}
            </Badge>
          ))}
        </div>
        <div className='flex mt-5'>
          <Rating rating={Number(data?.vote_average.toFixed(1))} />
        </div>

        {data?.overview && (
          <div className='text-white mt-4'>
            <h2 className='text-2xl'>Overview</h2>
            <p className='mt-4 text-wrap text-justify'>{data.overview}</p>
          </div>
        )}
        <div className='divide-y mt-8'>
          <div className='text-white flex gap-6 text-lg py-4'>
            {data?.status && (
              <div>
                Status: <span className='text-gray-400'> {data.status}</span>
              </div>
            )}
            {data?.release_date && (
              <div>
                Release Date:{" "}
                <span className='text-gray-400'>
                  {convertDate(data?.release_date)}
                </span>
              </div>
            )}
            {data?.runtime && (
              <div>
                Runtime:{" "}
                <span className='text-gray-400'>
                  {formatMinutesToHours(data?.runtime)}
                </span>
              </div>
            )}
          </div>

          {director?.length && (
            <div className='text-white  flex gap-6 text-lg py-4'>
              <div>
                Director:{" "}
                <span className='text-gray-400'>
                  {director?.map((d: Director, i: number) => (
                    <span key={i}>
                      {d.name}
                      {director.length - 1 !== i && ", "}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          )}

          {writer?.length && (
            <div className='text-white flex gap-6 text-lg py-4'>
              <div>
                Writer:{" "}
                <span className='text-gray-400'>
                  {writer?.map((d: Writer, i: number) => (
                    <span key={i}>
                      {d.name}
                      {writer.length - 1 !== i && ", "}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailBanner;
