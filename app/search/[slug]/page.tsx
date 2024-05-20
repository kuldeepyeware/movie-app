import SearchResult from "@/components/SearchResult";
import SearchSkelton from "@/components/Skeleton/SearchSkelton";
import { Suspense } from "react";

const SearchPage = async ({
  params,
}: {
  params: { slug: string; id: string };
}) => {
  const { slug } = params;

  return (
    <Suspense fallback={<SearchSkelton />}>
      <SearchResult slug={slug} />
    </Suspense>
  );
};

export default SearchPage;
