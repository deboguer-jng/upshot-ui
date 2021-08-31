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
  data
}: ChartProps) => {
  const errorDisplayText = error
    ? 'Error loading data'
    : 'No data (yet)'
  const noData = data.length === 0 && !noSelected && !loading

  return (
    <>
      { loading && <LoadingChart /> }
      { noSelected && <SelectionPrompt data={data} /> }
      { (error || noData) &&       
        <NoDataBoard>
          <div>
            <Text variant="largeWhite" sx={{ display: 'block' }}>
              Sorry:
            </Text>
            <Text variant="h1PrimaryWhite" sx={{ lineHeight: 'heading' }}>
              {errorDisplayText}
            </Text>
          </div>
        </NoDataBoard>
      }
    </>
  )
}

export default EmptyChart