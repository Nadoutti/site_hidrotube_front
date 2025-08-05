import Image from "next/image"
import {
  Card,
  CardContent,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function UsedImages() {

  return (
    <Card className="my-15">
      <CardHeader>
        <CardTitle>
          <span className="
            text-xl">
            Imagens em uso

          </span>

        </CardTitle>


      </CardHeader>

      <CardContent className="flex items-center max-w-300">

        <ul className="
          flex
          gap-10
          flex-wrap">
          <li>

            <Image className="rounded-md" src="/hidrotube.png" width={250} height={200} alt="foto" />
          </li>

          <li>
            <Image className="rounded-md" src="/hidrotube.png" width={250} height={200} alt="foto" />
          </li>

          <li>
            <Image className="rounded-md" src="/hidrotube.png" width={250} height={200} alt="foto" />
          </li>

        </ul>


      </CardContent>



    </Card>

  )

}
