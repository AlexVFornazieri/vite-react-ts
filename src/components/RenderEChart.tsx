import { dispose, EChartsOption, EChartsType, getInstanceByDom, init } from 'echarts'
import { useEffect, useRef, useState } from 'react'

interface ChartTypes {
    option: EChartsOption
    width?: number | string
    height?: number | string
}

export function RenderEChart ({option, width = 600, height = 400}: ChartTypes) {

  const charInstance = useRef<any>(null)
  const chartRef = useRef(null)
  
    useEffect(() => {
      if(!charInstance.current) {
        // Create a new chart instance
        const container = chartRef.current
        
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
        charInstance.current = init(container)
        return
      }
      // Updating existent instance option (merge)
      charInstance.current.setOption(option)
      }, [option])
    
      return (
        <div ref={chartRef} style={{ width, height, overflow: 'hidden' }} />
      )
}