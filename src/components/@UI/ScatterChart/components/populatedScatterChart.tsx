import React from 'react'
import { useTheme } from '@emotion/react'
import { format } from 'date-fns'
import ReactApexChart from 'react-apexcharts'

interface PopulatedScatterChartProps {
  chartData: {
    name: string
    data: number[] | number[][] // Supports 1D line chart or 2D [timestamp, value] series
  }[]
}

const PopulatedScatterChart = ({ chartData }: PopulatedScatterChartProps) => {
  const theme = useTheme()

  return (
    <ReactApexChart
      series={chartData}
      type="scatter"
      height="100%"
      width="100%"
      options={{
        chart: {
          id: 'upshotChart',
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
          sparkline: {
            enabled: false,
          },
        },
        stroke: {
          width: 2.5,
        },
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        tooltip: {
          enabled: true,
          theme: 'dark',
          y: {
            formatter: (value: number) => 'Ξ' + value,
          },
        },
        yaxis: {
          show: false,
          labels: {
            show: false,
          },
          forceNiceScale: true,
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: true,
            rotate: 0,
            style: {
              colors: theme.rawColors['grey-200'],
              fontSize: '.75rem',
            },
            formatter: (value: string) => {
              if (!value) return null

              return format(Number(value), 'MM/dd/yy')
            },
          },
          tooltip: {
            enabled: false,
          },
        },
        colors: [theme.rawColors.primary],
        markers: {
          size: 4,
          colors: [theme.rawColors.primary],
          strokeColors: [theme.rawColors.primary],
        },
      }}
    />
  )
}

export default PopulatedScatterChart
