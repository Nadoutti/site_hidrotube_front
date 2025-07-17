"use client"
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Produtos() {
  return (
    <div className="
      bg-linear-315 from-[#F5FBFF] to-[#DEEBFF] 
      ">
      <div className="
        flex
        py-20
        items-center
        justify-between">
        <h1 className="
          text-[38px] ml-10 font-bold ">Conheça Nossas linhas</h1>
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
        ml-10
        pb-32 
        "
        opts={{
          loop: true,
        }}>
        <CarouselContent className="-mr-15 ">
          <CarouselItem className="
            basis-1/5
            " >
            <div className="">
              <Card className="
                w-80
                h-120
                bg-linear-180 from-[#142667] to-[#284CCD]">
                <CardHeader>
                  <CardTitle className="text-center pt-10 text-2xl text-[#FFFFFF]">Produto 1</CardTitle>
                </CardHeader>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src="/hidrotube.png"
                    width={100}
                    height={100}/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="
            basis-1/5" >
            <div className="p-1">
              <Card className="
                w-80
                h-120
                bg-linear-180 from-[#142667] to-[#284CCD]">

                <CardHeader>
                  <CardTitle className="text-center pt-10 text-2xl text-[#FFFFFF]">Produto 2</CardTitle>
                </CardHeader>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src="/hidrotube.png"
                    width={100}
                    height={100}/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="
            basis-1/5" >
            <div className="p-1">
              <Card className="
                w-80
                h-120
                bg-linear-180 from-[#142667] to-[#284CCD]">
                <CardHeader>
                  <CardTitle className="text-center pt-10 text-2xl text-[#FFFFFF]">Produto 3</CardTitle>
                </CardHeader>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src="/hidrotube.png"
                    width={100}
                    height={100}/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="
            basis-1/5" >
            <div className="p-1">
              <Card className="
                w-80
                h-120
                bg-linear-180 from-[#142667] to-[#284CCD]">
                <CardHeader>
                  <CardTitle className="text-center pt-10 text-2xl text-[#FFFFFF]">Produto 4</CardTitle>
                </CardHeader>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src="/hidrotube.png"
                    width={100}
                    height={100}/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="
            basis-1/5" >
            <div className="p-1">
              <Card className="
                w-80
                h-120
                bg-linear-180 from-[#142667] to-[#284CCD]">
                <CardHeader>
                  <CardTitle className="text-center pt-10 text-2xl text-[#FFFFFF]">Produto 5</CardTitle>
                </CardHeader>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src="/hidrotube.png"
                    width={100}
                    height={100}/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-12" />
        <CarouselNext className="right-12" />
      </Carousel>

    </div>
  )
}
