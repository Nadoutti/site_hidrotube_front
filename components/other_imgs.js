"use client"
import Image from "next/image"
import FileUploader from "@/components/file_uploader.js"
import {useState} from "react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function OtherImages() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card className="mt-20">
        <CardHeader>
          <CardTitle>
            <span className="text-xl">
              Todas Imagens

            </span>

          </CardTitle>


        </CardHeader>

        <CardContent className="flex items-center justify-around max-w-300">

          <ul className="
            flex
            gap-10
            flex-wrap">
            <li>

              <Image className="rounded-md" src="/hidrotube.png" width={250} height={100} alt="foto" />
            </li>

            <li>
              <Image className="rounded-md" src="/hidrotube.png" width={250} height={100} alt="foto" />
            </li>

            <li>
              <Image className="rounded-md" src="/hidrotube.png" width={250} height={100} alt="foto" />
            </li>

            <li>
              <Button onClick={() => setOpen(true)} variant="outline" className=" w-63 h-33 text-[18px] text-center">Adicionar Imagem</Button>

            </li>

          </ul>


        </CardContent>

      </Card>

      <Sheet  open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="bg-white">
          <SheetHeader>
            <SheetTitle className="text-[18px]">Adicionar Imagem</SheetTitle>
            <SheetDescription className="text-[16px]">
              Arraste ou procure uma imagem para enviar.            </SheetDescription>
          </SheetHeader>

          <div className="my-4">
          
            <FileUploader/>
          </div>

          <SheetFooter className="flex justify-end gap-2">
            <SheetClose asChild>
              <button className="btn">Close</button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>

      </Sheet>
    </>




  )

}
