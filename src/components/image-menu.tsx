import { FolderPlus, PencilIcon } from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,

    DropdownMenuShortcut,

    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Menu } from "./icons/menu"
import { AddToALbumDialoge } from "./add-to-album-dialog"
import { SearchResult } from "@/app/gallery/page"
import { useState } from "react"
import Link from "next/link"
  
export default function ImageMenu({ image }: { image: SearchResult }) {
  const [open, setOpen] = useState(false);
    return (
      <div className="absolute top-2 right-2">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="focus:outline-none p-0 hover:bg-slate-500 hover:bg-opacity-40 w-8 h-8 bg-slate-400 bg-opacity-30">
            <Menu/>
          </Button>
        </DropdownMenuTrigger>
          <DropdownMenuContent className="w-36">
            <DropdownMenuItem asChild>
              <AddToALbumDialoge image={image} onClose={()=>setOpen(false)} />
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/edit?publicId=${encodeURIComponent(image.public_id)}`} className=" cursor-pointer flex items-start pl-4">
              <PencilIcon className="w-4 h-4 mr-3"/>
                <span>Edit</span>
              </Link>
            </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  }
  