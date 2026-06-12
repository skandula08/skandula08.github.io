import { useEffect, useState } from "react";

type ImageItem = {
  src: string;
  alt?: string;
};

type ProcessedImage = ImageItem & {
  width: number;
  height: number;
};

interface ImageGridProps {
  images: ImageItem[];
}

export default function ImageGrid({ images }: ImageGridProps) {
  const [processed, setProcessed] = useState<ProcessedImage[]>([]);

  useEffect(() => {
    Promise.all(
      images.map(
        (image) =>
          new Promise<ProcessedImage>((resolve) => {
            const img = new Image();

            img.onload = () => {
              resolve({
                ...image,
                width: img.naturalWidth,
                height: img.naturalHeight,
              });
            };

            img.src = image.src;
          })
      )
    ).then(setProcessed);
  }, [images]);

  const getSpanClass = (width: number, height: number) => {
    const ratio = width / height;

    if (ratio > 1.4) return "col-span-2 row-span-1"; // landscape
    if (ratio < 0.8) return "col-span-1 row-span-2"; // portrait

    return "col-span-1 row-span-1"; // square-ish
  };

  return (
    <div className="grid auto-rows-[150px] grid-cols-4 gap-4">
      {processed.map((image) => (
        <div
          key={image.src}
          className={`overflow-hidden rounded-xl ${getSpanClass(
            image.width,
            image.height
          )}`}
        >
          <img
            src={image.src}
            alt={image.alt ?? ""}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}