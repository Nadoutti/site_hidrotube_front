import {venus} from "../layout.js"
import Image from 'next/image';


export default function Sobre() {
  return (
    <div className="
      bg-linear-360 from-[#142667] to-[#284CCD]
      px-10
      py-20">

      <div>
        <h1 className={`text-2xl text-left text-transparent bg-clip-text bg-linear-90 from-[#F44C51]  to-[#B73034] text-[#FFFFFF] ${venus.className}`}>
          SOBRE NÓS
        </h1>
      </div>

      <div className="
        flex
        text-[#FFFFFF]
        text-[24px]
        font-bold
        my-10">
        <div className="
          w-2/3">
          <Image className="
            rounded-lg
            " 
          src="/hidrotube.png"
          alt="hidrotube"
          width={800}
          height={800}/>
        </div>

        <div className="
          w-1/3
          flex
          items-center
          justify-center
          pr-10">
          <p className="
            text-left "> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/> 

            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/><br/>

            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        </div>
      </div>
    </div>
  )
}
