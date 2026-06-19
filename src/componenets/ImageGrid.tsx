import { useState } from "react";
import Lightbox from "./Lightbox";

interface ImageGridProps {
  images: string[];
}

export default function ImageGrid({ images }: ImageGridProps) {
  // const [processed, setProcessed] = useState<ProcessedImage[]>([]);
  const [selectedImage, setSelectedImage] = useState("");


  return (
    <div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
              {images.map((img) => (
                <>
                  <img
                    key={`${img}`}
                    src={`${img}`}
                    onClick={() => setSelectedImage(img)}
                    className="aspect-square w-full object-cover cursor-pointer"
                    alt=""
                  />
                </>
              ))}
            </div>
            <Lightbox selected={selectedImage} onClose={() => setSelectedImage("")} />
    </div>
  );
}