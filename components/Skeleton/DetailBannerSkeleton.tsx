import { Skeleton } from "../ui/skeleton";

const DetailBannerSkeleton = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-10 lg:flex-row'>
      <div className='w-full md:w-2/4  mr-2 z-50 flex justify-center items-center '>
        <Skeleton className='w-[350px] h-[525px]' />
      </div>
      <div className='w-full z-50 '>
        <h1 className=''>
          <Skeleton className=' w-4/6 h-8' />
        </h1>
        <p className=' mt-2 '>
          <Skeleton className=' w-2/4 h-8' />
        </p>
        <div className=' mt-2'>
          <Skeleton className='w-40 h-5' />
        </div>
        <div className='mt-5'>
          <Skeleton className=' rounded-full w-20 h-20 ' />
        </div>

        <div className='mt-4'>
          <p className='mt-4 '>
            <Skeleton className=' w-full h-4 ' />
            <Skeleton className=' w-full h-4 mt-2' />
            <Skeleton className=' w-full h-4 mt-2' />
          </p>
        </div>

        <div className=' mt-8'>
          <Skeleton className=' w-3/4 h-5' />

          <div className='flex gap-6  py-4'>
            <Skeleton className=' w-2/3 h-5' />
          </div>
          <div className='flex gap-6  py-4'>
            <Skeleton className=' w-1/2 h-5' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBannerSkeleton;
