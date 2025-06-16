import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { PhotoCard } from "./PhotoCard";
import type { Image } from "../../types";
import type { FC } from "react";
import type { VirtualItem } from "@tanstack/react-virtual";

interface PhotoGalleryProps {
  photos: Image[];
}
export const PhotoGallery: FC<PhotoGalleryProps> = ({ photos }) => {
  const PhotoContainerRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: photos.length,
    getScrollElement: () => PhotoContainerRef.current,
    estimateSize: () => 200, // Assuming each photo has an estimated height of 200px
    overscan: 5, // Number of items to render outside the visible area
  });

  const virtualItems = virtualizer.getVirtualItems();

  return (
    <section ref={PhotoContainerRef} className="h-[90dvh] w-full overflow-auto">
      <div
        className="relative mx-auto max-w-10/12 gap-2"
        style={{
          height: `${virtualizer.getTotalSize()}px`,
        }}
      >
        {virtualItems.map((virtualItem: VirtualItem) => {
          const photo = photos[virtualItem.index];
          if (!photo) return null; // Handle case where photo might not exist
          return (
            <div
              className="absolute w-full py-6"
              key={virtualItem.key}
              data-index={virtualItem.index}
              ref={virtualizer.measureElement}
              style={{
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              <PhotoCard index={virtualItem.index} {...photo} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
