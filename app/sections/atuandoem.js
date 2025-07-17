'use client';
import React from 'react';
import Image from 'next/image';


export default function AtuandoEm() {
  return (
    <div className="
      min-h-screen
      lg:py-20
      py-15
      px-4
      bg-linear-360 from-[#142667] to-[#284CCD]">
      {/* Div para o titulo */}
      <div className="
        ">
        <h1 className="
          text-[38px]
          font-bold
          text-[#FFFFFF]">Atuando em:</h1>
      </div>
      {/* Conteudo */}
      <div className="
        flex
        my-10
        sm:my-20">
        {/* Areas de atuação */}
        <div className="
          w-2/3
          bg-red-500">
          <div>
            <Image/>
        <p>alimenticios</p>
          </div>
          <p>agua</p>
          <p>gases</p>
          <p>ar comprimido</p>
          <p>vapor</p>
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
          <p className="
            text-[24px]
            font-semibold
            text-[#FFFFFF]
            w-fit
            text-wrap
            p-2
            text-right
            "> 
            Converse com o time HT sempre trazendo confiabilidade, seguranca e personalizacao
            para as suas necessidades, nos consulte e resolvemos as demandas
            relevantes para o contexto da sua empresa</p>
          <a className="
            py-3
            my-10
            px-10
            text-[18px]
            bg-transparent
            border
            font-bold
            rounded-[10px]
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
