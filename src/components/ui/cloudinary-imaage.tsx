"use client"
import Heart from "@/components/icons/heart";
import { CldImage } from "next-cloudinary";
import cloudinary from 'cloudinary';
import setAsFavoriteActions from "../../app/gallery/actions";
import { useState, useTransition } from "react";
import { SearchResult } from "../../app/gallery/page";
import FullHeart from "@/components/icons/full-heart";
import ImageMenu from "../image-menu";

export default function CloudinaryImage(
    props: any & {
        imageDate: SearchResult,
        onUnheart?: (unHeartedResource: SearchResult) => void
    }
) {
    const [transition, startTransition] = useTransition();
    const { imageData , onUnHeart } = props
    const [isFavorited, setIsFavorited] = useState(props.imagedata.tags.includes('favorite'));
    return (
        <div className="relative">
            <CldImage
                {...props}
                src={props.imagedata.public_id}
            />
            {
                isFavorited ?
                <FullHeart
                    onClick={() => {
                            onUnHeart?.(props.imagedata);        
                            setIsFavorited(false);
                    startTransition(() => {
                        setAsFavoriteActions(props.imagedata.public_id,false)
                    })
                }}
                className="absolute top-2 left-2 text-red-500"
                />
                :

                <Heart
                    onClick={() => {
                    setIsFavorited(true)
                    startTransition(() => {
                        setAsFavoriteActions(props.imagedata.public_id,true)
                    })
                }}
                className="absolute top-2 left-2"
                />
            }
            <ImageMenu image={props.imagedata} />
        </div>
    )

}