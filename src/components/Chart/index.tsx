import React, { useEffect, useState } from 'react'
import { useTheme } from '@emotion/react'
import Chart from 'react-apexcharts'
import { Spinner } from '../Spinner'
import { NoDataBoard, ChartWrapper, ChartLoadingBoard, Tooltip } from './Styled'
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
  const canvas = document.createElement('canvas')
  const ctx = (canvas as HTMLCanvasElement)?.getContext('2d')

  const getChartWidth = () => {
    switch (size) {
      case 'tiny':
        return 336
      case 'small':
        return 776
      case 'medium':
        return 912
      case 'large':
        return 1080
    }
  }

  const generateGradient = (color: string) => {
    const gradient = (ctx as CanvasRenderingContext2D)?.createLinearGradient(
      0,
      -100,
      0,
      getChartWidth() / 2 + 200
    )
    gradient?.addColorStop(0, color)
    gradient?.addColorStop(1, 'transparent')

    return gradient
  }

  if (loading) {
    return (
      <ChartWrapper width={getChartWidth()}>
        <p> Loading Data </p>
        <ChartLoadingBoard background={theme.colors?.['grey-900']?.toString()}>
          <Spinner />
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
      height: 350,
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
      type: 'category',
      categories: ['1H', '1D', '1W', '1Y', 'ALL'],
    },
    legend: {
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

  return (
    <>
      <ChartWrapper width={getChartWidth()}>
        <Chart options={options} series={series} type="area" />
      </ChartWrapper>
    </>
  )
}
