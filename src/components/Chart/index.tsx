import React, { useEffect, useState, useRef } from 'react'
import { useTheme } from '@emotion/react'
import Chart from 'react-apexcharts'
import ApexCharts from 'apexcharts'
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
import './index.css'

export interface ChartProps {
  loading?: boolean
  noData?: boolean
  error?: boolean
  noSelected?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg'
}

export const ChartArea = ({
  loading = false,
  noData = false,
  error = false,
  noSelected = false,
  size = 'md',
}: ChartProps) => {
  const theme = useTheme()
  const [filter, setFilter] = useState(0)
  const [filterStatus, setFilterStatus] = useState([true, true])

  const colors = [
    theme.colors.primary.toString(),
    theme.colors.secondary.toString(),
  ]

  const options = {
    ...theme.chart.options,
    chart: {
      id: 'myChart',
      type: 'area',
    },
    colors,
    markets: {
      size: [4, 7],
      colors,
      strokeColors: colors,
    },
    tooltip: {
      enabled: true,
      shared: false,
      custom: function ({ series, seriesIndex, dataPointIndex, w, ...props }) {
        const x = w.globals.clientX
        let offset

        if (x <= theme.chart.size[size].width / 2) {
          offset = 'calc(-50% - 12px)'
        } else {
          offset = 'calc(50% + 9.5px)'
        }

        return `
          <style>
            .apexcharts-tooltip {
              background: transparent!important;
              border: none!important;
              box-shadow: none!important;
              transform: translateX(${offset}) translateY(-10px);
              overflow: visible;
            }
          </style>
          <div style="
            position: relative;
            background: black;
            border-radius: 1rem;
            padding: 0.1rem 1rem;
            overflow: visible;
            font-family: Arial;
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
  const series = [
    {
      name: 'series1',
      data: [31, 40, 28, 32, 51, 42, 109, 100],
    },
    {
      name: 'series2',
      data: [11, 32, 45, 32, 33, 34, 52, 41],
    },
  ]

  if (loading) {
    return (
      <ChartWrapper width={theme.chart.size[size].width}>
        <ChartLoadingBoard />
      </ChartWrapper>
    )
  }

  if (error) {
    return (
      <ChartWrapper width={theme.chart.size[size].width}>
        <NoDataBoard>
          <div>
            <p> SORRY: </p>
            <h1> ERROR LOADING DATA </h1>
          </div>
        </NoDataBoard>
      </ChartWrapper>
    )
  }

  if (noData) {
    return (
      <ChartWrapper width={theme.chart.size[size].width}>
        <NoDataBoard>
          <div>
            <p> SORRY: </p>
            <h1> NO DATA (YET) </h1>
          </div>
        </NoDataBoard>
      </ChartWrapper>
    )
  }

  if (noSelected) {
    return (
      <ChartWrapper width={theme.chart.size[size].width}>
        <ChartNoSelectedWrapper>
          <Chart
            options={options}
            series={theme.chart.defaultSeries}
            type="area"
            height={theme.chart.size[size].height}
            width={theme.chart.size[size].width}
          />
          <ChartNoSelectedTextArea>
            <div>
              <p> NOTHING SELECTED: </p>
              <h1>
                {' '}
                SELECT A COLLECTION (OR MULITPLE) <br /> FROM THE CONTAINER
                BELOW.{' '}
              </h1>
            </div>
          </ChartNoSelectedTextArea>
        </ChartNoSelectedWrapper>
      </ChartWrapper>
    )
  }

  const toggle = (value: number) => {
    ApexCharts.exec('myChart', 'toggleSeries', `series${value}`)
    const newStatus = [...filterStatus]
    newStatus[value - 1] = !newStatus[value - 1]
    setFilterStatus(newStatus)
  }

  return (
    <>
      <ChartWrapper width={theme.chart.size[size].width}>
        <Chart
          options={options}
          series={series}
          type="area"
          height={theme.chart.size[size].height}
          width={theme.chart.size[size].width}
        />
        <FilterWrapper>
          <FilterButton active={filter === 0} onClick={() => setFilter(0)}>
            1H
          </FilterButton>
          <FilterButton active={filter === 1} onClick={() => setFilter(1)}>
            1D
          </FilterButton>
          <FilterButton active={filter === 2} onClick={() => setFilter(2)}>
            1W
          </FilterButton>
          <FilterButton active={filter === 3} onClick={() => setFilter(3)}>
            1Y
          </FilterButton>
          <FilterButton active={filter === 4} onClick={() => setFilter(4)}>
            ALL
          </FilterButton>
        </FilterWrapper>
        <CustomLegendWrapper>
          <CustomLegend
            active={filterStatus[0]}
            color={theme.colors.primary}
            onClick={() => toggle(1)}
          >
            <div />
            <span> SERIES 1 </span>
          </CustomLegend>
          <CustomLegend
            active={filterStatus[1]}
            color={theme.colors.secondary}
            onClick={() => toggle(2)}
          >
            <div />
            <span> SERIES 2 </span>
          </CustomLegend>
        </CustomLegendWrapper>
      </ChartWrapper>
    </>
  )
}
