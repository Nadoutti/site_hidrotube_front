import Slideshow from "./sections/slideshow.js"
import Parceiros from "./sections/parceiros.js"
import Footer from "./sections/footer.js"
import Produtos from "./sections/produtos.js"
import Sobre from "./sections/sobre.js"
import Noticias from "./sections/noticias.js"
import Porque from "./sections/porque.js"
import Cta from "./sections/cta.js"
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

      {/* CTA */}
      <Cta/>

      {/* Porque */}

      <Porque/>

      {/* Sobre */}
      <Sobre/>

      {/* Noticias */}
      <Noticias/>

      {/* Parceiros */}
      <Parceiros/>

      {/* Footer */}
      <Footer/>
    </>
  )
}

