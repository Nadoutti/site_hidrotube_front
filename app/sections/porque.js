import {venus} from "../layout.js"
import Image from 'next/image';

export default function Porque() {
  return (
    <div className="
      lg:py-20
      py-10
      px-10
      bg-linear-360 from-[#F5FBFF] to-[#DEEBFF]">

      <div className="
        text-3xl
        ">
        <h1 className={`
          text-center text-[#142667] ${venus.className}`}>PORQUE SOMOS A MELHOR </h1>
        <h1 className={`
          text-center ${venus.className}
          text-transparent bg-clip-text bg-linear-90 from-[#F44C51]  to-[#B73034]`}>ESCOLHA</h1>
      </div>

      <div className="
        flex
        my-10
        gap-5
        justify-around
        mx-20
        text-[#FFFFFF]
        text-center
        text-[28px]
        text-wrap

        font-bold">
        <div className="
          w-80
          rounded-[15px]
          h-120
          flex
          flex-col
          items-center
          justify-between
          pb-30
          bg-linear-0 from-[#142667] to-[#193084]">
          <p className="
            px-6
            py-15">Estoque sempre pronto para suas necessidades</p>
          <Image src="/target.svg"
            alt="target"
            width={100}
            height={100}/>
        </div>
        <div className="
          w-80
          rounded-[15px]
          flex
          flex-col
          items-center
          justify-between
          pb-30
          h-120
          bg-linear-0 from-[#142667] to-[#193084]">
          <p className="
            px-6
            py-15">Atendimento rápido e personalizado</p>

          <Image src="/fast-truck.svg"
            alt="fast truck"
            width={200}
            height={200}/>
        </div>

        <div className="
          w-80
          rounded-[15px]
          flex
          flex-col
          items-center
          justify-between
          pb-30
          pb-30
          h-120
          bg-linear-0 from-[#142667] to-[#193084]">
          <p className="
            px-6
            py-15">Produtos de ótima qualidade</p>

          <Image src="/quality.svg"
            alt="quality"
            width={100}
            height={100}/>

        </div>
      </div>
    </div>
  )
}
