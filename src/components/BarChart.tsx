import { EChartsOption } from "echarts"
import { useEffect, useState } from "react"
import { RenderEChart } from "./RenderEChart"

export function BarChart () {

  const [option, setOption] = useState<EChartsOption>({
    title: {
      text: 'Bar charts'
    },
    tooltip: {},
  })

  useEffect(() => {
    update()
    setInterval(update, 2000)
  }, [])

  function update () {    
    setOption({
      legend: {
        data: ['sales']
      },
      xAxis: {
        data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']
      },
      yAxis: {},
      series: [
        {
          name: 'sales',
          type: 'bar',
          data: Array(6).fill(0).map(() => 60 * Math.random())
        }
      ]
    })
  }

  return (
  <div className="container">
    <RenderEChart option={option} />
  </div>
  )
}