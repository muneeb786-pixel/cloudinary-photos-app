import CloudinaryImage from "@/components/ui/cloudinary-imaage";
import { SearchResult } from "@/app/gallery/page";
import { ReactNode } from "react";

const MAX_COLUMN = 4;

export function ImageGrid({ images,getImage }: { images: SearchResult[], getImage:(imageData: SearchResult)=>ReactNode }) {
    function getColumns(colIndex: number) {
        return images.filter((resources, index)=> index % MAX_COLUMN === colIndex)
    }
        
    return (
        <div className="grid grid-cols-4 gap-2">
            {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
                (column, index) => (
                    <div key={index} className="flex flex-col gap-4">
                        {column.map(getImage)}
                    </div>
                )
            )

            }
        </div>
    )
}