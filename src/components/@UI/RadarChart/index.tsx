import React, { forwardRef } from 'react'

import { RadarChartWrapper } from './Styled'
import EmptyChart from '../Chart/components/emptyChart'
import PopulatedRadarChart from './components/populatedRadarChart'

export interface RadarChartProps {
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
    series: {
      name: string
      data: number[]
    }[]
    labels: string[]
  }
}

const Chart = forwardRef(
  (
    {
      loading = false,
      error = false,
      noSelected = false,
      data,
      ...props
    }: RadarChartProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const dataAvailable =
      !loading && data?.series?.length && !error && !noSelected

    return (
      <RadarChartWrapper {...{ ref, ...props }}>
        {dataAvailable ? (
          <PopulatedRadarChart chartData={data} />
        ) : (
          <EmptyChart
            {...{
              loading,
              error,
              noSelected,
            }}
          />
        )}
      </RadarChartWrapper>
    )
  }
)

export default Chart
