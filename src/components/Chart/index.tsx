import React, { useEffect, useState } from 'react'
import { useTheme } from '@emotion/react'
import { Line, Chart } from 'react-chartjs-2'
import { Spinner } from '../Spinner'
import { NoDataBoard, ChartWrapper, ChartLoadingBoard } from './Styled'

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

  const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'item1',
        data: [12, 19, 3, 5, 2, 3],
        fill: true,
        backgroundColor: generateGradient(
          theme.colors?.primary?.toString() || ''
        ),
        legendBackgroundColor: theme.colors?.primary,
        borderColor: theme.colors?.primary,
        pointStyle: 'circle',
        pointRadius: 6,
        pointHitRadius: 6,
        pointBorderColor: theme.colors?.primary,
        pointBackgroundColor: 'black',
      },
      {
        label: 'item2',
        data: [1, 7, 3, 12, 5, 3],
        fill: true,
        backgroundColor: generateGradient(
          theme.colors?.secondary?.toString() || ''
        ),
        borderColor: theme.colors?.secondary,
        legendBackgroundColor: theme.colors?.secondary,
        pointStyle: 'circle',
        pointRadius: 6,
        pointHitRadius: 6,
        pointBorderColor: theme.colors?.secondary,
        pointBackgroundColor: 'black',
      },
      {
        label: 'item3',
        data: [14, 16, 10, 7, 4, 9],
        fill: true,
        backgroundColor: generateGradient(theme.colors?.text?.toString() || ''),
        borderColor: theme.colors?.text,
        legendBackgroundColor: theme.colors?.text,
        pointStyle: 'circle',
        pointRadius: 6,
        pointHitRadius: 6,
        pointBorderColor: theme.colors?.text,
        pointBackgroundColor: 'black',
      },
    ],
  }

  const options = {
    scales: {
      x: {
        grid: {
          display: true,
          borderColor: theme.colors?.text,
        },
      },
      y: {
        grid: {
          dispaly: true,
          borderColor: theme.colors?.text,
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        align: 'start',
        labels: {
          pointStyle: 'circle',
          usePointStyle: true,
          padding: 30,
        },
      },
      tooltip: {
        yAlign: 'bottom',
        xAlign: 'center',
        callbacks: {
          label: (context: Object) => {
            let label = ''
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(context.parsed.y)
            }
            return label
          },
        },
      },
    },
  }

  const plugin = {
    id: 'custom_legend_title_color',
    beforeDraw: (chart) => {
      chart.config.data.datasets.forEach((dataset, i) => {
        if (dataset.legendBackgroundColor) {
          chart.legend.legendItems[i].fillStyle = dataset.legendBackgroundColor
          chart.legend.legendItems[i].fontColor = dataset.legendBackgroundColor
          chart.legend.legendItems[i].text = 'ITEM'
        }
      })
    },
  }

  if (loading) {
    return (
      <ChartWrapper width={getChartWidth()}>
        <p> Loading Data </p>
        <ChartLoadingBoard background={theme.colors?.background?.toString()}>
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
        >
          <div>
            <p> SORRY: </p>
            <h1> NO DATA (YET) </h1>
          </div>
        </NoDataBoard>
      </ChartWrapper>
    )
  }

  return (
    <>
      <ChartWrapper width={getChartWidth()}>
        <Line data={data} options={options} plugins={[plugin]} />
      </ChartWrapper>
    </>
  )
}
