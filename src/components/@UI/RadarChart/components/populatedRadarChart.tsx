import React from 'react'
import { useTheme } from '@emotion/react'
import { format } from 'date-fns'
import ReactApexChart from 'react-apexcharts'

interface PopulatedRadarChartProps {
  chartData: {
    series: {
      name: string
      data: number[]
    }[]
    labels: string[]
  }
}

const PopulatedRadarChart = ({ chartData }: PopulatedRadarChartProps) => {
  const theme = useTheme()

  return (
    <ReactApexChart
      type="radar"
      series={chartData.series}
      labels={chartData.labels}
      width="100%"
      height="100%"
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
          animations: {
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

          custom: function ({ dataPointIndex }: { dataPointIndex: number }) {
            const label = chartData.labels[dataPointIndex]
            const value = chartData.series[0].data[dataPointIndex]

            return `
                <div style="background-color: ${theme.rawColors['grey-900']}; border-radius: 5px; color: white; padding: 12px; font-weight: 600; font-size: 1rem;">
                  <div style="color: ${theme.rawColors.blue}">${label}</div>
                  <div style="font-size: 0.9rem; color: ${theme.rawColors.white}">${value}%</div>
              </div>
            `
          },
        },
        yaxis: {
          show: false,
          labels: {
            show: true,
            style: {
              colors: theme.rawColors['grey-200'],
              fontSize: '.75rem',
              fontFamily: 'proxima-nova, sans-serif',
            },
            formatter: (value: number) => value + '%',
          },
        },
        xaxis: {
          categories: chartData.labels,
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: true,
          },
          tooltip: {
            enabled: false,
          },
        },
        colors: [theme.rawColors.primary],
        markers: {
          size: 2,
          colors: [theme.rawColors.primary],
          strokeColors: [theme.rawColors.primary],
        },
      }}
    />
  )
}

export default PopulatedRadarChart
