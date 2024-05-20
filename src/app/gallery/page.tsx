import { CldImage } from "next-cloudinary";
import UploadButton from "./upload-button";
import cloudinary from 'cloudinary';
import CloudinaryImage from "../../components/ui/cloudinary-imaage";
import { ImageGrid } from "@/components/image-grid";
import GalleryGrid from "./gallery-grid";
import SearchBar from "./search-bar";


export type SearchResult = {
    public_id: string,
    tags: string[]
};
export default async function GalleryPage({ searchParams:{search} }:{searchParams:{search:string}} ) {
    const results = (await cloudinary.v2.search
        .expression(`resource_type:image ${search ? `AND tags=${search}`:""}`)
        .sort_by('created_at', 'desc')
        .with_field("tags")
        .max_results(10)
        .execute()) as { resources: SearchResult[] };
    
    return (
        <section className="flex flex-col gap-8">
            <div className="flex justify-between">
                <h1 className="text-4xl font-bold">Gallery</h1>
                <UploadButton />
            </div>
            <SearchBar initialSearch={search} />
            {
                results.resources.length >=1 ?
                <GalleryGrid images={results.resources} />
                :
                <h1>No Image Found</h1>    
            }
        </section>
    )
}