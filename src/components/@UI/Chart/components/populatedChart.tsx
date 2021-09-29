import React, { useState, useMemo } from 'react'
import { useTheme } from '@emotion/react'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

import { CustomLegendWrapper } from '../Styled'
import { getOptions, toggle } from '../utils'
import ButtonChartCollection from '../../ButtonChartCollection'
import ChartLabel from '../../ChartLabel'
import Grid from '../../../Layout/Grid'

interface PopulatedChartProps {
  chartData: {
    name: string
    data: number[] | (Date | number)[][]
    currentValue: {
      timestamp: number
      value: number
    }
    ath: number
    atl: number
  }[]
  embedded: boolean
}

const PopulatedChart = ({
  chartData,
  embedded,
}: PopulatedChartProps) => {
  const theme = useTheme()
  const [filterStatus, setFilterStatus] = useState(chartData.map((_) => true))
  const [hoverValues, setHoverValues] = useState(chartData.map(set => [set.currentValue?.timestamp, set.currentValue?.value]))
  const [temporaryValue, setTemporaryValue] = useState([])

  useMemo(() => {
    let newHoverValues = hoverValues
    newHoverValues[temporaryValue[0]] = [temporaryValue[1], temporaryValue[2]]
    setHoverValues(newHoverValues)
  }, [temporaryValue])

  const handleHover = () => (e: React.MouseEvent, ctx: any, data: any) => {
    const { dataPointIndex } = data
    const dataPoint = chartData?.[data.seriesIndex]?.data?.[dataPointIndex]
    setTemporaryValue([data.seriesIndex, ...dataPoint])
  }

  const colors = ['blue', 'pink', 'purple', 'yellow', 'red', 'green']
  const options: ApexOptions = getOptions(theme, chartData, {
    mouseMove: handleHover(),
  })

  const chartLabels = () => {
    return chartData.map((set, i) => {
      return (
        <ChartLabel
          key={i}
          variant={
            chartData.length > 1
              ? 'multi'
              : 'alone'
          }
          title={set.name}
          price_1={hoverValues[i][1]?.toString()}
          date={new Date(hoverValues[i][0]).toLocaleString()}
          atl={set.atl?.toString()}
          ath={set.ath?.toString()}
          
        />
      )
    })
  }

  const columns = () => {
    return chartData.length > 1
      ? [2, 2, 3, 5]
      : 1
  }

  return (
    <>
      {
        !embedded && (
          <Grid columns={columns()}>
            {chartLabels()}
          </Grid>
        )
      }
      <ReactApexChart
        series={chartData}
        type="area"
        height="100%"
        width="100%"
        embedded={+embedded}
        {...{ options }}
      />
      {!embedded && (
        <CustomLegendWrapper>
          {[...new Array(chartData.length)].map((_, i) => (
            <ButtonChartCollection
              key={i}
              color={colors[i] as keyof typeof theme['colors']}
              title={chartData[i].name}
              selected={filterStatus[i]}
              onClick={() =>
                toggle(i, chartData[i].name, filterStatus, setFilterStatus)
              }
            />
          ))}
        </CustomLegendWrapper>
      )}
    </>
  )
}

export default PopulatedChart
