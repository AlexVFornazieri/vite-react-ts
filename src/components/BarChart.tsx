import { EChartsOption } from "echarts"
import { useEffect, useState } from "react"
import { RenderEChart } from "./RenderEChart"

export function BarChart () {

  const [ width, setWidth] = useState<number>(300)
  const [ height, setHeight] = useState<number>(300)


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


  function updateWidth (e: any) {
    setWidth(parseInt(e.target.value))
  }

  function updateHeight (e: any) {
    setHeight(parseInt(e.target.value))
  }

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
    <label>Height</label>
    <input type="number" onChange={updateHeight} value={height} />
    <label >Width</label>
    <input type="number" onChange={updateWidth} value={width}/>
    <RenderEChart option={option} width={width} height={height} />
  </div>
  )
}