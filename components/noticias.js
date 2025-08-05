"use client"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import Image from "next/image"

import {
  Card,
  CardContent,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Noticias() {

  const [noticia, setNoticia] = useState(null);
  
  const noticias = [
    {
    "id": 0,
    "titulo": "noticia teste",
    "texto": "texto da noticia"
    },
    {
    "id": 1,
    "titulo": "noticia teste 2",
    "texto": "texto da noticia 2"
    },
  ]

  return (
    
    <Card className="my-15 max-w-350 min-w-200">
      <CardHeader>
        <CardTitle className="text-xl">Todas as noticias</CardTitle>
      </CardHeader>

      <CardContent>
        <ul className="flex gap-10 flex-wrap">
          {noticias.map((item) => (
            <li key={item.id}>
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    onClick={() => setNoticia(item)}
                  >
                    <Card className="relative w-60 h-40 overflow-hidden hover:shadow-black hover:shadow-xl/20 hover:-translate-y-1 duration-300 ease-in-out">
                      <div className="absolute inset-0 bg-[url(/hidrotube.png)] bg-cover bg-center brightness-55 z-0" />
                      <div className="relative z-10">
                        <CardHeader>
                          <CardTitle className="text-center pt-10 text-2xl text-white font-bold">
                            {item.titulo}
                          </CardTitle>
                        </CardHeader>
                      </div>
                    </Card>
                  </button>
                </DialogTrigger>

                <DialogContent className="bg-white">
                  
                  <DialogHeader>

                    <DialogTitle className="
                      text-3xl">Editar Noticia</DialogTitle>

                    <DialogDescription className="
                      text-md">
                      Escreva nos campos e salve para editar a noticia
                    </DialogDescription>
                  </DialogHeader>

                  {/* Blocos das noticias aqui */}

                  <div>
                    <form>
                      <Label htmlFor="title" className="
                        text-2xl
                        my-5">Titulo</Label>
                      <Input id="title" type="text" defaultValue={item.titulo} className="
                        min-h-20
                        max-h-50 !text-lg"/>

                      <Label htmlFor="text" className="
                        text-2xl
                        my-5">Texto</Label>
                      <Input id="text" type="text" defaultValue={item.texto} className="
                        min-h-20
                        max-h-50 !text-lg"/>

                      <Label htmlFor="image" className="
                        text-2xl
                        my-5">Imagem</Label>
                      <Input id="image" type="file" className="
                        min-h-20
                        max-h-50 !text-lg"/>

                      <div className="
                        w-full
                        flex
                        justify-end">
                        <Button className="
                          mt-10">Salvar</Button>
                      </div>

                    </form>

                  </div>

                </DialogContent>
              </Dialog>
            </li>
            
          ))}
          <li>
            <Dialog>
              <DialogTrigger asChild>
                
                <Button variant="outline" className=" w-63 h-40 text-[18px] text-center">Adicionar Noticia</Button>


              </DialogTrigger>
              <DialogContent className="
                bg-white">
                <DialogTitle className="text-3xl">Adicionar uma nova noticia</DialogTitle>

                <DialogDescription className="
                  text-md">
                  Escreva nos campos e salve para adicionar a noticia
                </DialogDescription>
                <div>
                  <form>
                    <Label htmlFor="title" className="
                      text-2xl
                      my-5">Titulo</Label>
                    <Input id="title" type="text"  className="
                      min-h-20
                      max-h-50 !text-lg"/>

                    <Label htmlFor="text" className="
                      text-2xl
                      my-5">Texto</Label>
                    <Input id="text" type="text" className="
                      min-h-20
                      max-h-50 !text-lg"/>

                    <Label htmlFor="image" className="
                      text-2xl
                      my-5">Imagem</Label>
                    <Input id="image" type="file" className="
                      min-h-20
                      max-h-50 !text-lg"/>

                    <div className="
                      w-full
                      flex
                      justify-end">
                      <Button className="
                        mt-10">Salvar</Button>
                    </div>

                  </form>

                </div>

              </DialogContent>

            </Dialog>

          </li>
        </ul>
      </CardContent>
    </Card>





  )

}

