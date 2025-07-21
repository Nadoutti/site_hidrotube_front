import {calibri_bold} from "../layout";

export default function Cta() {
  return (
    <div className="
      flex
      pl-40
      py-10
      justify-around
      gap-40
      items-center
      bg-[#142667] 
      text-[#FFFFFF]
      text-[24px]
      font-bold">
      <div className="
        w-2/3
        text-center
        ">
        <h1 className={ `p-10 bg-linear-0  from-[#2D6BBD] to-[#4D83C9] rounded-lg text-[28px] ` }>DE UMA OLHADA NO NOSSO CATALOGO</h1>

      </div>

      <div className="
        w-1/3
        
        ">
        <a className="
          bg-linear-90 from-[#B73034] to-[#F44C51]
          py-5
          px-10
          rounded-lg italic font-bold">CLIQUE AQUI</a>
      </div>
    </div>
  )
}
