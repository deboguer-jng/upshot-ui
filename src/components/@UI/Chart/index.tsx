import React, { useState } from 'react'
import { useTheme } from '@emotion/react'
import { default as ReactApexCharts } from 'react-apexcharts'
import { Text } from 'theme-ui'
import ApexCharts, { ApexOptions } from 'apexcharts'
import {
  NoDataBoard,
  ChartWrapper,
  ChartLoadingBoard,
  FilterWrapper,
  FilterButton,
  CustomLegendWrapper,
  CustomLegend,
  ChartNoSelectedWrapper,
  ChartNoSelectedTextArea,
} from './Styled'
import Spinner from '../Spinner'

export interface ChartProps {
  loading?: boolean
  noData?: boolean
  error?: boolean
  noSelected?: boolean
  data?: {
    name: string
    data: number[]
  }[]
}

export default function Chart({
  loading = false,
  noData = false,
  error = false,
  noSelected = false,
  data = [],
}: ChartProps) {
  const theme = useTheme()
  const [filter, setFilter] = useState(0)
  const [filterStatus, setFilterStatus] = useState(data.map((_) => true))

  const colors = [theme.rawColors.primary, theme.rawColors.secondary]
  const filterLabels = ['1H', '1D', '1W', '1Y', 'ALL']

  const options: ApexOptions = {
    ...(theme.chart.options as ApexOptions),
    chart: {
      id: 'myChart',
      type: 'area',
    },
    colors,
    fill: {
      type: 'gradient',
      gradient: {
        gradientToColors: [
          ...new Array(data.length || theme.chart.defaultSeries.length),
        ].map((_) => 'transparent'),
        opacityFrom: 0.9,
        opacityTo: 0.6,
        stops: [0, 90, 100],
      },
    },
    markers: {
      colors,
      strokeColors: colors,
    },
    tooltip: {
      enabled: true,
      shared: false,
      custom: function ({
        series,
        seriesIndex,
        dataPointIndex,
        w: {
          globals: { clientX: x, svgWidth: width },
        },
      }) {
        const offset =
          x <= width / 2 ? 'calc(-50% - 12px)' : 'calc(50% + 9.5px)'

        return `
          <style>
            .apexcharts-tooltip {
              background: transparent!important;
              border: none!important;
              box-shadow: none!important;
              transform: translateX(${offset}) translateY(-10px);
              overflow: visible;
            }
            .apexcharts-xaxistooltip, .apexcharts-yaxistooltip {
              background: black;
              color: ${theme.rawColors.text};
              border-radius: ${theme.radii.pill};
              font-size: ${theme.fontSizes[0]};
            }
          </style>
          <div style="
            position: relative;
            background: black;
            border-radius: 1rem;
            padding: 0.1rem 1rem;
            overflow: visible;
            font-family: ${theme.fonts.body};
            color: ${colors[seriesIndex]};
            border: 1px solid ${colors[seriesIndex]};
          " id="apexcharts-custom-tooltip"
          >
            $ ${series[seriesIndex][dataPointIndex]}
            <div style="
              position: absolute;
              bottom: -6px;
              left: 50%;
              transform: translateX(-50%) rotate(-45deg);
              width: 10px;
              height: 10px;
              background: black;
              border-left: 1px solid ${colors[seriesIndex]};
              border-bottom: 1px solid ${colors[seriesIndex]};
            ">
            </div>
          </div>
          `
      },
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  }

  if (loading) {
    return (
      <ChartWrapper>
        <div>
          <ChartLoadingBoard>
            <Spinner />
          </ChartLoadingBoard>
        </div>
      </ChartWrapper>
    )
  }

  if (error) {
    return (
      <ChartWrapper>
        <div>
          <NoDataBoard>
            <div>
              <Text variant="largeWhite" sx={{ display: 'block' }}>
                Sorry
              </Text>
              <Text variant="h1PrimaryWhite" sx={{ lineHeight: 'heading' }}>
                Error loading data
              </Text>
            </div>
          </NoDataBoard>
        </div>
      </ChartWrapper>
    )
  }

  if (noData) {
    return (
      <ChartWrapper>
        <div>
          <NoDataBoard>
            <div>
              <Text variant="largeWhite" sx={{ display: 'block' }}>
                Sorry:
              </Text>
              <Text variant="h1PrimaryWhite" sx={{ lineHeight: 'heading' }}>
                No data (yet)
              </Text>
            </div>
          </NoDataBoard>
        </div>
      </ChartWrapper>
    )
  }

  if (noSelected) {
    return (
      <ChartWrapper>
        <div>
          <ChartNoSelectedWrapper>
            <ReactApexCharts
              series={theme.chart.defaultSeries}
              type="area"
              height="100%"
              width="100%"
              {...{ options }}
            />
            <ChartNoSelectedTextArea>
              <div>
                <Text variant="largeWhite" sx={{ display: 'block' }}>
                  Nothing selected.
                </Text>
                <Text variant="h1PrimaryWhite" sx={{ lineHeight: 'heading' }}>
                  Select a collection (or multiple)
                  <br />
                  from the container below.
                </Text>
              </div>
            </ChartNoSelectedTextArea>
          </ChartNoSelectedWrapper>
        </div>
      </ChartWrapper>
    )
  }

  const toggle = (idx: number, seriesName: string) => {
    ApexCharts.exec('myChart', 'toggleSeries', seriesName)

    const newStatus = [...filterStatus]
    newStatus[idx] = !newStatus[idx]
    setFilterStatus(newStatus)
  }

  return (
    <ChartWrapper>
      <div>
        <ReactApexCharts
          series={data}
          type="area"
          height="100%"
          width="100%"
          {...{ options }}
        />
        <FilterWrapper>
          {[...new Array(5)].map((_, i) => (
            <FilterButton
              key={i}
              active={filter === i}
              onClick={() => setFilter(i)}
            >
              {filterLabels[i]}
            </FilterButton>
          ))}
        </FilterWrapper>
        <CustomLegendWrapper>
          {[...new Array(data.length)].map((_, i) => (
            <CustomLegend
              key={i}
              active={filterStatus[i]}
              color={colors[i]}
              onClick={() => toggle(i, data[i].name)}
            >
              <div />
              <Text>{data[i].name}</Text>
            </CustomLegend>
          ))}
        </CustomLegendWrapper>
      </div>
    </ChartWrapper>
  )
}
