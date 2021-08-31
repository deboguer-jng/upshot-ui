import React from 'react'
import { Text } from 'theme-ui'
import { default as ReactApexCharts } from 'react-apexcharts'
import { useTheme } from '@emotion/react'
import { ApexOptions } from 'apexcharts'

import {
  ChartNoSelectedWrapper,
  ChartNoSelectedTextArea,
} from '../Styled'
import { getOptions, DataProps } from '../utils'

const SelectionPrompt = (data: DataProps) => {
  const theme = useTheme()
  const options: ApexOptions = getOptions(theme, data.data)

  return (
    <ChartNoSelectedWrapper>
      <ReactApexCharts
        series={theme.chart.defaultSeries}
        type="area"
        height="auto"
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
  )
}

export default SelectionPrompt
