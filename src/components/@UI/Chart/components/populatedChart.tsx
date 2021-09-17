import React, { useState } from 'react'
import { default as ReactApexCharts } from 'react-apexcharts'
import { useTheme } from '@emotion/react'
import { ApexOptions } from 'apexcharts'

import {
  CustomLegendWrapper,
} from '../Styled'
import { getOptions, toggle } from '../utils'
import ButtonChartCollection from '../../ButtonChartCollection'

interface PopulatedChartProps {
  chartData: {
    name: string
    data: number[] | (Date | number)[][]
  }[]
  embedded: boolean
}

const PopulatedChart = ({chartData, embedded}: PopulatedChartProps) => {
  const theme = useTheme()
  const [filterStatus, setFilterStatus] = useState(chartData.map((_) => true))

  const colors = [
    'primary',
    'secondary',
    'purple',
  ]
  const options: ApexOptions = getOptions(
    theme,
    chartData,
    embedded,
  )

  return (
    <>
      <ReactApexCharts
        series={chartData}
        type="area"
        height="100%"
        width="100%"
        {...{ options }}
      />
      {
        !embedded &&
          <CustomLegendWrapper>
            {[...new Array(chartData.length)].map((_, i) => (
              <ButtonChartCollection
                key={i}
                color={colors[i]}
                title={chartData[i].name}
                selected={filterStatus[i]}
                onClick={() =>
                  toggle(
                    i,
                    chartData[i].name,
                    filterStatus,
                    setFilterStatus,
                  )
                } 
              />
            ))}
          </CustomLegendWrapper>
        }
    </>
  )
}

export default PopulatedChart
