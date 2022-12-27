import { EChartsOption } from "echarts";
import { useEffect, useState } from "react"
import { gaugeOption } from "./GaugeOption"
import { RenderEChart } from "./RenderEChart";

export function GaugesChart () {

  const [option, setOption] = useState<EChartsOption>(gaugeOption)

  useEffect(() => {
    setInterval(() => {
      const random = +(Math.random() * 60).toFixed(2);
      setOption({
        series: [
          {data: [{value: random}]},
          {data: [{value: random}]}
        ]
      });
    }, 2000);
  }, [])

  return (
  <div className="container">
    <RenderEChart option={option} />
  </div>
  )
}