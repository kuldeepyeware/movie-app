import Image from "next/image";
import Link from "next/link";

const MovieCard = ({
  id,
  imageSrc,
  title,
  realiseDate,
  mediaType,
}: {
  id: string;
  imageSrc: string;
  title: String;
  realiseDate: string;
  mediaType: string;
}) => {
  const posterUrl =
    imageSrc === null
      ? `/no-poster.png`
      : `https://image.tmdb.org/t/p/original${imageSrc}`;
  return (
    <Link
      href={`/${mediaType}/${id}`}
      className='cursor-pointer flex justify-center items-center flex-col text-center z-50'>
      <div>
        <Image
          src={posterUrl}
          alt=''
          width={100}
          height={100}
          className='object-cover object-center rounded-lg h-[324px] w-[216px]'
        />
        <div className='mt-2'>
          <div className='text-white w-full text-nowrap truncate font-semibold max-w-[216px]'>
            {title}
          </div>
          <div className='text-gray-400'>
            {realiseDate === "undefined NaN, NaN" ? "Unavailable" : realiseDate}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
