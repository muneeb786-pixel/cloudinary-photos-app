"use client"
import Image from 'next/image'
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export type ImageUpload = {
  event: 'success',
  info: {
    public_id: string
  }
}

export default function Home() {
  const [imageId, setImageId] = useState("samples/smile");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        onUpload={(result: ImageUpload) => {
          setImageId(result.info.public_id)
        }}
        uploadPreset="pl4ocy3s"
      />
      {
        imageId && 
        <CldImage
          width="400"
          height="300"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      }
    </main>
  )
}
