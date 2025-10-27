import { notFound } from "next/navigation";
import {venus} from "@/app/layout.js"
import Navbar from "@/app/sections/navbar.js"
import Footer from "@/app/sections/footer.js"
import api from "@/utils/api.js"
import Image from "next/image"
import TabelaTubosCarbono from "@/components/tabela_tubos_carbono.js"
import TabelaTubos from "@/components/tabela_tubos_carbono.js";

// Dados das tabelas

// NBR L e NBR M

const cols_nbr_l = ["DIÂMETRO NOMINAL (POL.)", "DIÂMETRO EXTERNO (M.M.)", "X", "ESP. DA PAREDE (M.M.)", "PESO TEÓRICO (KG/6M) PRETO", "PESO TEÓRICO (KG/6M) GALV."]

const rows_nbr_l = [
  { diamNom: "1/4\"", diamExt: "13,50",x: "x", espParede: "2,00", pesoPreto: 3.45, pesoGalv: null },
  { diamNom: "3/8\"", diamExt: "17,20",x: "x", espParede: "2,00", pesoPreto: 4.50, pesoGalv: 4.80 },
  { diamNom: "1/2\"", diamExt: "21,30",x: "x", espParede: "2,25", pesoPreto: 6.46, pesoGalv: 6.86 },
  { diamNom: "3/4\"", diamExt: "26,90",x: "x", espParede: "2,25", pesoPreto: 8.30, pesoGalv: 8.79 },
  { diamNom: "1\"", diamExt: "33,70",x: "x", espParede: "2,65", pesoPreto: 12.29, pesoGalv: 12.81 },
  { diamNom: "1.1/4\"", diamExt: "42,40",x: "x", espParede: "2,65", pesoPreto: 15.81, pesoGalv: 16.64 },
  { diamNom: "1.1/2\"", diamExt: "48,30",x: "x", espParede: "3,00", pesoPreto: 20.36, pesoGalv: 21.33 },
  { diamNom: "2\"", diamExt: "60,30",x: "x", espParede: "3,00", pesoPreto: 25.74, pesoGalv: 26.97 },
  { diamNom: "2.1/2\"", diamExt: "76,10",x: "x", espParede: "3,35", pesoPreto: 36.45, pesoGalv: 38.04 },
  { diamNom: "3\"", diamExt: "88,90",x: "x", espParede: "3,35", pesoPreto: 42.86, pesoGalv: 44.74 },
  { diamNom: "4\"", diamExt: "114,30",x: "x", espParede: "3,75", pesoPreto: 61.98, pesoGalv: 64.47 },
];

const rows_nbr_m = [
  { diamNom: "1/4\"",   diamExt: "13,50", x: "X", espParede: "2,25", pesoPreto: 3.90,  pesoGalv: null   },
  { diamNom: "3/8\"",   diamExt: "17,20", x: "X", espParede: "2,25", pesoPreto: 5.16,  pesoGalv: 5.52   },
  { diamNom: "1/2\"",   diamExt: "21,30", x: "X", espParede: "2,65", pesoPreto: 7.56,  pesoGalv: 7.85   },
  { diamNom: "3/4\"",   diamExt: "26,90", x: "X", espParede: "2,65", pesoPreto: 9.79,  pesoGalv: 10.12  },
  { diamNom: "1\"",     diamExt: "33,70", x: "X", espParede: "3,35", pesoPreto: 15.05, pesoGalv: 15.51  },
  { diamNom: "1.1/4\"", diamExt: "42,40", x: "X", espParede: "3,35", pesoPreto: 19.63, pesoGalv: 20.49  },
  { diamNom: "1.1/2\"", diamExt: "48,30", x: "X", espParede: "3,35", pesoPreto: 22.56, pesoGalv: 23.54  },
  { diamNom: "2\"",     diamExt: "60,30", x: "X", espParede: "3,75", pesoPreto: 32.06, pesoGalv: 33.02  },
  { diamNom: "2.1/2\"", diamExt: "76,10", x: "X", espParede: "3,75", pesoPreto: 40.57, pesoGalv: 42.20  },
  { diamNom: "3\"",     diamExt: "88,90", x: "X", espParede: "4,00", pesoPreto: 50.25, pesoGalv: 51.54  },
  { diamNom: "4\"",     diamExt: "114,30",x: "X", espParede: "4,50", pesoPreto: 73.12, pesoGalv: 74.77  },
  { diamNom: "5\"",     diamExt: "139,70",x: "X", espParede: "4,75", pesoPreto: 97.20, pesoGalv: 103.98 },
  { diamNom: "6\"",     diamExt: "165,10",x: "X", espParede: "4,75", pesoPreto: 116.93,pesoGalv: 119.53 },
];


