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
      bg-[#193084] 
      text-[#FFFFFF]
      text-[24px]
      font-bold">
      <div className="
        w-2/3
        text-center
        ">
        <h1 className={ `p-10 bg-[#4D83C9] text-[28px] ` }>DE UMA OLHADA NO NOSSO CATALOGO</h1>

      </div>

        <a href="/" className="
          mr-30
          bg-linear-90 from-[#B73034] to-[#F44C51]
          py-5
          px-10
          hover:-translate-y-1
          duration-200
          ease-in-out
          italic font-bold">CLIQUE AQUI</a>
    </div>
  )
}
