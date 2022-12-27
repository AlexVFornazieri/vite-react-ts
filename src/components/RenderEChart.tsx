import { dispose, EChartsOption, EChartsType, getInstanceByDom, init } from 'echarts'
import { useEffect, useState } from 'react'
import { v1 as uuid } from 'uuid'

interface ChartTypes {
    option: EChartsOption
    width?: number | string
    height?: number | string
}

export function RenderEChart ({option, width = 600, height = 400}: ChartTypes) {

  const [chart, setChart] = useState<EChartsType>()
  
  // Random id for chart container
  const id = 'eChart_' + uuid()

    useEffect(() => {
      if(!chart) {
        // Create a new chart instance
        const container = document.getElementById(id)
        
        if(!container) {
          console.error('Can\'t find chart container' )
          return
        }
    
        // Disposing previous instances
        const instance = getInstanceByDom(container)
        if(instance) {
          dispose(instance)
        }

        //Set instance to state
        setChart(init(container))
        return
      }
      // Updating existent instance option (merge)
      chart.setOption(option)
      }, [option, chart])
    
      return (
        <div id={id} style={{ width, height, overflow: 'hidden' }} />
      )
}