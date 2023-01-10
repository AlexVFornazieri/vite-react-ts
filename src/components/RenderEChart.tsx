import { dispose, EChartsOption, EChartsType, getInstanceByDom, init } from 'echarts'
import { useEffect, useRef, useState } from 'react'

interface ChartTypes {
    option: EChartsOption
    width?: number
    height?: number
}

export function RenderEChart ({option, width = 600, height = 400}: ChartTypes) {

  const charInstance = useRef<EChartsType | null>(null)
  const chartRef = useRef<HTMLObjectElement>(null)

    useEffect(() => {
      const container = chartRef.current
      
      if(!container) {
        console.error('Can\'t find chart container' )
        return
      }
  
      if(!charInstance.current) {
        // Disposing previous instances
        const instance = getInstanceByDom(container)
        instance && dispose(instance)

        // Create a new chart instance and set in ref
        charInstance.current = init(container)
        return
      }

      // Check for chart size changes
      if(width !== charInstance.current.getWidth()
        || height !== charInstance.current.getHeight()) {

          // Resize chart
          charInstance.current.resize({
            width,
            height
          })
      }

      // Updating existent instance option (merge)
      charInstance.current.setOption(option)
      
      }, [option, width, height])
    
      return (
        <div ref={chartRef} style={{width, height, overflow: 'hidden'}} />
      )
}