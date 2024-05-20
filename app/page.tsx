import Banner from "@/components/Root/Banner";
import Popular from "@/components/Root/Popular";
import TopRated from "@/components/Root/TopRated";
import BannerSkeleton from "@/components/Skeleton/BannerSkeleton";
import PopularSkelton from "@/components/Skeleton/PopularSkelton";
import TopRatedSkeleton from "@/components/Skeleton/TopRatedSkeleton";
import { Suspense } from "react";

const Home = () => {
  return (
    <main className='h-full w-full flex justify-center items-center'>
      <Suspense fallback={<BannerSkeleton />}>
        <Banner />
      </Suspense>
      <div className='flex justify-center items-center flex-col mb-10 mt-[200px]  '>
        <Suspense fallback={<PopularSkelton />}>
          <Popular />
        </Suspense>
        <Suspense fallback={<TopRatedSkeleton />}>
          <TopRated />
        </Suspense>
      </div>
    </main>
  );
};

export default Home;

// <main className='h-full w-full flex justify-center items-center'>
//   <BannerSkeleton />
//   <div className='flex justify-center items-center flex-col mb-10 mt-[200px]  '>
//     <PopularSkelton />
//     <TopRatedSkeleton />
//   </div>
// </main>
