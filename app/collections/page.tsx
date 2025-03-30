"use client";

import dynamic from "next/dynamic";

const DynamicCollections = dynamic(
  () => import("@/components/collections/collections-gallery"),
  { ssr: false }
);

export default function CollectionsPage() {
  return <DynamicCollections />;
}
