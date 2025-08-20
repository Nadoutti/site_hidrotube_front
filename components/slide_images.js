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


  const [fileData, setFileData] = useState(null)
  const [images, setImages] = useState([]);
  const [imgOn, setImgOn] = useState(false);
  const [imgId, setImgId] = useState("");

  


  // Funcoes aqui

  useEffect(() => {
    api.get("/slides").then((response) => {
      setImages(response.data)
      console.log(response.data)
      
    })

  }, []);

  const handleFileChange = (e) => {
    setFileData(e.target.files[0])
  };


  const handleSubmit = async (e) => {
    
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', fileData)

    try {
      const response = await api.post('/slides', formData)

    } catch (error) {
      console.log("Nao tem imagem ainda")

    }

  };

  const toggleImage = async (id) => {

    try {



      const response = await api.put(`/slides/${id}/selecionar`, id)

      setImgId("")

      window.location.reload();


    } catch (error) {
      console.log(imgId.type)
      console.log(imgId)
      console.error(error)

    }
  };

  

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
            {images.map((image) => (
              <li key={`${image.id}`}>
                    <button onClick={() => toggleImage(image.id)} className="
                      rounded-lg
                      hover:-translate-y-2 duration-200 ease-in-out hover:shadow-black hover:shadow-xl/20">

                      {image.used ? 
                        <>

                          <Image className="rounded-tl-lg rounded-tr-lg " src={`${image.img_url}`} width={250} height={100} alt="foto" />
                          <h1 className="
                            text-center font-bold pt-2 bg-blue-50 rounded-bl-lg rounded-br-lg ">Usada</h1>
                        </>

                        :

                        <Image className="rounded-lg " src={`${image.img_url}`} width={250} height={100} alt="foto" />


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
