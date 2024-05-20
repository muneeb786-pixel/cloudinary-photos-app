"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchBar({ initialSearch }:{initialSearch : string}) {
    const [tagName, setTagName] = useState(initialSearch ?? "");
    const router = useRouter();
    useEffect(() => {
        setTagName(initialSearch)
    },[initialSearch])

    return (
        <>
        <div className="flex">
                <form className="w-full"
                    onSubmit={(e) => {
                        e.preventDefault();
                        router.replace(`/gallery?search=${tagName}`)
                    }}
                >
                <Label htmlFor="tag" className="text-right">
                    Search By Tag:
                    </Label>
                    <div className="flex gap-2">
                        <Input
                        onChange={e => setTagName(e.currentTarget.value)}
                        id="tag" value={tagName} className="w-full" />
                        <Button type="submit">Search</Button>
                    </div>
            </form>
        </div>
        </>
    )
}