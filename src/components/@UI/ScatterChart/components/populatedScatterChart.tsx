import React, { useState } from 'react'
import { useTheme } from '@emotion/react'
import { format } from 'date-fns'
import ApexCharts from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { CustomLegendWrapper, TimeFilter, TimeFilterWrapper } from '../Styled'
import ButtonChartCollection from '../../ButtonChartCollection'
import { toggle } from '../../Chart/utils'
import colors from '../../../../themes/UpshotUI/colors'
import { useBreakpointIndex } from '../../../..'

type ChartData = {
  name: string
  data: any[]
  labelColor?: keyof typeof colors
}

interface PopulatedScatterChartProps {
  chartData: ChartData[]
}

const PopulatedScatterChart = ({ chartData }: PopulatedScatterChartProps) => {
  const theme = useTheme()
  const breakpointIndex = useBreakpointIndex()
  const emptyFilters = chartData.map((_) => true)
  const [filterStatus, setFilterStatus] = useState(emptyFilters)
  const [timeFilter, setTimeFilter] = useState(3)
  const timeFilters = ['1H', '1D', '1W', '1M']

  const getTimePeriod = (id: number) => {
    switch (id) {
      case 0:
        return 3600000
      case 1:
        return 86400000
      case 2:
        return 604800000
      case 3:
        return 2592000000
      // case 4:
      //   return 0
    }
  }
  const markerColors = [theme.rawColors.blue, theme.rawColors.pink]

  let highGMISeries: ChartData = { name: 'Based', data: [], labelColor: 'pink' };
  let lowGMISeries: ChartData = { name: 'NGMI', data: [], labelColor: 'blue' };

  let min = chartData[0].data[0][0]
  chartData[0].data.forEach((info: any) => {
    if (min > info[0]) min = info[0]

    if(info[4] > 900) highGMISeries.data.push(info);
    else lowGMISeries.data.push(info);
  })

  return (
    <>
      <ReactApexChart
        series={[highGMISeries, lowGMISeries]}
        type="scatter"
        height={300}
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

            custom: function ({
              seriesIndex,
              dataPointIndex,
              w,
            }: {
              seriesIndex: number
              dataPointIndex: number
              w: any
            }) {
              const name = w.globals.initialSeries[seriesIndex].name
              const [timestamp, price, tokenId, buyer, buyerGMI] = w.globals
                .initialSeries[seriesIndex].data[dataPointIndex] as any

              return `
                <div style="background-color: ${
                  theme.rawColors['grey-900']
                }; border-radius: 5px; color: white; padding: 12px; font-weight: 600; font-size: 1rem;">
                  <div style="color: ${
                    theme.rawColors.blue
                  }">${name} #${tokenId}</div>
                  <div style="font-size: 0.9rem; color: ${
                    theme.rawColors.white
                  }">${format(timestamp, 'MM/dd/yyyy')} (Ξ${price})</div>
                  <div style="display: flex; align-items: center; font-weight: 400; font-size: 0.9rem; color: ${
                    theme.rawColors['grey-400']
                  };">
                    <div style="width:5px; height: 5px; border-radius: 50%; background-color: ${
                      theme.rawColors.purple
                    }; margin-right: 4px;"></div>
                  ${buyer}</div>
                  <div>${buyerGMI}</div>
              </div>
            `
            },
          },
          yaxis: {
            show: true,
            labels: {
              show: true,
              align: 'left',
              style: {
                colors: theme.rawColors['grey-200'],
                fontSize: '.75rem',
                fontFamily: 'proxima-nova, sans-serif',
              },
              formatter: (value: number) => 'Ξ' + value,
              offsetX: -15,
            },
            forceNiceScale: true,
          },
          xaxis: {
            type: 'datetime',
            tickAmount: breakpointIndex <= 1 ? 3 : 8,
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
                fontFamily: 'proxima-nova, sans-serif',
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
          colors: markerColors,
          markers: {
            size: 6,
            colors: markerColors,
            strokeColors: markerColors,
          },
        }}
      />
      <TimeFilterWrapper>
        {timeFilters.map((filter, id) => (
          <TimeFilter
            onClick={() => {
              setTimeFilter(id)
              const timePeriod = getTimePeriod(id)
              if (timePeriod) {
                ApexCharts.exec(
                  'upshotChart',
                  'zoomX',
                  new Date(Date.now() - timePeriod).getTime(),
                  Date.now()
                )
              } else {
                ApexCharts.exec('upshotChart', 'zoomX', min, Date.now())
              }
            }}
            active={id === timeFilter}
          >
            {filter}
          </TimeFilter>
        ))}
      </TimeFilterWrapper>
    </>
  )
}

export default PopulatedScatterChart
