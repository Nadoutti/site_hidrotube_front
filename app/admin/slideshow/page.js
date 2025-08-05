"use client"
import UsedImages from "@/components/used_imgs.js";
import OtherImages from "@/components/other_imgs.js";

export default function admin_slide() {

    return (
      <div className="
        mx-10
        my-5
        ">
        <h1 className="
          text-[56px]
          font-bold
          ">Edite seus Slides.</h1>
        <UsedImages/>
      <OtherImages/>



      </div>

    )
  
}
