import ChartAreaInteractive from "../../components/users_line_chart.js"
import SectionCards from "../../components/homescreeen_cards.js"
import MyBarChart from "../../components/country_pie_chart.js"

export default function Homescreen() {

  return (
    <div className="
      w-auto
      ">
      <div className="
        py-10
        flex
        justify-center
        mt-10
        ml-10
        ">
        <div className="
          ">
          <ChartAreaInteractive/>

        </div>
        <div className="
          border-md
          border-px">
          <MyBarChart/>


        </div>


      </div>

        <div>
          <SectionCards/>

        </div>
      <div>

      </div>

    </div>


  )

}
