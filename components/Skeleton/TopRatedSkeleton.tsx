import { Skeleton } from "../ui/skeleton";

const TopRatedSkeleton = () => {
  return (
    <div className='mt-[56px]'>
      <Skeleton className='w-20 h-8 ml-6 md:ml-0' />
      <div className='flex gap-5 mt-5 justify-center flex-wrap'>
        <div className='flex flex-col gap-2'>
          <Skeleton className='w-[216px] h-[324px]' />
          <div className='flex justify-center flex-col items-center gap-2'>
            <Skeleton className=' w-40 h-4' />
            <Skeleton className=' w-10 h-2' />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <Skeleton className='w-[216px] h-[324px]' />
          <div className='flex justify-center flex-col items-center gap-2'>
            <Skeleton className=' w-40 h-4' />
            <Skeleton className=' w-10 h-2' />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <Skeleton className='w-[216px] h-[324px]' />
          <div className='flex justify-center flex-col items-center gap-2'>
            <Skeleton className=' w-40 h-4' />
            <Skeleton className=' w-10 h-2' />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <Skeleton className='w-[216px] h-[324px]' />
          <div className='flex justify-center flex-col items-center gap-2'>
            <Skeleton className=' w-40 h-4' />
            <Skeleton className=' w-10 h-2' />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <Skeleton className='w-[216px] h-[324px]' />
          <div className='flex justify-center flex-col items-center gap-2'>
            <Skeleton className=' w-40 h-4' />
            <Skeleton className=' w-10 h-2' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatedSkeleton;
