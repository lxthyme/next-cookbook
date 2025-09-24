import { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

export default function ECharts({ option }) {
  const chartRef = useRef(null)

  useEffect(() => {
    const chart = echarts.init(chartRef.current)
    chart.setOption(option)

    return () => chart.dispose()
  }, [option])

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
}
