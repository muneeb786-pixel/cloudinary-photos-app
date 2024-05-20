"use client"

import { SearchResult } from "@/app/gallery/page";
import { ImageGrid } from "@/components/image-grid";
import CloudinaryImage from "@/components/ui/cloudinary-imaage";

export default function AlbumGrid({ images }: {images: SearchResult[]}){
    return (
        <ImageGrid
        images={images}
        getImage={(imageData: SearchResult ) => {
            return (
                <CloudinaryImage
                    key={imageData.public_id}
                    imagedata={imageData}
                    alt="this is demo image"
                    width="400"
                    height="300"
                />
            );
        }}
        />
    )
}