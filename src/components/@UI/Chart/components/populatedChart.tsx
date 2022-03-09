import React, { useState, useMemo, useEffect } from 'react'
import { useTheme } from '@emotion/react'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

import { CustomLegendWrapper, ReactApexChartWrapper } from '../Styled'
import { getOptions, toggle } from '../utils'
import ButtonChartCollection from '../../ButtonChartCollection'
import ChartLabel from '../../ChartLabel'
import Flex from '../../../Layout/Flex'
import Box from '../../../Layout/Box'
import Text from '../../../@UI/Text'
import { format } from 'date-fns'
import colors from '../../../../themes/UpshotUI/colors'
import { useBreakpointIndex } from '../../../../hooks/useBreakpointIndex'
import { truncateString } from '../../../../utils/string'

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
    volume?: number | boolean
    currentFloor?: string
    metric?: string
  }[]
  embedded?: boolean
  onClose?: (index: number) => void
}

type HoverDataPoint = {
  value: number | null
  timestamp: number | null
}

const PopulatedChart = ({
  chartData,
  embedded = false,
  onClose,
}: PopulatedChartProps) => {
  const theme = useTheme()

  const emptyFilters = chartData.map((_) => true)
  const [filterStatus, setFilterStatus] = useState(emptyFilters)
  const isMobile = useBreakpointIndex() <= 1
  const isMobileOrTablet = useBreakpointIndex() <= 2

  /* Reset filters when data changes. */
  useEffect(() => {
    setFilterStatus(emptyFilters)
  }, [chartData])

  /* Initialize the hover dataPoints for each series in the chartData array. */
  const emptyHoverState = [...new Array(chartData.length)].map((_) => ({
    value: null,
    timestamp: null,
  }))
  const [hoverIndex, setHoverIndex] = useState(null)
  const [hoverDataPoint, setHoverDataPoint] =
    useState<HoverDataPoint[]>(emptyHoverState)

  const labelColors: Array<keyof typeof colors> = [
    'blue',
    'pink',
    'orange',
    'green',
    'yellow',
  ]
  for (let i = 0; i < chartData.length; i++) {
    chartData[i].labelColor = labelColors[i]
  }
  const options: ApexOptions = getOptions(theme, chartData, embedded, {
    mouseLeave() {
      /* Reset hover state on exit. */
      setHoverDataPoint(emptyHoverState)
      setHoverIndex(null)
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

  const metricKeys = {
    FLOOR: 'currentFloor',
    AVERAGE: 'currentAvg',
    VOLUME: 'currentVolume',
  }

  const labelValue = (
    index: number,
    set: {
      data: number[][] | number[]
      currentFloor?: string
      currentAvg?: string
      currentVolume?: string
      metric?: string
    }
  ) => {
    if (hoverDataPoint[index]?.value) return hoverDataPoint[index]?.value

    return parseFloat(
      set[
        metricKeys[set.metric as keyof typeof metricKeys] as
          | 'currentFloor'
          | 'currentAvg'
          | 'currentVolume'
      ]
    )
  }

  const chartLabels = useMemo(
    () =>
      chartData
        .filter((_, i) => filterStatus[i]) // Toggle display by selected filter button
        .map((set, i) => {
          const index = chartData.findIndex(({ name }) => name === set.name)

          return (
            <ChartLabel
              key={i}
              title={set.name}
              titleColor={set.labelColor}
              price_1={labelValue(index, set)}
              onClose={() => {
                onClose?.(index)
                toggle(
                  index,
                  chartData[index].name,
                  filterStatus,
                  setFilterStatus
                )
              }}
              atl={set.atl ?? '-'}
              ath={set.ath ?? '-'}
              price_2={set.priceUsd}
              change={set.priceChange}
              url={set.url}
              isDim={hoverIndex !== null && hoverIndex !== index}
              timestamp={
                hoverDataPoint[index]?.timestamp
                  ? format(
                      hoverDataPoint[index]?.timestamp,
                      'LLL dd yyyy hh:mm'
                    )
                  : null
              }
              maxWidth={isMobile ? 140 : 280}
              {...{ index }}
            />
          )
        }),
    [chartData, filterStatus, hoverDataPoint, hoverIndex, isMobile]
  )

  /* Memoize Apex to prevent side effects from mouseEvent listeners. */
  const chart = useMemo(
    () => (
      <ReactApexChartWrapper isMobile={isMobile && !embedded}>
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
    [chartData, isMobile]
  )

  return (
    <>
      {!embedded && (
        <Flex
          sx={{
            justifyContent: 'space-between',
            gap: [2, 0],
            flexDirection: ['column', 'row'],
          }}
        >
          <Box
            sx={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'flex-start',
              textAlign: 'left',
              display: ['inline-grid', 'inline-grid', 'inline-flex'],
              gridTemplateColumns: ['1fr 1fr', '1fr 1fr', null],
              flexWrap: 'wrap',
              gap: '18px',
            }}
          >
            {chartLabels}
          </Box>
        </Flex>
      )}
      {chart}
      {!embedded && (
        <CustomLegendWrapper>
          {[...new Array(chartData.length)].map((_, i) => (
            <ButtonChartCollection
              key={i}
              color={chartData[i].labelColor}
              title={truncateString(chartData[i].name, 16)}
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
