"use client"
import { useEffect, useState } from "react";
import CloudinaryImage from "../../components/ui/cloudinary-imaage";
import { SearchResult } from "./page";
import { ImageGrid } from "@/components/image-grid";

export default function FavoriteList({
    initailResources
}: {
    initailResources: SearchResult[]
    }) {
    const [resources, setResources] = useState(initailResources)
    
    useEffect(() => {
        setResources(initailResources);
    },[initailResources])
    return (
        <ImageGrid 
        images={resources}
        getImage={(imageData: SearchResult) => {
            return (
                <CloudinaryImage
                            key={imageData.public_id}
                            imagedata={imageData}
                            alt="this is demo image"
                            width="400"
                            height="300"
                        onUnHeart={(unHeartedResource: SearchResult) => {
                            setResources((currentResources) =>
                                currentResources.filter(
                                    (resource) => resource.public_id !== unHeartedResource.public_id
                                )
                            )
                        }}
                        />
            );
        }} 
        />            
    )
}