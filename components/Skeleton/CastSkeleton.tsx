import { Skeleton } from "../ui/skeleton";

const CastSkeleton = () => {
  return (
    <div className='z-50 relative'>
      <h2 className='mt-10'>
        <Skeleton className='w-20 h-8  md:ml-2' />
      </h2>
      <div className='flex overflow-x-auto gap-5 mt-4'>
        <div className='w-[150px] h-[150px] '>
          <Skeleton className='w-full h-full rounded-full' />
        </div>
        <div className='w-[150px] h-[150px] '>
          <Skeleton className='w-full h-full rounded-full' />
        </div>
        <div className='w-[150px] h-[150px] '>
          <Skeleton className='w-full h-full rounded-full' />
        </div>
        <div className='w-[150px] h-[150px] hidden md:block '>
          <Skeleton className='w-full h-full rounded-full' />
        </div>
        <div className='w-[150px] h-[150px] hidden md:block '>
          <Skeleton className='w-full h-full rounded-full' />
        </div>
        <div className='w-[150px] h-[150px] hidden md:block '>
          <Skeleton className='w-full h-full rounded-full' />
        </div>
        <div className='w-[150px] h-[150px] hidden md:block '>
          <Skeleton className='w-full h-full rounded-full' />
        </div>
      </div>
    </div>
  );
};

export default CastSkeleton;
