import React, { useEffect, useState, useRef } from 'react'
import { useTheme } from '@emotion/react'
import Chart from 'react-apexcharts'
import ApexCharts from 'apexcharts'
// import { Spinner } from '../Spinner'
import {
  NoDataBoard,
  ChartWrapper,
  ChartLoadingBoard,
  FilterWrapper,
  FilterButton,
  CustomLegendWrapper,
  CustomLegend,
} from './Styled'
import './index.css'

export interface ChartProps {
  loading?: boolean
  noData?: boolean
  error?: boolean
  size?: 'tiny' | 'small' | 'medium' | 'large'
}

export const ChartArea = ({
  loading = false,
  noData = false,
  error = false,
  size = 'medium',
}: ChartProps) => {
  const theme = useTheme()
  const [filter, setFilter] = useState(0)
  const [filterStatus, setFilterStatus] = useState([true, true])

  const getChartWidth = () => {
    switch (size) {
      case 'tiny':
        return 375
      case 'small':
        return 640
      case 'medium':
        return 876
      case 'large':
        return 1044
    }
  }

  const getChartHeight = () => {
    switch (size) {
      case 'tiny':
        return 165
      case 'small':
        return 290
      case 'medium':
        return 275
      case 'large':
        return 290
    }
  }

  if (loading) {
    return (
      <ChartWrapper width={getChartWidth()}>
        <p> Loading Data </p>
        <ChartLoadingBoard background={theme.colors?.['grey-900']?.toString()}>
          {/* <Spinner /> */}
        </ChartLoadingBoard>
      </ChartWrapper>
    )
  }

  if (error) {
    return (
      <ChartWrapper width={getChartWidth()}>
        <NoDataBoard
          borderColor={theme.colors?.text?.toString()}
          color={theme.colors?.text?.toString()}
          font={theme.fonts.body}
        >
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
      <ChartWrapper width={getChartWidth()}>
        <NoDataBoard
          color={theme.colors?.text?.toString()}
          borderColor={theme.colors?.text?.toString()}
          font={theme.fonts.body}
        >
          <div>
            <p> SORRY: </p>
            <h1> NO DATA (YET) </h1>
          </div>
        </NoDataBoard>
      </ChartWrapper>
    )
  }

  const colors = [
    theme.colors.primary.toString(),
    theme.colors.secondary.toString(),
  ]

  const options = {
    chart: {
      id: 'myChart',
      height: getChartHeight(),
      type: 'area',
    },
    dataLabels: {
      enabled: false,
    },
    colors,
    stroke: {
      curve: 'smooth',
    },
    grid: {
      show: false,
    },
    markets: {
      size: [4, 7],
      colors,
      strokeColors: colors,
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    legend: {
      show: false,
      horizontalAlign: 'left',
      fontSize: '14px',
      labels: {
        useSeriesColors: true,
      },
      markers: {
        width: 16,
        height: 16,
      },
    },
    tooltip: {
      enabled: true,
      shared: false,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return `
          <style>
            .apexcharts-tooltip {
              background: transparent!important;
              border: none!important;
              box-shadow: none!important;
            }
          </style>
          <div style="
            background: black; 
            border-radius: 1rem;
            padding: 0.1rem 1rem;
            font-family: Proxima Nova; 
            color: ${colors[seriesIndex]};
            border: 1px solid ${colors[seriesIndex]};
          ">
            $ ${series[seriesIndex][dataPointIndex]}
          </div>`
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

  const toggle = (value: number) => {
    ApexCharts.exec('myChart', 'toggleSeries', `series${value}`)
    const newStatus = [...filterStatus]
    newStatus[value - 1] = !newStatus[value - 1]
    setFilterStatus(newStatus)
  }

  return (
    <>
      <ChartWrapper width={getChartWidth()}>
        <Chart
          options={options}
          series={series}
          type="area"
          height={getChartHeight()}
          width={getChartWidth()}
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
            color={theme.colors?.primary?.toString()}
            onClick={() => toggle(1)}
          >
            <div />
            <span> SERIES 1 </span>
          </CustomLegend>
          <CustomLegend
            active={filterStatus[1]}
            color={theme.colors?.secondary?.toString()}
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
