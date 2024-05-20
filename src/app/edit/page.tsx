"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { CldImage } from "next-cloudinary"
import { useState } from "react"

export default function EditPage({ searchParams: { publicId } }: { searchParams: { publicId: string } }) {
    const [transformation, setTransformation] = useState<undefined | 'generative-fill' | 'blur' | 'grayscale' | 'pixelate' | 'background-remove'>();
    const [pendingPrompt, setPendingPrompt] = useState("");
    const [prompt, setPrompt] = useState(pendingPrompt);
    return (
        <section className="flex flex-col gap-8">
        <div className="flex justify-between">
                <h1 className="text-4xl font-bold">Edit { publicId }</h1>
            </div>
            <div className="flex flex-row gap-2">
                <Button variant="ghost" onClick={() => setTransformation(undefined)}>Clear All</Button>
                <div className="flex flex-col gap-3">
                    <Button onClick={() => {
                        setPrompt(pendingPrompt);
                        setTransformation('generative-fill')
                    }}>Generative Fill</Button>
                    <div>
                        <Input id="prompt" value={pendingPrompt} onChange={e=>setPendingPrompt(e.currentTarget.value)} placeholder="Enter Prompts..." />
                    </div>
                </div>
                <Button onClick={()=>setTransformation('blur')}>Blur Image</Button>
                <Button onClick={()=>setTransformation('grayscale')}>Convert to Gray</Button>
                <Button onClick={()=>setTransformation('pixelate')}>Pixelate</Button>
                <Button onClick={()=>setTransformation('background-remove')}>Remove Background</Button>
            </div>
            <div className="grid grid-cols-2 grid-flow-row">
            <CldImage src={publicId} width={500} height={400} alt="some image " />
            {
                transformation == 'generative-fill' && 
                    <CldImage
                        src={publicId}
                        width={500}
                        height={400}
                        alt="some image"
                        crop="pad" // Returns the given size with padding
                        fillBackground={{ 
                            prompt,
                         }} // Uses AI to extend image
                    />
            }
            {
                transformation == 'blur' && 
                    <CldImage
                        src={publicId}
                        width={400}
                        height={300}
                        alt="some image"
                        blur="1200"
                    />
                }
            {
                transformation == 'grayscale' && 
                    <CldImage
                        src={publicId}
                        width={400}
                        height={300}
                        alt="some image"
                        grayscale
                    />
            }
            {
                transformation == 'pixelate' && 
                    <CldImage
                        src={publicId}
                        width={400}
                        height={300}
                        alt="some image"
                        pixelate
                    />
            }
            {
                transformation == 'background-remove' && 
                    <CldImage
                        src={publicId}
                        width={400}
                        height={300}
                        alt="some image"
                        removeBackground
                    />
            }
            </div>
    </section>
    )
}