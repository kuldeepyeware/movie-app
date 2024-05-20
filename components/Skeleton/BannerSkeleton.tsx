import { Skeleton } from "../ui/skeleton";

const BannerSkeleton = () => {
  return (
    <div className='w-full lg:max-w-[1200px] md:max-w-[700px] max-w-sm absolute top-40'>
      <div className='flex gap-5'>
        <Skeleton className='h-[384px] w-[384px] rounded-lg ' />
        <Skeleton className='h-[384px] w-[384px] rounded-lg hidden md:block ' />
        <Skeleton className='h-[384px] w-[384px] rounded-lg hidden md:block ' />
      </div>
    </div>
  );
};

export default BannerSkeleton;
