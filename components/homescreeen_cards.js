import {TrendingUp, TrendingDown} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function SectionCards() {
  return (
    <div className="
      flex
      w-full
      pl-10
      pr-8
      gap-4">
      <Card className ="w-1/4 ">
        <CardHeader>
          <CardDescription>Testando</CardDescription>
          <CardTitle className="text-2xl tabular-nums ">$1250,00</CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingUp/>
              + 14,5%

            </Badge>

          </CardAction>



        </CardHeader>

        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Visitors for the last 6 months
          </div>
        </CardFooter>

      </Card>

      <Card className ="w-1/4 ">
        <CardHeader>
          <CardDescription>Testando</CardDescription>
          <CardTitle className="text-2xl tabular-nums ">$1250,00</CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingUp/>
              + 14,5%

            </Badge>

          </CardAction>



        </CardHeader>

        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Visitors for the last 6 months
          </div>
        </CardFooter>

      </Card>

      <Card className ="w-1/4 ">
        <CardHeader>
          <CardDescription>Testando</CardDescription>
          <CardTitle className="text-2xl tabular-nums ">$1250,00</CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingUp/>
              + 14,5%

            </Badge>

          </CardAction>



        </CardHeader>

        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Visitors for the last 6 months
          </div>
        </CardFooter>

      </Card>
      <Card className ="w-1/4 ">
        <CardHeader>
          <CardDescription>Testando</CardDescription>
          <CardTitle className="text-2xl tabular-nums ">$1250,00</CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingUp/>
              + 14,5%

            </Badge>

          </CardAction>



        </CardHeader>

        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Visitors for the last 6 months
          </div>
        </CardFooter>

      </Card>
    </div>

  )
}
