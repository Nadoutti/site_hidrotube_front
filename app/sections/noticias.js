"use client"

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
import { useEffect, useState } from "react"





export default function Noticias() {

    const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/noticias`);
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        console.log(data);
        // Extract the items array from the response
        setNoticias(data.items || []);
      } catch (error) {
        console.error('Error fetching news:', error);
        // Fallback data in case of error
        setNoticias([
          {
            "id": "fallback-id",
            "title": "Erro ao carregar notícias",
            "description": "Por favor, tente novamente mais tarde",
            "cover_url": "/hidrotube.png" // Fallback image
          }
        ]);
      }
    };

    fetchNoticias();
  }, []);
  return(
    <div className="
      bg-linear-0 from-[#F5FBFF] to-[#DEEBFF] 
      px-20
      ">
      <div className="
        flex
        flex-col
        py-20">
        <h1 className={`text-3xl   text-[#142667] ${venus.className}` }>Utimas Noticias</h1>
        <div className="h-1 mt-2 w-2/10 bg-red-500"></div>
      </div>
      <Carousel className="
        ml-0
        pb-10

        "
        opts={{
          loop: true,
        }}>
        <CarouselContent className={`${calibri_bold.className} -mr-15 h-90 mt-5 `}>
          {noticias.map((noticia) => (
            <Link key={noticia.id} href={`/noticias/${noticia.id}`}>
              <CarouselItem className="
                basis-1/5
                " >
                <div className="">
                  <Card className="relative w-80 h-60 overflow-hidden hover:shadow-black hover:shadow-xl/20 hover:-translate-y-1 duration-300 ease-in-out">
                    {/* Imagem de fundo com filtro de brightness */}
                    <div className="absolute inset-0 z-0">
                      <Image 
                        src={noticia.cover_url || '/hidrotube.png'} 
                        alt={noticia.title} 
                        fill 
                        className="object-cover brightness-55"
                      />
                    </div>

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
