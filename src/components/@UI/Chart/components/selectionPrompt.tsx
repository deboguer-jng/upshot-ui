import React from 'react'
import { Text } from 'theme-ui'
import { default as ReactApexCharts } from 'react-apexcharts'
import { useTheme } from '@emotion/react'
import { ApexOptions } from 'apexcharts'

import { ChartNoSelectedWrapper, ChartNoSelectedTextArea } from '../Styled'
import { getOptions } from '../utils'

interface SelectionPromptProps {
  embedded?: boolean
  data?: {
    name: string
    data: number[]
  }[]
}

const SelectionPrompt = ({ data, embedded }: SelectionPromptProps) => {
  const theme = useTheme()
  const options: ApexOptions = getOptions(theme, data, embedded)

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
          <Text variant="largeWhiteCharts">Nothing selected.</Text>
          <Text variant="h1PrimaryWhiteCharts">
            Select one or more collections
            <br />
            from the list below.
          </Text>
        </div>
      </ChartNoSelectedTextArea>
    </ChartNoSelectedWrapper>
  )
}

export default SelectionPrompt
