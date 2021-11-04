import React, { forwardRef } from 'react'

import { ScatterChartWrapper } from './Styled'
import EmptyChart from '../Chart/components/emptyChart'
import PopulatedScatterChart from './components/populatedScatterChart'

export interface ScatterChartProps {
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
   * Displays a message that no data is available.
   */
  noData?: boolean
  /**
   * Data series as an array of numbers or a list of (timestamp, value) tuples.
   */
  data?: {
    name: string
    url: string
    data: number[] | number[][]
  }[]
}

const Chart = forwardRef(
  (
    {
      loading = false,
      error = false,
      noSelected = false,
      data = [],
      ...props
    }: ScatterChartProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const dataAvailable = !loading && data.length !== 0 && !error && !noSelected

    return (
      <ScatterChartWrapper {...{ ref, ...props }}>
        {dataAvailable ? (
          <PopulatedScatterChart chartData={data} />
        ) : (
          <EmptyChart
            {...{
              loading,
              error,
              noSelected,
              data,
            }}
          />
        )}
      </ScatterChartWrapper>
    )
  }
)

export default Chart
