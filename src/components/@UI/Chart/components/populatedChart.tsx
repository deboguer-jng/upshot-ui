import React, { useState } from 'react'
import { useTheme } from '@emotion/react'
import { ApexOptions } from 'apexcharts'

import { CustomLegendWrapper, ReactApexChartsWrapper } from '../Styled'
import { getOptions, toggle } from '../utils'
import ButtonChartCollection from '../../ButtonChartCollection'

interface PopulatedChartProps {
  chartData: {
    name: string
    data: number[] | (Date | number)[][]
  }[]
  embedded: boolean
  dataPointMouseEnter?: (e: React.MouseEvent, ctx: any, config: any) => void
}

const PopulatedChart = ({
  chartData,
  embedded,
  dataPointMouseEnter,
}: PopulatedChartProps) => {
  const theme = useTheme()
  const [filterStatus, setFilterStatus] = useState(chartData.map((_) => true))

  const colors = ['blue', 'pink', 'purple', 'yellow', 'red', 'green']
  const options: ApexOptions = {
    ...getOptions(theme, chartData),
    chart: {
      events: { mouseMove: dataPointMouseEnter },
    },
  }

  return (
    <>
      <ReactApexChartsWrapper
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
