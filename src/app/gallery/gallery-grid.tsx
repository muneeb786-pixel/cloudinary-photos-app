"use client"

import { ImageGrid } from "@/components/image-grid";
import CloudinaryImage from "../../components/ui/cloudinary-imaage";
import { SearchResult } from "./page";

export default function GalleryGrid({ images }: {images: SearchResult[]}){
    return (
        <ImageGrid
        images={images}
        getImage={(imageData: SearchResult) => {
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