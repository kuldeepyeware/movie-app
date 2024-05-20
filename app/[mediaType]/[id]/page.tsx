import Cast from "@/components/MediaSection/Cast";
import DetailBanner from "@/components/MediaSection/DetailBanner";
import Recommendation from "@/components/MediaSection/Recommendation";
import SimilarMovie from "@/components/MediaSection/SimilarMovie";
import CastSkeleton from "@/components/Skeleton/CastSkeleton";
import DetailBannerSkeleton from "@/components/Skeleton/DetailBannerSkeleton";
import SimilarSkelton from "@/components/Skeleton/SimilarSkelton";

import { fetchDataFromApi } from "@/lib/api";
import { Suspense } from "react";

const Details = async ({
  params,
}: {
  params: { mediaType: string; id: string };
}) => {
  const { mediaType, id } = params;
  const data = await Promise.all([
    fetchDataFromApi(`/${mediaType}/${id}/credits`),
    fetchDataFromApi(`/${mediaType}/${id}`),
  ]);

  return (
    <div className='h-full w-full mx-auto px-[10%] pt-[120px] pb-10'>
      <Suspense fallback={<DetailBannerSkeleton />}>
        <DetailBanner crew={data[0]?.crew} mediaType={mediaType} id={id} />
      </Suspense>
      <Suspense fallback={<CastSkeleton />}>
        <Cast data={data[0]?.cast} />
      </Suspense>
      <Suspense fallback={<SimilarSkelton />}>
        <SimilarMovie mediaType={mediaType} id={id} />
      </Suspense>
      <Suspense fallback={<SimilarSkelton />}>
        <Recommendation mediaType={mediaType} id={id} />
      </Suspense>
    </div>
  );
};

export default Details;
