import { CldImage } from "next-cloudinary";
import cloudinary from 'cloudinary';
import AlbumGrid from "./album-grid";
import { SearchResult } from "@/app/gallery/page";
import { ForceRefresh } from "@/components/force-refresh";


export default async function GalleryPage({ params: {albumName}}:{ params:{ albumName: string}}) {
    const results = (await cloudinary.v2.search
        .expression(`resource_type:image AND folder=${albumName}`)
        .sort_by('created_at', 'desc')
        .with_field("tags")
        .max_results(10)
        .execute()) as { resources: SearchResult[] };
    return (
        <section className="flex flex-col gap-8">
            <ForceRefresh/>
            <div className="flex justify-between">
                <h1 className="text-4xl font-bold">Album {albumName}</h1>
            </div>
           <AlbumGrid images={results.resources}/>
        </section>
    )
}