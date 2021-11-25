import React, { useState, useMemo, useEffect } from 'react'
import { useTheme } from '@emotion/react'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

import { CustomLegendWrapper, ReactApexChartWrapper } from '../Styled'
import { getOptions, toggle } from '../utils'
import ButtonChartCollection from '../../ButtonChartCollection'
import ChartLabel from '../../ChartLabel'
import Box from '../../../Layout/Box'
import Flex from '../../../Layout/Flex'
import Text from '../../../@UI/Text'
import { format } from 'date-fns'
import colors from '../../../../themes/UpshotUI/colors'

interface PopulatedChartProps {
  chartData: {
    name: string
    data: number[] | number[][] // Supports 1D line chart or 2D [timestamp, value] series
    url?: string
    ath?: string
    atl?: string
    priceUsd?: number
    priceChange?: string
    labelColor?: keyof typeof colors
    volume?: number
  }[]
  embedded?: boolean
}

type HoverDataPoint = {
  value: number | null
  timestamp: number | null
}

const PopulatedChart = ({
  chartData,
  embedded = false,
}: PopulatedChartProps) => {
  const theme = useTheme()

  const emptyFilters = chartData.map((_) => true)
  const [filterStatus, setFilterStatus] = useState(emptyFilters)

  /* Reset filters when data changes. */
  useEffect(() => {
    setFilterStatus(emptyFilters)
  }, [chartData])

  /* Initialize the hover dataPoints for each series in the chartData array. */
  const emptyHoverState = [...new Array(chartData.length)].map((_) => ({
    value: null,
    timestamp: null,
  }))
  const [hoverIndex, setHoverIndex] = useState(0)
  const [hoverDataPoint, setHoverDataPoint] =
    useState<HoverDataPoint[]>(emptyHoverState)

  const labelColors: Array<keyof typeof colors> = [
    'blue',
    'pink',
    'purple',
    'yellow',
    'red',
    'green',
  ]
  for (let i = 0; i < chartData.length; i++) {
    chartData[i].labelColor = labelColors[i]
  }
  const options: ApexOptions = getOptions(theme, chartData, embedded, {
    mouseLeave() {
      /* Reset hover state on exit. */
      setHoverDataPoint(emptyHoverState)
    },
    mouseMove(e: React.MouseEvent<SVGElement>, ctx: any, data: any) {
      /**
       * Grabs the dataPoint under the cursor.
       *
       * Using a workaround to grab the first datapoint where seriesIndex is negative.
       * @notice If we increase dataPoint size above 0, we can use `dataPointMouseEnter`
       */
      const dataPointIndex: number =
        data.seriesIndex < 0 ? 0 : data.dataPointIndex

      /* Current series index under cursor. */
      const seriesIndex: number = Math.max(0, data.seriesIndex)
      setHoverIndex(seriesIndex)

      const dataPoint = chartData[seriesIndex]?.data[dataPointIndex]
      if (!dataPoint) return

      /* Clone the existing state. */
      const updatedHoverDatapoint = [...hoverDataPoint]

      /* Update the value under the cursor as 2D timeseries or 1D line chart. */
      updatedHoverDatapoint[seriesIndex] = Array.isArray(dataPoint)
        ? { timestamp: dataPoint[0], value: dataPoint[1] }
        : { timestamp: null, value: dataPoint }

      setHoverDataPoint(updatedHoverDatapoint)
    },
  })

  const timestamp = hoverDataPoint?.[hoverIndex]?.timestamp

  const chartLabels = chartData
  .filter((_, i) => filterStatus[i]) // Toggle display by selected filter button
  .map((set, i) => (
    <ChartLabel
        key={i}
        title={set.name}
        titleColor={set.labelColor}
        price_1={
          hoverDataPoint[i]?.value ??
          (!!Number(set.volume)
            ? Number(set.volume)
            : (Array.isArray(set.data[set.data.length - 1])
              ? (set.data[set.data.length - 1] as number[])[1]
              : (set.data[set.data.length - 1] as number)))
        }
        onClose={() => {
          const idx = chartData.findIndex(({ name }) => name === set.name)
          toggle(idx, chartData[i].name, filterStatus, setFilterStatus)
        }}
        atl={set.atl ?? '-'}
        ath={set.ath ?? '-'}
        price_2={set.priceUsd}
        change={set.priceChange}
        index={i}
        url={set.url}
      />
    ))

  /* Memoize Apex to prevent side effects from mouseEvent listeners. */
  const chart = useMemo(
    () => (
      <ReactApexChartWrapper>
        <div>
          <ReactApexChart
            series={chartData}
            type="area"
            height="100%"
            width="100%"
            {...{ options }}
          />
        </div>
      </ReactApexChartWrapper>
    ),
    [chartData]
  )

  return (
    <>
      {!embedded && (
        <Flex
          sx={{
            justifyContent: 'space-between',
            gap: [2, 2, 0],
            flexDirection: ['column', 'column', 'row'],
          }}
        >
          <Flex
            sx={{
              gap: 8,
              flexDirection: ['column', 'column', 'row'],
              alignItems: ['center', 'center', 'flex-start'],
              textAlign: ['center', 'center', 'left'],
            }}
          >
            {chartLabels}
          </Flex>
          <Text
            sx={{
              fontWeight: 'bold',
              textTransform: 'uppercase',
              alignSelf: ['flex-end', 'flex-end', 'flex-start'],
              minHeight: '1.25rem',
            }}
          >
            {timestamp ? format(timestamp, 'LLL dd yyyy hh:mm') : null}
          </Text>
        </Flex>
      )}
      {chart}
      {!embedded && (
        <CustomLegendWrapper>
          {[...new Array(chartData.length)].map((_, i) => (
            <ButtonChartCollection
              key={i}
              color={chartData[i].labelColor}
              title={chartData[i].name}
              selected={filterStatus[i]}
              onClick={() =>
                toggle(i, chartData[i].name, filterStatus, setFilterStatus)
              }
            />
          ))}
        </CustomLegendWrapper>
      )}
    </>
  )
}

export default PopulatedChart
