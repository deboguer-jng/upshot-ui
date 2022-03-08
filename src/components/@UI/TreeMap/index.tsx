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
import { useBreakpointIndex } from '../../../hooks/useBreakpointIndex'

export interface TreeMapProps {
  data: Array<{
    id: number
    name: string
    delta: number
    marketCap: number
  }>
  loading?: boolean

  error?: boolean

  noData?: boolean

  onCollectionSelected?: (collectionId: number) => void
}

const TreeMap = forwardRef(
  (
    {
      data = [],
      loading,
      error,
      noData,
      onCollectionSelected,
      ...props
    }: TreeMapProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const theme = useTheme()
    const isMobile = useBreakpointIndex() <= 1
    const dataAvailable = !loading && data.length !== 0 && !error && !noData
    const options = getOptions(theme, data, dataAvailable, (index: number) => {
      onCollectionSelected && onCollectionSelected(data[index].id)
    })

    return (
      <TreeMapChartWrapper {...{ ref, ...props }}>
        {dataAvailable ? (
          <TreeMapChartInnerWrapper isMobile={isMobile}>
            <TreeMapWrapper>
              <WrappedReactApexChart
                series={[
                  {
                    data: data.map((item: any) => ({
                      x: item.name,
                      y: item.marketCap,
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
