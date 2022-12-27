import { BarChart } from "../components/BarChart";
import { GaugesChart } from "../components/GaugesChart";

export function Echarts () {
  return (
  <div className="container">
    <h1>eCharts with React</h1>
    <BarChart />
    <GaugesChart />
  </div>
  )
}