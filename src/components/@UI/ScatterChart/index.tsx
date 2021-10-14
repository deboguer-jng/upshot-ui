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
    data: number[] | number[][]
  }[]
  /**
   * Renders the search variant.
   */
  search?: boolean
  /**
   * Renders the narrow embedded variant.
   */
  embedded?: boolean
}

const Chart = forwardRef(
  (
    {
      loading = false,
      error = false,
      noSelected = false,
      data = [],
      search = false,
      embedded = false,
      ...props
    }: ScatterChartProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const dataAvailable = !loading && data.length !== 0 && !error && !noSelected

    return (
      <ScatterChartWrapper {...{ ref, ...props }}>
        {dataAvailable ? (
          <PopulatedScatterChart chartData={data} {...{ embedded }} />
        ) : (
          <EmptyChart
            {...{
              loading,
              error,
              noSelected,
              embedded,
              data,
            }}
          />
        )}
      </ScatterChartWrapper>
    )
  }
)

export default Chart
