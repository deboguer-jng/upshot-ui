import React, { forwardRef } from 'react'

import { ChartWrapper } from './Styled'
import EmptyChart from './components/emptyChart'
import PopulatedChart from './components/populatedChart'

export interface ChartProps {
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
    data: number[] | (Date | number)[][]
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
    }: ChartProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const dataAvailable = !loading && data.length !== 0 && !error && !noSelected

    return (
      <ChartWrapper {...{ ref, ...props }}>
        <div>
          {dataAvailable ? (
            <PopulatedChart chartData={data} embedded={embedded} />
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
        </div>
      </ChartWrapper>
    )
  }
)

export default Chart
