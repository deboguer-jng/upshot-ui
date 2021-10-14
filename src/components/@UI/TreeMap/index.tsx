import React, { forwardRef } from 'react'
import { useTheme } from '@emotion/react'
import {
  WrappedReactApexChart,
  TreeMapChartWrapper,
  TreeMapWrapper,
  TreeMapChartInnerWrapper,
} from './Styled'
import { getOptions } from './utils'
import EmptyChart from '../Chart/components/emptyChart'

export interface TreeMapProps {
  data: Array<{
    name: string
    value: number
  }>
  loading?: boolean

  error?: boolean

  noData?: boolean
}

const TreeMap = forwardRef(
  (
    { data = [], loading, error, noData, ...props }: TreeMapProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const theme = useTheme()
    const dataAvailable = !loading && data.length !== 0 && !error && !noData
    const options = getOptions(theme, data)

    return (
      <TreeMapChartWrapper {...{ ref, ...props }}>
        {dataAvailable ? (
          <TreeMapChartInnerWrapper>
            <TreeMapWrapper>
              <WrappedReactApexChart
                series={[
                  {
                    data: data.map((item: any) => ({
                      x: item.name,
                      y: item.value,
                    })),
                  },
                ]}
                type="treemap"
                width="100%"
                height="100%"
                {...{ options }}
              />
            </TreeMapWrapper>
          </TreeMapChartInnerWrapper>
        ) : (
          <EmptyChart
            {...{
              loading,
              error,
              noData,
            }}
          />
        )}
      </TreeMapChartWrapper>
    )
  }
)

export default TreeMap
