"use client";

import { Skeleton } from "../ui/skeleton";

export default function Skelletons({ isLoading }: { isLoading: boolean }) {
  return (
    isLoading && (
      <div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Skeleton className="w-full h-[250px] rounded" />
          <Skeleton className="w-full h-[250px] rounded" />
          <Skeleton className="w-full h-[250px] rounded" />
          <Skeleton className="w-full h-[250px] rounded" />
          <Skeleton className="w-full h-[250px] rounded" />
          <Skeleton className="w-full h-[250px] rounded" />
          <Skeleton className="w-full h-[250px] rounded" />
          <Skeleton className="w-full h-[250px] rounded" />
        </div>
      </div>
    )
  );
}
