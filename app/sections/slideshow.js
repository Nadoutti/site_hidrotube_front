"use client"
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
  "/hidrotube.png",
  "/hidrotube2.png",
  "/hidrotube3.png",
]

export default function Slideshow() {

  

  return (
    <div className="
      flex
      items-center
      h-210
      w-full
      
      justify-center">
      <Carousel className="
        w-full
        h-210"opts={{
          loop: true,
          stopOnMouseEnter: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}>
        <CarouselContent>
          {images.map((_, index) => (
            <CarouselItem key={index}
              className="
              basis-full
              w-full">
              <div className="">
                <Image
                  src={_}
                  alt={`Slide ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-210"
                >
                  
                </Image>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 md:left-12" />
        <CarouselNext className="right-0 md:right-12" />
      </Carousel>
    </div>

  )
}

