import { notFound } from "next/navigation";
import {venus} from "@/app/layout.js"
import Navbar from "@/app/sections/navbar.js"
import Footer from "@/app/sections/footer.js"
import Image from "next/image"

export default async function NoticiaPage({ params }) {
  const noticia = {
    "id": 1,
    "title": "titulo",
    "desc": "minha descricao",
    "date": "12-10-2022"
  }

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


  if (!noticia) {
    return notFound(); // mostra página 404 se não encontrar
  }

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
            <p className={ `text-center text-5xl pt-20 uppercase text-white font-bold ${venus.className}` }>{ noticia.title }</p>
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

          <span className="text-wrap text-2xl text-[#142667]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br/>
          <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </span>

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

