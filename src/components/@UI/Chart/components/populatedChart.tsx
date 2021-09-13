import React, { useState } from 'react'
import { default as ReactApexCharts } from 'react-apexcharts'
import { useTheme } from '@emotion/react'
import { ApexOptions } from 'apexcharts'
import { Text } from 'theme-ui'

import {
  FilterWrapper,
  FilterButton,
  CustomLegendWrapper,
  CustomLegend,
} from '../Styled'
import { getOptions, toggle } from '../utils'

interface PopulatedChartProps {
  chartData: {
    name: string
    data: number[],
  }[],
  embedded: boolean,
}

const PopulatedChart = ({chartData, embedded}: PopulatedChartProps) => {
  const theme = useTheme()
  const [filter, setFilter] = useState(0)
  const [filterStatus, setFilterStatus] = useState(chartData.map((_) => true))

  const colors = [
    theme.rawColors.primary,
    theme.rawColors.secondary,
    theme.rawColors.purple,
  ]
  const filterLabels = ['1H', '1D', '1W', '1Y', 'ALL']
  const options: ApexOptions = getOptions(theme, chartData, embedded)

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
          <>
            <FilterWrapper>
              {[...new Array(5)].map((_, i) => (
                <FilterButton
                  key={i}
                  active={filter === i}
                  onClick={() => setFilter(i)}
                >
                  {filterLabels[i]}
                </FilterButton>
              ))
            }
          </FilterWrapper>
          <CustomLegendWrapper>
            {[...new Array(chartData.length)].map((_, i) => (
              <CustomLegend
                key={i}
                active={filterStatus[i]}
                color={colors[i]}
                onClick={() =>
                  toggle(i, chartData[i].name, filterStatus, setFilterStatus)
                }
              >
                <Text>{chartData[i].name}</Text>
              </CustomLegend>
            ))}
          </CustomLegendWrapper>
        </>
      }
    </>
  )
}

export default PopulatedChart
