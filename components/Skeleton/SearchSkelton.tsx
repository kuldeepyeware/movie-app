import { Skeleton } from "../ui/skeleton";

const SearchSkelton = () => {
  return (
    <div className='mx-auto px-[10%] pt-[120px] h-full'>
      <h2 className='text-2xl'>
        <Skeleton className='w-40 h-5' />
      </h2>
      <div className='mt-7 flex flex-wrap gap-4 justify-center items-center  pb-10'>
        <Skeleton className='w-[216px] h-[324px]' />
        <Skeleton className='w-[216px] h-[324px]' />
        <Skeleton className='w-[216px] h-[324px]' />
        <Skeleton className='w-[216px] h-[324px]' />
        <Skeleton className='w-[216px] h-[324px]' />
        <Skeleton className='w-[216px] h-[324px]' />
        <Skeleton className='w-[216px] h-[324px]' />
        <Skeleton className='w-[216px] h-[324px]' />
        <Skeleton className='w-[216px] h-[324px]' />
        <Skeleton className='w-[216px] h-[324px]' />
      </div>
    </div>
  );
};

export default SearchSkelton;
