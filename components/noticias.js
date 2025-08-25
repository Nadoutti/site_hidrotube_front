"use client"
import { Label } from "@/components/ui/label"
import api from "@/utils/api.js"
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
import { useState, useEffect } from "react"
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

  const [noticias, setNoticias] = useState([]);
  const [file, setFile] = useState(null);
  const [form, setForm] = useState(
    {
    title: "",
    text: "",
    }
  )


  useEffect(() => {
    api.get("/noticias").then((response) => {
      setNoticia(response.data)
      console.log(response.data)

    })

  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.val})
  }


  const handleSubmit = (e) => {

    e.preventDefault();

    const formData = new FormData();
    formData.append('title', form.title) // ここ、デタを送信する
    formData.append('text', form.text)
    formData.append('file', file)

    try {
      const response = api.post('/noticias/upload', formData)

    } catch (error) {
      console.log("これが悪い")

    }

  };

  const handleEditSubmit = (e, id) => {

    e.preventDefault();

    const formData = new FormData();
    formData.append('title', form.title) // ここ、デタを送信する
    formData.append('text', form.text)
    formData.append('file', file)

    try {
      const response = api.post(`/noticias/${id}`, formData)

    } catch (error) {
      console.log("これが悪い")

    }

  };


  const noticiass = [
    {
      "id": 0,
      "titulo": "tititi",
      "texto": "tetete"
    },
{
      "id": 1,
      "titulo": "tititi",
      "texto": "tetete"
    },
{
      "id": 2,
      "titulo": "tititi",
      "texto": "tetete"
    },
  ]


  return (

    <Card className="my-15 max-w-350 min-w-200">
      <CardHeader>
        <CardTitle className="text-xl">Todas as noticias</CardTitle>
      </CardHeader>

      <CardContent>
        <ul className="flex gap-10 flex-wrap">
          {noticiass.map((item) => (
            <li key={item.id}>
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    onClick={() => setNoticias(item)}
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

                <DialogContent className="bg-white min-w-250">

                  <DialogHeader>

                    <DialogTitle className="
                      text-3xl">Editar Noticia</DialogTitle>

                    <DialogDescription className="
                      text-md">
                      Escreva nos campos e salve para editar a noticia
                    </DialogDescription>
                  </DialogHeader>

                  {/* Blocos das noticias aqui */}

                <div className="">
                  <form className="flex" onSubmit={handleSubmit}>
                    <div className="
                      w-1/2
                      px-5
                      py-5">

                      <Label htmlFor="title" className="
                        text-2xl
                        mb-5">Titulo</Label>
                      <Input id="title" defaultValue={item.titulo} name="title" type="text"  className="
                        min-h-15
                        max-h-50 !text-lg"/>

                      <Label htmlFor="text" className="
                        text-2xl
                        my-5">Texto</Label>
                      <Input id="text" name="text" type="text" defaultValue={item.texto} className="
                        min-h-15
                        max-h-50 !text-lg "/>
                    </div>

                    <div className="
                      border-l-2
                      w-1/2
                      px-5
                      py-5
                      ">

                      <Label htmlFor="image" className="
                        text-2xl
                        mb-5">Imagem</Label>
                      <Input id="image" onChange={(e) => setFile(e.target.files[0])} name="image" type="file" className="
                        min-h-15
                        max-h-50 !text-lg"/>

                      <div className="
                        w-full
                        h-1/2
                        flex
                        justify-end
                        ">
                        <Button className="
                          mt-auto
                          w-40">Salvar</Button>
                      </div>
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
                bg-white min-w-250">
                <DialogHeader className="mb-5">

                  <DialogTitle className="text-3xl">Adicionar uma nova noticia</DialogTitle>

                  <DialogDescription className="
                    text-md">
                    Escreva nos campos e salve para adicionar a noticia
                  </DialogDescription>
                </DialogHeader>
                <div className="">
                  <form className="flex" onSubmit={handleSubmit}>
                    <div className="
                      w-1/2
                      px-5
                      py-5">

                      <Label htmlFor="title" className="
                        text-2xl
                        mb-5">Titulo</Label>
                      <Input id="title" name="title" type="text"  className="
                        min-h-15
                        max-h-50 !text-lg"/>

                      <Label htmlFor="text" className="
                        text-2xl
                        my-5">Texto</Label>
                      <Input id="text" name="text" type="text" className="
                        min-h-15
                        max-h-50 !text-lg "/>
                    </div>

                    <div className="
                      border-l-2
                      w-1/2
                      px-5
                      py-5
                      ">

                      <Label htmlFor="image" className="
                        text-2xl
                        mb-5">Imagem</Label>
                      <Input id="image" onChange={(e) => setFile(e.target.files[0])} name="image" type="file" className="
                        min-h-15
                        max-h-50 !text-lg"/>

                      <div className="
                        w-full
                        h-1/2
                        flex
                        justify-end
                        ">
                        <Button className="
                          mt-auto
                          w-40">Salvar</Button>
                      </div>
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

