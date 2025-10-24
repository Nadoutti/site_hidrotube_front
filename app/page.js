import Slideshow from "./sections/slideshow.js"
import Navbar from "./sections/navbar.js"
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
      <Navbar className="
      "></Navbar>
 
      {/* Slideshow */}
      <section id="Inicio">
        <Slideshow/>
      </section>


      {/* Produtos */}
      {/* < Produtos/ > */}
      

      {/* Atuando em */}

      <AtuandoEm/>

      {/* CTA */}
      <Cta/>

      {/* Porque */}

      <Porque/>

      {/* Sobre */}
      <section id="Sobre">
        <Sobre/>
      </section>

      {/* Noticias */}
      <section id="Notícias">
        <Noticias/>
      </section>

      {/* Parceiros */}
      <Parceiros/>

      {/* Footer */}
      <Footer/>
    </>
  )
}

