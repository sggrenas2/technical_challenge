import { Suspense, use } from "react";
import type { FC } from "react";
import type { Images } from "../../types";
import { Loader } from "../../components/Loader";
import { PhotoGallery } from "../../components/PhotoGallery";
import { getItems } from "../../services";

interface InnerViewProps {
  photosPromise: Promise<Images>;
}

export const InnerView: FC<InnerViewProps> = ({ photosPromise }) => {
  const photos = use(photosPromise);

  return (
    <>
      <PhotoGallery photos={photos} />
    </>
  );
};

export const Home: FC = () => {
  const photoPromise = getItems();

  return (
    <>
      <Suspense
        fallback={
          <div style={{ height: "calc(100dvh - 1.5rem)" }}>
            <Loader />
          </div>
        }
      >
        <InnerView photosPromise={photoPromise} />
      </Suspense>
    </>
  );
};