// TUBOS A/C SCH A-106 E TUBOS A/C NBR 5590/SCH




// Sections 

const sections = ['TUBOS A/C NBR 5580-L', 'TUBOS A/C NBR 5580-M', 'TUBOS A/C SCH A-106 E TUBOS A/C NBR 5590/SCH']

export default function tubosCarbono() {


  return (
    <div>
      <Navbar/>
      <div className="relative w-full h-100 overflow-hidden  ">
        {/* Imagem de fundo com filtro de brightness */}
        <div className="absolute inset-0 bg-[url(/hidrotube.png)] bg-cover bg-center brightness-55 z-0"></div>



        <div className="relative z-10">


          <p className={ `text-center text-5xl pt-50 uppercase text-white font-bold ${venus.className}` }>Tubos de carbono</p>
        </div>
      </div>

      <div className="
        flex
        my-25
        ">
        <div className="
          w-1/2
          flex
          justify-center
          ">
          <Image width={600} height={600} src="/hidrotube.png" alt="tubo aco carbono"/>


        </div>

        <div className=" 
          w-1/2
          text-center px-40 ">

          <h1 className={`${venus.className} text-3xl mb-8 text-[#142667]`}>
            FABRICAÇÃO E 
            NORMAS TÉCNICAS
          </h1>

          <p className="text-xl">
            Os tubos de aço carbono são amplamente utilizados em sistemas industriais, comerciais e de construção civil devido à sua resistência mecânica, durabilidade e versatilidade.

            Podem ser fabricados com costura (soldados) ou sem costura (laminados a quente ou estirados a frio), dependendo da aplicação e das exigências normativas.
            A fabricação envolve processos como laminação, soldagem e galvanização, garantindo diferentes acabamentos e características de resistência à pressão, corrosão e temperatura. 

            Esses tubos atendem às principais normas técnicas nacionais e internacionais, como NBR 5580, NBR 5590 e ASTM A-106,
            assegurando padronização dimensional, confiabilidade e qualidade no desempenho.
          </p>

        </div>


      </div>


      <div className="py-15  flex justify-center">
        <div className="w-1/2 flex flex-col justify-center items-center px-30">
          <h1 className={`${venus.className} text-center text-3xl text-[#142667]`}>SELECIONE A NORMA DESEJADA</h1>
          <div className="bg-red-500 h-[2%] mt-2 w-2/3"></div>

        </div>

        <div className="w-1/2  flex flex-col items-center ">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className="
                  hover:translate-x-5 
                  duration-200
                  ease-in-out
                  text-xl font-bold capitalize bg-[#142667] my-3 w-3/4 text-[#FFFFFF] p-2 rounded-"

            >
              {sec}
            </a>
          ))}

        </div>
      </div>

      <section id="TUBOS A/C NBR 5580-L">

        <div className="py-15">

          <div className="w-full bg-[#142667] py-10 my-15">
            <h1 className={`${venus.className} text-3xl px-20 text-[#FFFFFF]`}>TUBOS A/C NBR 5580-L</h1>
          </div>

          <div className="flex py-10">
            <div className="flex flex-col w-1/2 px-20">

              <p className="text-xl ">
                Tubos leves com costura, indicados para condução de fluidos de baixa pressão. <br/> <br/>



                Fornecidos com acabamento <span className="font-black">Preto ou Galvanizado</span> com <span className="font-black">comprimento de 6000 mm.</span> A galvanização oferece maior resistência contra corrosão.<br/><br/>

                São utilizados em instalações prediais e industriais leves, para o transporte de ar comprimido, gases, água, vapor,
                e outros fluídos não corrosivos, em condições normais de trabalho.
              </p>

              <div className="h-100 overflow-hidden">

                <Image className="my-10"  width={700} height={500} src="/tubo_ac_quatro.png" alt="imagem tubo de aço carbono"/>
              </div>
            </div>

            <div className="w-1/2 pt-15 pr-20">
              <TabelaTubosCarbono dataRows={rows_nbr_l} cols={cols_nbr_l} className=""/>

            </div>

          </div>

        </div>


      </section>


      <section id="TUBOS A/C NBR 5580-M">

        <div className="py-15">

          <div className="w-full bg-[#142667] py-10 my-15">
            <h1 className={`${venus.className} text-3xl px-20 text-[#FFFFFF]`}>TUBOS A/C NBR 5580-M</h1>
          </div>

          <div className="flex py-10">
            <div className="flex flex-col w-1/2 px-20">

              <p className="text-xl ">
                Tubos médios <span className="font-black">com costura</span> , projetados para suportar maiores pressões que a classe leve, mantendo versatilidade e custo competitivo.<br/><br/>
                  Fornecidos com acabamento <span className="font-black">Preto ou Galvanizado </span>
                   com <span className="font-black">comprimento de 6000 mm</span>. A galvanização oferece
                  maior resistência contra corrosão.<br/><br/>
                  São utilizados em sistemas de pressão moderada, para o
                  transporte de ar comprimido, gases, água, vapor, e
                  outros fluídos não corrosivos, em condições normais de
                  trabalho.
              </p>

              <div className="h-100 overflow-hidden">

                <Image className="my-10"  width={700} height={500} src="/tubo_ac_quatro.png" alt="imagem tubo de aço carbono"/>
              </div>
            </div>

            <div className="w-1/2 pt-15 pr-20">
              <TabelaTubosCarbono dataRows={rows_nbr_m} cols={cols_nbr_l} className=""/>

            </div>

          </div>

        </div>

      </section>

      <section id="TUBOS A/C SCH A-106 E TUBOS A/C NBR 5590/SCH">
        <div className="py-15">

          <div className="w-full bg-[#142667] py-10 my-15">
            <h1 className={`${venus.className} text-3xl px-20 text-[#FFFFFF]`}>TUBOS A/C SCH A-106 E TUBOS A/C NBR 5590/SCH</h1>
          </div>
          <div className="flex flex-col w-full">

            <div className="flex">
              <div className="w-1/2 pl-20 pr-10">

                <h1 className="text-2xl mb-5">SCH A-106</h1>
                <p className="text-xl">Tubos sem costura fabricados de acordo com a norma ASTM
                  A-106, garantindo alta performance em ambientes críticos.<br/><br/>

                  Fornecidos com acabamento Preto com comprimento de
                  6000 mm.<br/><br/>

                  São utilizados principalmente em indústrias petroquímicas,
                  refinarias, caldeiras, trocadores de calor e linhas de vapor de
                  alta pressão. Suportam altas pressões e temperaturas sem
                  comprometer a segurança.</p>
              </div>

              <div className="w-1/2 pl-10 pr-20">

                <h1 className="text-2xl mb-5">NBR 5590 SCH</h1>
                <p className="text-xl">Tubos de maior resistência, fabricados conforme a norma NBR
                  5590, disponíveis em diferentes schedules (SCH), podendo ser
                  com ou sem costura.<br/><br/>

                  Fornecidos com acabamento Preto com comprimento de 6000
                  mm.<br/><br/>

                  São utilizados para o transporte de vapor, óleo, gás, ar
                  comprimido e condução de fluidos industriais. Ideal para
                  condições de trabalho mais exigentes.</p>
              </div>

            </div>

            <div className="flex w-full justify-center">
            <div className="relative w-11/12 h-[400px] overflow-hidden flex justify-center">
              <Image
                src="/tubo_ac_5.jpg"
                alt="Imagem tubos ac 5"
                fill       // faz a imagem ocupar todo o container
                className="object-cover object-center" // cropa mantendo proporção
              />
            </div>

            </div>

            <div className="px-20 my-15 flex-col">
              <TabelaTubos/>
              <TabelaTubos/>
              <TabelaTubos/>

            </div>

          </div>



        </div>



      </section>
    </div>
  )

}
