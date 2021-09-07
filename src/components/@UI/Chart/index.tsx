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
    data: number[]
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
    }: ChartProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const dataAvailable = !loading && data.length !== 0 && !error && !noSelected

    return (
      <ChartWrapper {...{ ref, ...props }}>
        <div>
          {dataAvailable ? (
            <PopulatedChart data={data} />
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
        </div>
      </ChartWrapper>
    )
  }
)

export default Chart
