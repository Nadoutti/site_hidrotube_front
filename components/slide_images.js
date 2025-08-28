"use client"

import api from "@/utils/api"
import { Checkbox } from "@/components/ui/checkbox"
import { Toggle } from "@/components/ui/toggle"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import {useState, useEffect} from "react"
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

export default function OtherImages() {

  const [fileData, setFileData] = useState(null);
  const [selecionado, setSelecionado] = useState(null);
  const [images, setImages] = useState([]);
  const [imgOn, setImgOn] = useState(false);
  const [imgId, setImgId] = useState("");
  const [ativo, setAtivo] = useState(null);




  // Funcoes aqui

useEffect(() => {
  const fetchSlides = async () => {
    try {
      const response = await api.get("/slides")
      setImages(response.data)
    } catch (err) {
      console.error("Erro ao buscar slides:", err)
    }
  }
  fetchSlides()
}, [])

  const handleFileChange = (e) => {
    setFileData(e.target.files[0])
  };


  const handleSubmit = (e) => {

    e.preventDefault();

    const formData = new FormData();
    formData.append('file', fileData)

    try {
      const response = api.post('/slides', formData)

    } catch (error) {
      console.log("Nao tem imagem ainda")

    }

  };

  const deleteImage = (id) => {

    try {

      api.delete(`/slides/${id}`)
    }

    catch (e) {
      console.error(errror)
    }

  }

  const toggleImage = (id) => {

    try {



      api.put(`/slides/${id}`)
      .then((response) => { 
          console.log(response.data) 
          console.log(id) })

      setImages(prevImages =>
        prevImages.map(img =>
          img.id === id ? { ...img, used: !img.used } : img
        )
      )


      setImgId("")


    } catch (error) {
      console.log("errou")

    }
  };



  return (
    <>
      <Card className="mt-20">
        <CardHeader>
          <CardTitle className="
            flex
            justify-between">
            <p className="text-xl">
              Todas Imagens

            </p>
            <div className="
              flex
              gap-5">


              {/* <Button */} {/*   variant="destructive" */}
              {/*   disabled={ativo !== true} */}
              {/*   onClick={() => { */}
              {/**/}
              {/*     setAtivo(null) */}
              {/*   }} */}
              {/*   className=" */}
              {/*   bg-red-500" */}
              {/* > */}
              {/*    Confirmar */}
              {/* </Button> */}

              <button
                onClick={() => setAtivo(true)}
                className={`
                  mr-8
                  rounded-lg px-4 py-2 border-2 duration-200 ease-in-out
                  ${ativo === true
                  ? "bg-red-500 text-white border-red-500" 
                  : "bg-white text-black border-red-500"}
                  `}
              >
                Apagar imagens
              </button>
            </div>

          </CardTitle>


        </CardHeader>

        <CardContent className="flex items-center justify-around max-w-300">

          <ul className="
            flex
            gap-10
            flex-wrap">
            {images.map((image) => (
              <li key={`${image.id}`}>
                <button onClick={() => {
                  if (ativo == true) {
                    deleteImage(image.id)
                  }
                  toggleImage(image.id)

                }} className="
                  rounded-lg
                  hover:-translate-y-2 duration-200 ease-in-out hover:shadow-black hover:shadow-xl/20">

                  {image.used ? 
                    <>

                      <Image className="rounded-tl-lg h-auto w-[250px] rounded-tr-lg " src={`${image.img_url}`} width={250} height={100} alt="foto" />
                      <h1 className="
                        text-center font-bold pt-2 bg-blue-50 rounded-bl-lg rounded-br-lg ">Usada</h1>
                    </>

                    :

                    <Image className="rounded-lg h-auto w-[250px] " src={`${image.img_url}`} width={250} height={0} alt="foto" />


                  }

                </button>


              </li>

            ))}



            <li>
              <Dialog>
                <DialogTrigger asChild>

                  <Button variant="outline" className=" w-63 h-33 text-[18px] text-center text-xl">Adicionar Imagem</Button>


                </DialogTrigger>
                <DialogContent className="
                  bg-white">
                  <DialogTitle className="text-3xl">Adicionar uma imagem</DialogTitle>

                  <DialogDescription className="
                    text-md">
                    Adicione ou arraste um arquivo para adicionar a imagem
                  </DialogDescription>
                  <div>
                    <form  onSubmit={handleSubmit}>
                      <div  className="
                        flex
                        flex-col
                        my-8">

                        <label htmlFor="img_upload" className="
                          mb-4">
                          Adicione ou arraste um arquivo

                        </label>
                        <Input id="img_upload" name="img_upload" type="file" onChange={handleFileChange} multiple className=" border-dashed border-[3px] rounded-lg h-30 text-center"/>


                      </div>

                      <div className="
                        flex
                        flex-row-reverse">
                        <Button type="submit">Salvar</Button>
                      </div>




                    </form>

                  </div>

                </DialogContent>

              </Dialog>

            </li>

          </ul>


        </CardContent>

      </Card>


    </>




  )

}
