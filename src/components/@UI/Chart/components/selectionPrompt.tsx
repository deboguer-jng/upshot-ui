import React from 'react'
import { Text } from 'theme-ui'
import { useTheme } from '@emotion/react'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

import { ChartNoSelectedTextArea } from '../Styled'
import { getOptions } from '../utils'

interface SelectionPromptProps {
  embedded?: boolean
  data?: {
    name: string
    data: any
  }[]
}

const SelectionPrompt = ({ embedded }: SelectionPromptProps) => {
  const theme = useTheme()
  const options: ApexOptions = getOptions(theme, theme.chart.defaultSeries)

  return (
    <>
      <ReactApexChart
        series={theme.chart.defaultSeries as any}
        type="area"
        height="100%"
        width="100%"
        {...{ options, embedded }}
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
    </>
  )
}

export default SelectionPrompt
