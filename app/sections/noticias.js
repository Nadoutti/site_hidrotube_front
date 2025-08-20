import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
import {calibri_bold} from "../layout.js"
import {venus} from "../layout.js"
import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"





export default function Noticias() {

  const noticias = [{
    "id": 1,
    "title": "titulo",
    "desc": "minha descricao",
    "date": "12-10-2022"
  },
{
    "id": 2,
    "title": "titulo dois",
    "desc": "minha descricao",
    "date": "12-10-2022"
  },
{
    "id": 3,
    "title": "titulo askjf",
    "desc": "minha descricao",
    "date": "12-10-2022"
  },
{
    "id": 4,
    "title": "titulo asldj",
    "desc": "minha descricao",
    "date": "12-10-2022"
  },
  ]
  return(
    <div className="
      bg-linear-0 from-[#F5FBFF] to-[#DEEBFF] 
      ">
      <div className="
        flex
        py-20
        items-center
        justify-between">
        <h1 className={`text-3xl   text-[#142667]  ml-10 ${venus.className}` }>Utimas Noticias</h1>
        <a href="#" className="
          mr-10
          bg-linear-0 from-[#2D6BBD] to-[#3F79C7] 
          hover:bg-linear-0 from-[#0055C5] to-[#478AE3]
          p-4
          rounded-md
          text-[#FFFFFF]
          font-bold
          hover:-translate-y-1
          duration-300
          ease-in-out
          ">VER TUDO</a>
      </div>
      <Carousel className="
        ml-0
        pb-10

        "
        opts={{
          loop: true,
        }}>
        <CarouselContent className={`${calibri_bold.className} -mr-15 h-90 ml-5 mt-5 `}>
          {noticias.map((noticia) => (
            <Link key={noticia.id} href={`/noticias/${noticia.id}`}>
              <CarouselItem className="
                basis-1/5
                " >
                <div className="">
                  <Card className="relative w-80 h-60 overflow-hidden hover:shadow-black hover:shadow-xl/20 hover:-translate-y-1 duration-300 ease-in-out">
                    {/* Imagem de fundo com filtro de brightness */}
                    <div className="absolute inset-0 bg-[url(/hidrotube.png)] bg-cover bg-center brightness-55 z-0"></div>

                    {/* Conteúdo acima da imagem */}
                    <div className="relative z-10">
                      <CardHeader>
                        <CardTitle className="text-center pt-10 text-2xl text-white font-bold">{ noticia.title }</CardTitle>
                      </CardHeader>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            </Link>



          ))}
        </CarouselContent>
        <CarouselPrevious className="left-12" />
        <CarouselNext className="right-12" />
      </Carousel>

    </div>
  )
}
