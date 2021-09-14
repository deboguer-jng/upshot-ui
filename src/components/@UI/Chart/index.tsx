import React, { forwardRef } from 'react'

import { ChartWrapper } from './Styled'
import EmptyChart from './components/emptyChart'
import PopulatedChart from './components/populatedChart'

export interface ChartProps {
  loading?: boolean
  error?: boolean
  noSelected?: boolean
  data?: {
    name: string
    data: number[] | (Date | number)[][]
  }[]
  search?: boolean
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
