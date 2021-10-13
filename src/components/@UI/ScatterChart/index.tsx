import React, { forwardRef, useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import { useTheme } from '@emotion/react'
import { CustomLegendWrapper } from './Styled'
import ButtonChartCollection from '../ButtonChartCollection'
import { toggle } from './utils'

export interface ScatterChartProps {
  data: Array<object>
}

const ScatterChart = forwardRef(
  (
    { data, ...props }: ScatterChartProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const theme = useTheme()
    const series = [
      {
        name: 'TEAM 1',
        data: generateDayWiseTimeSeries(
          new Date('11 Feb 2017 GMT').getTime(),
          20,
          {
            min: 10,
            max: 60,
          }
        ),
      },
      {
        name: 'TEAM 2',
        data: generateDayWiseTimeSeries(
          new Date('11 Feb 2017 GMT').getTime(),
          20,
          {
            min: 10,
            max: 60,
          }
        ),
      },
    ]
    const emptyFilters = series.map((_) => true)
    const [filterStatus, setFilterStatus] = useState(emptyFilters)

    function generateDayWiseTimeSeries(baseval, count, yrange) {
      var i = 0
      var series = []
      while (i < count) {
        var x = baseval
        var y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

        series.push([x, y])
        baseval += 86400000
        i++
      }
      return series
    }

    console.log({ series })
    const colors = [
      theme.rawColors.blue,
      theme.rawColors.pink,
      theme.rawColors.purple,
      theme.rawColors.yellow,
      theme.rawColors.red,
      theme.rawColors.green,
    ]
    const options = {
      ...(theme.chart.options as ApexOptions),
      chart: {
        id: 'upshotChart',
        type: 'area',
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
      colors,
      grid: {
        show: false,
        // padding: {
        //   left: 0,
        //   right: 0,
        //   top: 0,
        //   bottom: 0,
        // },
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          style: {
            colors: [theme.rawColors.white],
          },
          formatter: (value) => {
            return value
          },
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
          style: {
            colors: [theme.rawColors.white],
          },
          formatter: (value) => {
            const date = new Date(value)

            return `${date.getDate()}/${date.getDate()}/${date.getFullYear()}`
          },
        },
        tooltip: {
          enabled: false,
        },
      },
      tooltip: {
        enabled: true,
        started: false,
        custom: function ({
          dataPointIndex,
          w: {
            globals: { labels },
          },
        }) {
          return `
            <style>
              .apexcharts-tooltip {
                background: transparent!important;
                border: none!important;
                box-shadow: none!important;
              }
            </style>
          `
        },
      },
    }
    return (
      <>
        <ReactApexChart
          series={series}
          {...{ options }}
          type="scatter"
          height={350}
        />
        <CustomLegendWrapper>
          {[...new Array(series.length)].map((_, i) => (
            <ButtonChartCollection
              key={i}
              color={colors[i] as keyof typeof theme['colors']}
              title={series[i].name}
              selected={filterStatus[i]}
              onClick={() =>
                toggle(i, series[i].name, filterStatus, setFilterStatus)
              }
            />
          ))}
        </CustomLegendWrapper>
      </>
    )
  }
)

export default ScatterChart
