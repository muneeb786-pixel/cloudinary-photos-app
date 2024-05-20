"use server"

import cloudinary from 'cloudinary';
import { revalidatePath } from 'next/cache';

export default async function setAsFavoriteActions(productId: string, isfavorite: boolean) {
    if (isfavorite) {
        await cloudinary.v2.uploader.add_tag('favorite',[productId])
    } else {
        await cloudinary.v2.uploader.remove_tag('favorite',[productId])
    }
}