import { CldImage } from "next-cloudinary";
import cloudinary from 'cloudinary';
import CloudinaryImage from "../../components/ui/cloudinary-imaage";
import{ ForceRefresh} from "@/components/force-refresh";
import FavoriteList from "./favorite-list";


export type SearchResult = {
    public_id: string,
    tags: string[]
};
export default async function FavoritePage() {
    const results = (await cloudinary.v2.search
        .expression('resource_type:image AND tags=favorite')
        .sort_by('created_at', 'desc')
        .with_field("tags")
        .max_results(10)
        .execute()) as { resources: SearchResult[] };
    return (
        <section>
            <ForceRefresh />
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Favorite Images</h1>
                </div>
                <FavoriteList initailResources={results.resources} />
            </div>
        </section>
    );
}