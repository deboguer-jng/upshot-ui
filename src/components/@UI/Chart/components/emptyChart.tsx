import React from 'react'
import { Text } from 'theme-ui'

import LoadingChart from './loadingChart'
import SelectionPrompt from './selectionPrompt'
import { ChartProps } from '../'
import { NoDataBoard } from '../Styled'

const EmptyChart = ({
  loading,
  error,
  noSelected,
  embedded,
  data,
}: ChartProps) => {
  const errorDisplayText = error ? 'Error loading data' : 'No data (yet)'
  const noData = data.length === 0 && !noSelected && !loading

  return (
    <>
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
    </>
  )
}

export default EmptyChart
