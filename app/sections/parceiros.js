import Image from "next/image"
import { venus } from "../layout.js"

export default function Parceiros() {
  return (
    <div className="
    bg-linear-180 from-[#F5FBFF] to-[#DEEBFF]
      px-10
      py-5">
        
      <div className="
        lg:py-20
        px-10
        ">

        <h1 className={`
          text-3xl
          text-transparent text-center mb-30 bg-clip-text bg-linear-90 from-[#F44C51]  to-[#B73034]
          font-bold ${venus.className}`}>Nossos Parceiros</h1>
      </div>

      <div className="
        flex
        justify-around
        mb-15">

        <Image src="/mga.png" alt="mga" width={200} height={200}/>
        <Image src="/tupy.png" alt="tupy" width={200} height={200}/>
        <Image src="/danfoss.png" alt="danfoss" width={200} height={200}/>

      </div>
    </div>

  )
}
