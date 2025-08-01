"use client"
import { Bar, BarChart, Legend, Tooltip, Pie, PieChart, Cell } from 'recharts';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  {
    "name": "SP",
    "value": 400
  },
  {
    "name": "SC",
    "value": 300
  },
  {
    "name": "MG",
    "value": 300
  },

];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function MyBarChart() {

  return (

    <Card className="
      mx-8
      h-full">
      <CardHeader>
        <CardTitle>Users by state</CardTitle>

      </CardHeader>

      {/* Conteudo do Card */}

      <CardContent>

        <PieChart width={300} height={286} margin={{ top: 5, right: 10, bottom: 20, left: 10 }}  >
          <Pie data={data} dataKey="value" nameKey="name" cx="60%" cy="40%" outerRadius={100} fill="#142667" />
          <Legend verticalAlign="bottom" align="right" layout="vertical"/>
          {data.map((entry, index) => (
            <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </PieChart>   
      </CardContent>


    </Card>

  )

}
