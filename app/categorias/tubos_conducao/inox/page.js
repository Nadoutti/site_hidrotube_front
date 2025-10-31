import Navbar from "@/app/sections/navbar"
import { venus } from "@/app/layout"
import Image from "next/image"
import styles from '@/components/custom/inox_description.css'
import TabelaTubos from "@/components/tabela_tubos_carbono"


export default function TubosInox() {

  const sections = ["TUBOS INOX PADRÃO SCH / DIÂMETRO NOMINAL", "TUBOS INOX PADRÃO OD / DIÂMETRO EXTERNO"]

  // Columns
  const cols_tbl_4 = [
    "DIÂM. NOM. (POL.)",
    "DIÂM. EXT. (MM.)",
    "5 - S (MM.)",
    "5 - S (KG.)",
    "10 - S (MM.)",
    "10 - S (KG.)",
    "40 - S (MM.)",
    "40 - S (KG.)"
  ];

  const rows_tbl_4 = [
    { diamNom: "1/8\"",  diamExt: "10,20",  mm_5s: "-",    kg_5s: "-",     mm_10s: "1,24", kg_10s: "0,280", kg_40s: "1,73", mm_40s: "0,370" },
    { diamNom: "1/4\"",  diamExt: "13,72",  mm_5s: "-",    kg_5s: "-",     mm_10s: "1,65", kg_10s: "0,500", mm_40s: "2,24", kg_40s: "0,630" },
    { diamNom: "3/8\"",  diamExt: "17,15",  mm_5s: "-",    kg_5s: "-",     mm_10s: "1,65", kg_10s: "0,640", mm_40s: "2,31", kg_40s: "0,860" },
    { diamNom: "1/2\"",  diamExt: "21,34",  mm_5s: "1,65", kg_5s: "0,813", mm_10s: "2,11", kg_10s: "1,020", mm_40s: "2,77", kg_40s: "1,290" },
    { diamNom: "3/4\"",  diamExt: "26,67",  mm_5s: "1,65", kg_5s: "1,030", mm_10s: "2,11", kg_10s: "1,300", mm_40s: "2,87", kg_40s: "1,710" },
    { diamNom: "1\"",    diamExt: "33,40",  mm_5s: "1,65", kg_5s: "1,310", mm_10s: "2,77", kg_10s: "2,120", mm_40s: "3,38", kg_40s: "2,540" },
    { diamNom: "1.1/4\"",diamExt: "42,16",  mm_5s: "1,65", kg_5s: "1,670", mm_10s: "2,77", kg_10s: "2,730", mm_40s: "3,56", kg_40s: "3,440" },
    { diamNom: "1.1/2\"",diamExt: "48,26",  mm_5s: "1,65", kg_5s: "1,930", mm_10s: "2,77", kg_10s: "3,160", mm_40s: "3,65", kg_40s: "4,110" },
    { diamNom: "2\"",    diamExt: "60,33",  mm_5s: "1,65", kg_5s: "2,420", mm_10s: "2,77", kg_10s: "3,980", mm_40s: "3,91", kg_40s: "5,530" },
    { diamNom: "2.1/2\"",diamExt: "73,03",  mm_5s: "2,11", kg_5s: "3,750", mm_10s: "3,05", kg_10s: "5,330", mm_40s: "5,16", kg_40s: "8,750" },
    { diamNom: "3\"",    diamExt: "88,90",  mm_5s: "2,11", kg_5s: "4,510", mm_10s: "3,05", kg_10s: "6,450", mm_40s: "5,49", kg_40s: "11,450" },
    { diamNom: "3.1/2\"",diamExt: "101,60", mm_5s: "2,11", kg_5s: "5,170", mm_10s: "3,05", kg_10s: "7,400", mm_40s: "5,74", kg_40s: "13,760" },
    { diamNom: "4\"",    diamExt: "114,30", mm_5s: "2,11", kg_5s: "5,830", mm_10s: "3,05", kg_10s: "8,350", mm_40s: "6,02", kg_40s: "16,300" },
    { diamNom: "5\"",    diamExt: "141,30", mm_5s: "2,77", kg_5s: "9,450", mm_10s: "3,40", kg_10s: "11,600", mm_40s: "6,55", kg_40s: "22,090" },
    { diamNom: "6\"",    diamExt: "168,28", mm_5s: "2,77", kg_5s: "11,300",mm_10s: "3,40", kg_10s: "13,800", mm_40s: "7,11", kg_40s: "28,650" },
    { diamNom: "8\"",    diamExt: "219,08", mm_5s: "2,77", kg_5s: "14,800",mm_10s: "3,76", kg_10s: "19,900", mm_40s: "8,18", kg_40s: "42,970" },
    { diamNom: "10\"",   diamExt: "273,05", mm_5s: "3,40", kg_5s: "22,600",mm_10s: "4,19", kg_10s: "27,800", mm_40s: "9,27", kg_40s: "60,300" },
    { diamNom: "12\"",   diamExt: "323,85", mm_5s: "3,96", kg_5s: "31,400",mm_10s: "4,57", kg_10s: "36,000", mm_40s: "9,27", kg_40s: "71,900" },
    { diamNom: "14\"",   diamExt: "355,60", mm_5s: "3,96", kg_5s: "34,400",mm_10s: "4,78", kg_10s: "41,300", mm_40s: "-",    kg_40s: "-"     },
    { diamNom: "16\"",   diamExt: "406,40", mm_5s: "4,20", kg_5s: "41,500",mm_10s: "4,78", kg_10s: "47,300", mm_40s: "-",    kg_40s: "-"     },
    { diamNom: "18\"",   diamExt: "457,20", mm_5s: "4,20", kg_5s: "46,800",mm_10s: "4,78", kg_10s: "53,200", mm_40s: "-",    kg_40s: "-"     },
    { diamNom: "20\"",   diamExt: "508,00", mm_5s: "4,78", kg_5s: "59,300",mm_10s: "5,54", kg_10s: "68,600", mm_40s: "-",    kg_40s: "-"     },
    { diamNom: "24\"",   diamExt: "609,60", mm_5s: "5,54", kg_5s: "82,500",mm_10s: "6,35", kg_10s: "94,500", mm_40s: "-",    kg_40s: "-"     }
  ];

// Columns
const cols_tbl_5 = [
  "DIÂMETRO EXTERNO (POLEGADA)",
  "DIÂMETRO EXTERNO (MM)",
  "ESPESSURA DE PAREDE (MM) - 1,00",
  "ESPESSURA DE PAREDE (MM) - 1,25",
  "ESPESSURA DE PAREDE (MM) - 1,50",
  "ESPESSURA DE PAREDE (MM) - 2,00",
  "ESPESSURA DE PAREDE (MM) - 2,77",
  "ESPESSURA DE PAREDE (MM) - 3,05",
  "ESPESSURA DE PAREDE (MM) - 3,40",
  "ESPESSURA DE PAREDE (MM) - 4,50",
  "ESPESSURA DE PAREDE (MM) - 6,00"
];

const rows_tbl_5 = [
  { diamPol: "1/4\"",  diamMm: "6,35",  p1_00: "0,134", p1_25: "0,155", p1_50: "-",     p2_00: "-",     p2_77: "-",     p3_05: "-",     p3_40: "-",     p4_50: "-",     p6_00: "-" },
  { diamPol: "3/8\"",  diamMm: "9,53",  p1_00: "0,213", p1_25: "0,259", p1_50: "0,301", p2_00: "-",     p2_77: "-",     p3_05: "-",     p3_40: "-",     p4_50: "-",     p6_00: "-" },
  { diamPol: "1/2\"",  diamMm: "12,70", p1_00: "0,288", p1_25: "0,358", p1_50: "0,420", p2_00: "0,535", p2_77: "-",     p3_05: "-",     p3_40: "-",     p4_50: "-",     p6_00: "-" },
  { diamPol: "3/4\"",  diamMm: "19,05", p1_00: "0,454", p1_25: "0,557", p1_50: "0,659", p2_00: "0,853", p2_77: "-",     p3_05: "-",     p3_40: "-",     p4_50: "-",     p6_00: "-" },
  { diamPol: "1\"",    diamMm: "25,40", p1_00: "0,611", p1_25: "0,756", p1_50: "0,898", p2_00: "1,172", p2_77: "1,568", p3_05: "1,705", p3_40: "-",     p4_50: "-",     p6_00: "-" },
  { diamPol: "1.1/4\"",diamMm: "31,75", p1_00: "0,780", p1_25: "0,955", p1_50: "1,144", p2_00: "1,502", p2_77: "2,027", p3_05: "2,189", p3_40: "-",     p4_50: "-",     p6_00: "-" },
  { diamPol: "1.1/2\"",diamMm: "38,10", p1_00: "0,929", p1_25: "1,153", p1_50: "1,375", p2_00: "1,808", p2_77: "2,450", p3_05: "2,677", p3_40: "3,101", p4_50: "-",     p6_00: "-" },
  { diamPol: "2\"",    diamMm: "50,80", p1_00: "1,247", p1_25: "1,557", p1_50: "1,850", p2_00: "2,444", p2_77: "3,331", p3_05: "3,467", p3_40: "4,409", p4_50: "-",     p6_00: "-" },
  { diamPol: "2.1/2\"",diamMm: "63,50", p1_00: "-",     p1_25: "-",     p1_50: "1,968", p2_00: "2,329", p2_77: "3,080", p3_05: "4,212", p3_40: "4,617", p4_50: "5,216", p6_00: "-" },
  { diamPol: "3\"",    diamMm: "76,20", p1_00: "-",     p1_25: "-",     p1_50: "2,806", p2_00: "3,716", p2_77: "5,093", p3_05: "5,557", p3_40: "6,319", p4_50: "-",     p6_00: "-" },
  { diamPol: "3.1/2\"",diamMm: "88,90", p1_00: "-",     p1_25: "-",     p1_50: "-",     p2_00: "4,369", p2_77: "5,998", p3_05: "6,583", p3_40: "7,308", p4_50: "9,548", p6_00: "12,505" },
  { diamPol: "4\"",    diamMm: "101,60",p1_00: "-",     p1_25: "-",     p1_50: "-",     p2_00: "4,988", p2_77: "6,885", p3_05: "7,526", p3_40: "8,523", p4_50: "10,984",p6_00: "14,420" },
  { diamPol: "5\"",    diamMm: "127,00",p1_00: "-",     p1_25: "-",     p1_50: "-",     p2_00: "6,285", p2_77: "8,651", p3_05: "9,483", p3_40: "10,855",p4_50: "13,885",p6_00: "18,252" },
  { diamPol: "6\"",    diamMm: "152,40",p1_00: "-",     p1_25: "-",     p1_50: "-",     p2_00: "7,512", p2_77: "10,341",p3_05: "11,364",p3_40: "12,856",p4_50: "16,886",p6_00: "22,022" },
  { diamPol: "8\"",    diamMm: "203,20",p1_00: "-",     p1_25: "-",     p1_50: "-",     p2_00: "9,323", p2_77: "13,691",p3_05: "15,054",p3_40: "16,752",p4_50: "22,060",p6_00: "29,178" },
  { diamPol: "10\"",   diamMm: "254,00",p1_00: "-",     p1_25: "-",     p1_50: "-",     p2_00: "12,429",p2_77: "17,161",p3_05: "18,875",p3_40: "21,011",p4_50: "27,687",p6_00: "36,694" },
  { diamPol: "12\"",   diamMm: "304,80",p1_00: "-",     p1_25: "-",     p1_50: "-",     p2_00: "14,934",p2_77: "20,631",p3_05: "22,696",p3_40: "25,271",p4_50: "33,324",p6_00: "44,210" }
];

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

      <div className="py-15  flex justify-center">
        <div className="w-1/2 flex flex-col justify-center items-center px-30">
          <h1 className={`${venus.className} text-center text-3xl text-[#142667]`}>SELECIONE A NORMA DESEJADA</h1>
          <div className="bg-red-500 h-1 mt-2 w-2/3"></div>

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
              text-2xl font-bold capitalize bg-[#142667] my-3 w-3/4 text-[#FFFFFF] p-2 rounded-"

            >
              {sec}
            </a>
          ))}

        </div>
      </div>

      <section id="TUBOS INOX PADRÃO SCH / DIÂMETRO NOMINAL">
        <div className="my-15">

          <div className="w-full bg-[#142667] py-10 my-15">
            <h1 className={`${venus.className} text-3xl px-20 text-[#FFFFFF]`}>TUBOS INOX PADRÃO SCH / DIÂMETRO NOMINAL</h1>
          </div>

          <div className="flex px-20 my-15">
            <div className="w-1/2 flex justify-center border-r-2">
              <Image src="/inox_ia_1.png" width={500} height={500} alt="inox_ia_1"/>

            </div>

            <div className="w-1/2 px-20 text-xl">
              <p>Tubos indicados para condução de fluidos sob média e alta
                pressão, oferecendo excelente resistência à corrosão e
                durabilidade.<br/>
                Disponíveis em <span className="font-black">aço inox 304 ou 316</span>, podem ser <span className="font-black">com
                costura ou sem costura</span>, com <span className="font-black"></span>comprimento de 6000 mm.
                As espessuras seguem as <span className="font-black">séries SCH</span> (5, 10, 40, etc.),
                conforme a necessidade do projeto.<br/>
                São amplamente utilizados em sistemas industriais para
                transporte de água, vapor, gases e produtos químicos,
                garantindo segurança e desempenho confiável.</p>

            </div>

          </div>

          <div className="w-11/12 mx-20">

            <TabelaTubos dataRows={rows_tbl_4} cols={cols_tbl_4} title="TUBOS INOX PADRÃO SCH / DIÂMETRO NOMINAL"/>
          </div>


        </div>



      </section>

      <section id="TUBOS INOX PADRÃO OD / DIÂMETRO EXTERNO">
        <div className="my-15">

          <div className="w-full bg-[#142667] py-10 my-15">
            <h1 className={`${venus.className} text-3xl px-20 text-[#FFFFFF]`}>TUBOS INOX PADRÃO OD / DIÂMETRO EXTERNO</h1>
          </div>

          <div className="flex px-20 my-15">
            <div className="w-1/2 flex justify-center border-r-2">
              <Image src="/inox_ia_2.png" width={500} height={500} alt="inox_ia_1"/>

            </div>

            <div className="w-1/2 px-20 text-xl">
              <p>Tubos de precisão e excelente acabamento superficial,
                ideais para aplicações que exigem higiene, resistência à
                corrosão e estética aprimorada.<br/><br/>
                Fabricados em <span className="font-black">aço inox 304 ou 316</span>, podem ser <span className="font-black">com
                costura ou sem costura</span>, com <span className="font-black">diâmetro externo (OD)</span> de
                acordo com a norma específica para tubos sanitários e
                <span className="font-black">comprimento de 6000 mm.</span><br/><br/>
                São amplamente utilizados em indústrias alimentícias,
                farmacêuticas, químicas e de processos sanitários,
                garantindo fluxo limpo, durabilidade e confiabilidade em
                sistemas de alta exigência.</p>

            </div>

          </div>

          <div className="w-11/12 mx-20">

            <TabelaTubos dataRows={rows_tbl_5} cols={cols_tbl_5} title="TUBOS INOX PADRÃO SCH / DIÂMETRO EXTERNO"/>
          </div>


        </div>



      </section>

    </div>
  )
}
