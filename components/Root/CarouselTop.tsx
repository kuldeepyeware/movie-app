"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import { Movies } from "@/types";

const CarouselTop = ({ movies }: { movies: Movies[] }) => {
  const plugin = useRef(Autoplay({ delay: 4000 }));
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
      className='w-full lg:max-w-[1200px] md:max-w-[700px] max-w-sm absolute top-40'>
      <CarouselContent className='w-full h-full'>
        {movies?.slice(0, 7).map((movie: Movies, item: number) => (
          <CarouselItem
            key={item}
            className='md:basis-1/2 lg:basis-1/3 cursor-pointer'>
            <AspectRatio>
              <Link href={`${movie?.media_type}/${movie?.id}`}>
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.title ? movie.title : movie.name}
                  fill
                  priority
                  className='rounded-lg object-cover object-center'
                />
                <div className='absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t rounded-lg from-black via-black opacity-50'></div>
                <div className='text-white font-extrabold text-xl absolute bottom-0 w-full text-center text-wrap h-16 '>
                  <div> {movie.title ? movie.title : movie.name}</div>
                  <Badge>
                    {movie.media_type === "movie" ? "Movie" : "TV Show"}
                  </Badge>
                </div>
              </Link>
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselTop;
