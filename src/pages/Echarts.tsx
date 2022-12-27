import { useEffect, useState } from "react"
import { Chart } from "../components/Chart"

export function Echarts () {

  const [option, setOption] = useState<any>({})

  useEffect(() => {
    update() // Getting initial value
  }, [])

  function update () {
    setOption({
      title: {
        text: 'Bar charts'
      },
      tooltip: {},
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
    <h1>eCharts with React</h1>
    <Chart option={option} />
    <p style={{textAlign: 'center'}}>
      <button onClick={update}>Update</button>
    </p>
  </div>
  )
}