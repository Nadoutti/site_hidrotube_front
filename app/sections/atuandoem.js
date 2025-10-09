import React from 'react';
import { calibri_bold } from "../layout.js"
import {venus} from "../layout.js"
import Image from 'next/image';


export default function AtuandoEm() {
  return (
    <div className="
      lg:py-20
      py-10
      px-10
      bg-linear-180 from-[#142667] to-[#193084]">
      {/* Div para o titulo */}
      <div className="
        ">
        <h1 className={ `
          text-3xl
          text-[#FFFFFF]
          ${venus.className}`}>Atuando em:</h1>
      </div>
      {/* Conteudo */}
      <div className="
        flex
        my-10
        sm:my-20">
        {/* Areas de atuação */}
        <div className={`
          w-2/3
          text-[#FFFFFF]
          text-center
          ${calibri_bold.className}
          text-[24px]
          border-r-12
          border-[#A0ACC4]
          `}>

          <ul className="
            flex
            justify-around">
            
            <li className="flex flex-col items-center">
            <Image  src="/milk.svg"
              width={120}
              height={120}
              alt="milk" className="
                text-white"/>
            <p >Alimenticios</p>
            </li>
            
            <li>
            <Image src="/agua.svg" width={120} height={120} alt="water"/>
            <p>Agua</p>
            </li>
            
            <li className="flex flex-col items-center">
            <Image className="" src="/compressed.svg" width={120} height={120} alt="compressed"/>
            <p className="">Ar Comprimido</p>
            </li>
          </ul>
          

          <ul
            className="
            flex
            justify-around
            mx-30
            my-10">
            <li>
            <Image src="/gas.svg" width={120} height={120} alt="gas"/>
            <p>Gases</p>
            </li>

            <li>
            <Image src="/vapor.svg" width={120} height={120} alt="vapor"/>
            <p>Vapor</p>
            </li>
          </ul>

        </div>
        {/* Conheca nosso time */}
        <div className="
          w-1/3
          pr-10
          pl-5
          flex
          flex-col
          items-end
          justify-center
          ">
          <p className={`
            text-[24px]
            ${calibri_bold.className}
            text-[#FFFFFF]
            w-fit
            text-wrap
            p-2
            text-right
            `}> 
            Converse com o time HT sempre trazendo confiabilidade, seguranca e personalizacao
            para as suas necessidades, nos consulte e resolvemos as demandas
            relevantes para o contexto da sua empresa</p>
          <a className="
            py-4
            my-10
            px-15
            text-[22px]
            bg-transparent
            border
            font-bold
            duration-200
            ease-in-out
            text-blue-100
            border-blue-400
            hover:border-blue-500
            hover:bg-blue-500">Contatar</a>
        </div>
      </div>
    </div>
  )
}
