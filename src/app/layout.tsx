import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import Heart from '@/components/icons/heart'
import Link from 'next/link'
import cloudinary from "cloudinary";
import { Folder } from './album/page'
import { ArrowRight } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


async function SideMenu() {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[]
  };
  return (
    <div className='pb-12 w-1/5'>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/gallery">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
                  Gallery
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href='/album'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
                </svg>
                Albums
              </Link>
            </Button>
            {folders.map(folder => {
              return (
                <Button variant="ghost" key={folder.path} className="w-full justify-start" asChild>
                  <Link href={`/album/${folder.name}`} className='pl-8'>
                    <ArrowRight className='w-5 h-3'/>
                    {folder.name}
                  </Link>
                </Button>
              )
            })}
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href='/favorites'>
                <Heart className='mr-2'/>
                  Favorites
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
      <div className="hidden flex-col md:flex">
          <div className="border-b">
          <div className="flex h-16 items-center px-4 container">
            PHOTOS APP
            <div className="ml-auto flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>MN</AvatarFallback>
            </Avatar>
            </div> 
          </div>
          </div>
        </div>
        <div className='flex'>
        <SideMenu />
        <div className='w-full px-4 pt-14'>
        {children}
        </div>
        </div>
      </body>
    </html>
  )
}
