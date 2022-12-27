import { dispose, EChartsOption, getInstanceByDom, init } from 'echarts'
import { useEffect } from 'react'

interface ChartTypes {
    option: any
    width?: number | string
    height?: number | string
}

export function Chart ({option, width = 600, height = 400}: ChartTypes) {
    useEffect(() => {
        const container = document.getElementById('chart')
        
        if(!container) {
          console.log('Can\'t find chart container' )
          return
        }
    
        // Disposing previous instances
        const instance = getInstanceByDom(container)
        if(instance) {
          dispose(instance)
        }
    
        const chart = init(container)
    
        chart.setOption(option)
      }, [option])
    
    
      return (
        <div id="chart" style={{ width, height }} />
      )
}