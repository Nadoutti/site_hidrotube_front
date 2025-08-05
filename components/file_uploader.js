"use client"
import { UploadCloud } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label} from "@/components/ui/label"

export default function FileUploader() {

  const handleSubmit = (e) => {

    e.preventDefault
    

  } 
    

  return (
    <div className="flex flex-col w-full max-w-sm justify-center gap-5 px-5">
      <form onSubmit={handleSubmit}>
        <div className="">
          <Label htmlFor="picture" className="
            mb-5
            text-md"> <UploadCloud/>Adicione uma Imagem </Label>

          <Input id="picture" type="file" className="h-30 outline-dashed border-none mb-5"   />

        </div>

        <Button>Enviar</Button>


      </form>

    </div>
  )

}
