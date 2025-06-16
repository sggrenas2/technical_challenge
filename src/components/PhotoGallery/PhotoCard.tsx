import type { Image } from "../../types";
import type { FC } from "react";
import { ImageSkeleton } from "../skelletons/Image";
import { useState } from "react";
import clsx from "clsx";

interface PhotoCardProps extends Image {
  index: number;
}

export const PhotoCard: FC<PhotoCardProps> = ({
  id,
  index,
  author,
  width,
  height,
  download_url,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const isMobile: boolean = window.innerWidth <= 768;
  const IMAGE_SIZE = isMobile ? 500 : 1000;
  const classes = clsx(
    "flex flex-col items-center rounded-2xl p-[0.5rem] shadow-2xl min-h-0 h-9/10 max-h-[80dvh] overflow-hidden",
    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
  );

  const handleLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <figure className={classes}>
      <div
        className={clsx(
          "flex w-full grow items-center justify-center overflow-hidden rounded-lg object-cover md:w-2/3",
          isImageLoaded ? "block" : "hidden",
        )}
        style={{ maxHeight: "calc(80dvh - 2rem)" }}
      >
        <img
          src={`https://picsum.photos/id/${id}/${IMAGE_SIZE}.webp${index > 1000 ? "?grayscale" : ""}`}
          alt={"image by " + author}
          onLoad={handleLoad}
          className="object-fill md:rounded-lg"
        />
      </div>
      {!isImageLoaded && <ImageSkeleton />}
      <figcaption className="mt-2 flex flex-col items-center gap-5 text-center md:w-1/3">
        <h3>
          <span className="font-bold">Author:</span> {author}
        </h3>
        <p>
          <span className="font-bold">Original size:</span> {width}x{height}px
        </p>
        <a
          href={download_url}
          target="_blank"
          rel="noopener noreferrer"
          type="button"
          className="from-azure-500 via-azure-600 to-azure-700 focus:ring-azure-300 dark:focus:ring-azure-800 shadow-azure-500/50 dark:shadow-azure-800/80 me-2 mb-2 w-fit rounded-lg bg-gradient-to-r px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg hover:bg-gradient-to-br focus:ring-4 focus:outline-none dark:shadow-lg"
          download={`image-${id}-${author.replace(" ", "_")}.webp`}
        >
          Download Image
        </a>
      </figcaption>
    </figure>
  );
};
