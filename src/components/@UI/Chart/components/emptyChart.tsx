import React from 'react'
import { Text } from 'theme-ui'

import LoadingChart from './loadingChart'
import SelectionPrompt from './selectionPrompt'
import { NoDataBoard, ReactChartWrapper } from '../Styled'

interface ChartProps {
  /**
   * Displays a loading spinner.
   */
  loading?: boolean
  /**
   * Displays the error state.
   */
  error?: boolean
  /**
   * Displays a message prompting the user to select a data source.
   */
  noSelected?: boolean
  /**
   * Data series as an array of numbers or a list of (timestamp, value) tuples.
   */
  data?: any[]
  /**
   * Renders the narrow embedded variant.
   */
  embedded?: boolean
}

const EmptyChart = ({
  loading,
  error,
  noSelected,
  embedded,
  data = [],
}: ChartProps) => {
  const errorDisplayText = error ? 'Error loading data' : 'No data (yet)'
  const noData = data?.length === 0 && !noSelected && !loading

  return (
    <ReactChartWrapper
      $isEmpty={[loading, noSelected, error, noData].some(Boolean)}
    >
      {loading && <LoadingChart />}
      {noSelected && <SelectionPrompt {...{ data, embedded }} />}
      {(error || noData) && (
        <NoDataBoard>
          <div>
            <Text variant="largeWhiteCharts">Sorry!</Text>
            <Text variant="h1PrimaryWhiteCharts">{errorDisplayText}</Text>
          </div>
        </NoDataBoard>
      )}
    </ReactChartWrapper>
  )
}

export default EmptyChart
