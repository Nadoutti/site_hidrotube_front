"use client"
import { notFound } from "next/navigation";
import {venus} from "@/app/layout.js"
import { useEffect, useState } from "react"
import Navbar from "@/app/sections/navbar.js"
import Footer from "@/app/sections/footer.js"
import api from "@/utils/api.js"
import Image from "next/image"

export default function NoticiaPage({ params }) {

  const { noticiaId } = params;
  const [noticia, setNoticia] = useState(null);


  useEffect(() => {
    api.get(`/noticia${noticiaId}`).then((response) => {
      setNoticias(response.data)
      console.log(response.data)

    })

  }, []);

  return (
    <div className="

      ">
      <Navbar/>
      <div className="
        ">
        {/* Sessao do titulo */}
        <div className="relative w-full h-60 overflow-hidden  ">
          {/* Imagem de fundo com filtro de brightness */}
          <div className="absolute inset-0 bg-[url(/hidrotube.png)] bg-cover bg-center brightness-55 z-0"></div>



          <div className="relative z-10">
            {noticia !== null ?
            
            <p className={ `text-center text-5xl pt-20 uppercase text-white font-bold ${venus.className}` }>{ noticia.title }</p>

              :


            <p className={ `text-center text-5xl pt-20 uppercase text-white font-bold ${venus.className}` }>Nao foi possivel carregar noticia</p>
            }
          </div>
        </div>

      </div>

      <div className="
        px-10
        bg-linear-0 from-[#F5FBFF] to-[#DEEBFF]
        pt-40
        h-210
        flex
        pb-50
        ">
        <div className="
          w-2/3 ">
          {noticia !== null ?
            <span className={ `text-wrap text-2xl text-[#142667]` }>{ noticia.description }</span>
            :

            <span className={ `text-wrap text-2xl text-[#142667] ` }>Nao foi possivel carregar noticia</span>

          }

        </div>

        <div className="
          relative
          overflow-hidden
          bg-red-500
          rounded-lg
          w-1/3">

          {/* Imagem da noticia aqui */}
          <div className="absolute inset-0 bg-[url(/hidrotube.png)] bg-cover bg-center  z-0">

          </div>


        </div>


      </div>
      <Footer/>
    </div>

  );
}

