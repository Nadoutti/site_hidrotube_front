import Slideshow from "./sections/slideshow.js"
import Produtos from "./sections/produtos.js"
import AtuandoEm from "./sections/atuandoem.js"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function LandingPage() {
  return (
    <>

      {/* Slideshow */}
      <Slideshow/>


      {/* Produtos */}
      < Produtos/ >
      

      {/* Atuando em */}

      <AtuandoEm/>
    </>
  )
}

