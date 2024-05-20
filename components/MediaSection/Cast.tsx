import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CastType } from "@/types";
import { User } from "lucide-react";

const Cast = async ({ data }: { data: CastType[] }) => {
  return (
    <div className='z-50'>
      {data?.length >= 1 && (
        <>
          <h2 className='text-white text-2xl mt-5'>Top Cast</h2>
          <div className='flex  overflow-x-auto gap-5 mt-4'>
            {data?.map((model: CastType, index: number) => (
              <div key={index}>
                <Avatar className='w-[150px] h-[150px] '>
                  <AvatarImage
                    src={`https://image.tmdb.org/t/p/original${model.profile_path}`}
                    className=' object-cover object-center'
                  />
                  <AvatarFallback className='bg-blue-400'>
                    <User className='w-[120px] h-[120px]' />
                  </AvatarFallback>
                </Avatar>
                <div className='text-white text-center mt-2 '>
                  <div>{model.name}</div>
                  <div className='text-gray-400'> {model.character}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Cast;
