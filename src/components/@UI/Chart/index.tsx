import React, { useState, forwardRef } from 'react'
import { useTheme } from '@emotion/react'
import { default as ReactApexCharts } from 'react-apexcharts'
import { Text } from 'theme-ui'
import { ApexOptions } from 'apexcharts'

import {
  NoDataBoard,
  ChartWrapper,
  ChartLoadingBoard,
  FilterWrapper,
  FilterButton,
  CustomLegendWrapper,
  CustomLegend,
  ChartNoSelectedWrapper,
  ChartNoSelectedTextArea,
} from './Styled'
import Spinner from '../Spinner'
import { getOptions, toggle } from './utils'

export interface ChartProps {
  loading?: boolean
  noData?: boolean
  error?: boolean
  noSelected?: boolean
  data?: {
    name: string
    data: number[],
  }[]
}

const Chart = forwardRef(
  (
    {
      loading = false,
      noData = false,
      error = false,
      noSelected = false,
      data = [],
      ...props
    }: ChartProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const theme = useTheme()
    const [filter, setFilter] = useState(0)
    const [filterStatus, setFilterStatus] = useState(data.map((_) => true))

    const colors = [theme.rawColors.primary, theme.rawColors.secondary]
    const filterLabels = ['1H', '1D', '1W', '1Y', 'ALL']
    const options: ApexOptions = getOptions(theme, data)

    if (loading) {
      return (
        <ChartWrapper {...{ ref, ...props }}>
          <div>
            <ChartLoadingBoard>
              <Spinner />
            </ChartLoadingBoard>
          </div>
        </ChartWrapper>
      )
    }

    if (error) {
      return (
        <ChartWrapper {...{ ref, ...props }}>
          <div>
            <NoDataBoard>
              <div>
                <Text variant="largeWhite" sx={{ display: 'block' }}>
                  Sorry
                </Text>
                <Text variant="h1PrimaryWhite" sx={{ lineHeight: 'heading' }}>
                  Error loading data
                </Text>
              </div>
            </NoDataBoard>
          </div>
        </ChartWrapper>
      )
    }

    if (noData) {
      return (
        <ChartWrapper {...{ ref, ...props }}>
          <div>
            <NoDataBoard>
              <div>
                <Text variant="largeWhite" sx={{ display: 'block' }}>
                  Sorry:
                </Text>
                <Text variant="h1PrimaryWhite" sx={{ lineHeight: 'heading' }}>
                  No data (yet)
                </Text>
              </div>
            </NoDataBoard>
          </div>
        </ChartWrapper>
      )
    }

    if (noSelected) {
      return (
        <ChartWrapper {...{ ref, ...props }}>
          <div>
            <ChartNoSelectedWrapper>
              <ReactApexCharts
                series={theme.chart.defaultSeries}
                type="area"
                height="auto"
                width="100%"
                {...{ options }}
              />
              <ChartNoSelectedTextArea>
                <div>
                  <Text variant="largeWhite" sx={{ display: 'block' }}>
                    Nothing selected.
                  </Text>
                  <Text variant="h1PrimaryWhite" sx={{ lineHeight: 'heading' }}>
                    Select a collection (or multiple)
                    <br />
                    from the container below.
                  </Text>
                </div>
              </ChartNoSelectedTextArea>
            </ChartNoSelectedWrapper>
          </div>
        </ChartWrapper>
      )
    }

    return (
      <ChartWrapper {...{ ref, ...props }}>
        <div>
          <ReactApexCharts
            series={data}
            type="area"
            height="auto"
            width="100%"
            {...{ options }}
          />
          <FilterWrapper>
            {[...new Array(5)].map((_, i) => (
              <FilterButton
                key={i}
                active={filter === i}
                onClick={() => setFilter(i)}
              >
                {filterLabels[i]}
              </FilterButton>
            ))}
          </FilterWrapper>
          <CustomLegendWrapper>
            {[...new Array(data.length)].map((_, i) => (
              <CustomLegend
                key={i}
                active={filterStatus[i]}
                color={colors[i]}
                onClick={
                  () =>
                    toggle(
                      i,
                      data[i].name,
                      filterStatus,
                      setFilterStatus
                    )
                  }
              >
                <div />
                <Text>{data[i].name}</Text>
              </CustomLegend>
            ))}
          </CustomLegendWrapper>
        </div>
      </ChartWrapper>
    )
  }
)

export default Chart
