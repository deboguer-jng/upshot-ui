import React from 'react'
import { Text } from 'theme-ui'
import { useTheme } from '@emotion/react'

import { ChartNoSelectedTextArea } from '../Styled'

interface SelectionPromptProps {
  embedded?: boolean
  data?: {
    name: string
    data: any
  }[]
}

const SelectionPrompt = ({ embedded }: SelectionPromptProps) => {
  const theme = useTheme()

  return (
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
  )
}

export default SelectionPrompt
