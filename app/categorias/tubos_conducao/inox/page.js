import Navbar from "@/app/sections/navbar"
import { venus } from "@/app/layout"
import Image from "next/image"
import styles from '@/components/custom/inox_description.css'


export default function TubosInox() {

  return (
    <div>
      <Navbar/>

      <div className="relative w-full h-100 overflow-hidden  ">
        {/* Imagem de fundo com filtro de brightness */}
        <div className="absolute inset-0 bg-[url(/hidrotube.png)] bg-cover bg-center brightness-55 z-0"></div>



        <div className="relative z-10">


          <p className={ `text-center text-5xl pt-50 uppercase text-white font-bold ${venus.className}` }>TUBOS DE CONDUÇÃO EM AÇO INOX</p>
        </div>
      </div>

      {/* Daqui pra frente e codigo customizado da pagina */}

      <div className="px-20 my-15 w-full my-25 flex ">
        <div className="w-1/2 flex items-end">
          <Image src="/tubos_inox_1.png" width={700} height={500} alt="Imagem tubos Inox"/>

        </div>

        <div className="w-1/2 px-10">
          <h1 className={`${venus.className} text-center text-3xl mb-8 text-[#142667]`}>FABRICAÇÃO E NORMAS TÉCNICAS</h1>
          <p className="text-xl ">Os tubos de aço inox são amplamente utilizados em aplicações
            industriais, químicas, alimentícias e de processos que exigem alta
            resistência à corrosão, durabilidade e excelente acabamento superficial.<br/><br/>

            Podem ser fabricados com costura (soldados) ou sem costura
            (laminados ou trefilados a frio), conforme a necessidade do projeto e as
            condições de operação.<br/><br/>

            Os tubos de aço inox estão disponíveis em dois padrões principais:<br/><br/>

            <span className="font-black">Padrão Schedule</span> — utilizado em aplicações industriais que requerem
            resistência à pressão, com espessuras definidas pela série SCH (5, 10,
            40, etc.).<br/><br/>

            <span className="font-black">Padrão OD (Outside Diameter)</span> — adotado em sistemas que exigem
            precisão dimensional e acabamento estético, como indústrias
            alimentícias, farmacêuticas e de processos sanitários.</p>

        </div>

      </div>


      <div className="my-25" >
        {/* Div do titulo */}
        <div className="mb-5"> 
          <h1 className={`${venus.className} text-3xl text-center text-[#142667]`}>LIGAS DE AÇO INOX</h1>
        </div>

        {/* Div da parte da descricao principal */}
        <div className="flex">

          {/* Lado azul */}

          <div className={`pl-40 pr-30 bg-[#142667] text-xl text-[#FFFFFF] py-15 w-1/2 ${styles.bigger_div}`}>

            <div className="flex my-10 gap-20">
              <div className="">
                <div className="text-center my-3">
                  <p >Composição aproximada</p>
                  <div className=" w-full h-1 bg-red-500"></div>

                </div>
                <div className="text-center">
                  <p>18% de Cromo <br/>
                    8% de Níquel</p>

                </div>

              </div>
              <div>
                <h1 className={`${venus.className} text-7xl`}>1304</h1>

              </div>


            </div>

            <div className=" text-justify">
              <p>O Aço Inox 304 possui excelente resistência à
                corrosão em ambientes moderados, sendo
                amplamente utilizado em aplicações gerais. É uma
                escolha ideal para ambientes industriais que não
                apresentam alta exposição a agentes corrosivos.</p>

            </div>


          </div>


          {/* Lado branco */}
          <div className=" pr-40 pl-30 text-xl border-[#142667] border-4 w-1/2 py-15">

            <div className=" text-justify">
              <p>O Aço Inox 316 é uma versão superior do aço inoxidável,
                com a adição de molibdênio à sua composição. O
                molibdênio confere uma resistência extra, especialmente
                contra a corrosão por cloretos, como a água salgada,
                tornando-o ideal para ambientes agressivos.</p>

            </div>

            <div className="flex my-15 gap-20">

              <div>
                <h1 className={`${venus.className} text-7xl`}>1316</h1>

              </div>
              <div className="">

                <div className="text-center my-3">
                  <p >Composição aproximada</p>
                  <div className=" w-full h-1 bg-red-500"></div>

                </div>
                <div className=" text-center">
                  <p>16% de Cromo <br/>
                    10% de Níquel<br/>
                    2% de Molibdênio</p>

                </div>

              </div>


            </div>



          </div>



        </div>

      </div>


    </div>
  )
}
