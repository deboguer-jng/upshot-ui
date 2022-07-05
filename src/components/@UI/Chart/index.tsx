import React, {
  forwardRef,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from 'react'
import {
  XYChart,
  Tooltip,
  Axis,
  EventHandlerParams,
  AnimatedAreaSeries,
} from '@visx/xychart'
import { curveCardinal } from '@visx/curve'
import { LinearGradient } from '@visx/gradient'
import { ParentSize } from '@visx/responsive'
import { useTheme } from '@emotion/react'
import { format } from 'date-fns'
import { CustomLegendWrapper, StyledTooltip, TooltipTail } from './Styled'
import ChartLabel from '../ChartLabel'
import { useBreakpointIndex } from '../../../hooks/useBreakpointIndex'
import colors from '../../../themes/UpshotUI/colors'
import { Box, Flex } from 'theme-ui'
import ButtonChartCollection from '../ButtonChartCollection'
import { truncateString } from '../../../utils/string'
import EmptyChart from './components/emptyChart'
import { formatNumber } from '../../../utils/number'
import { useTooltip } from '@visx/tooltip'
import { RenderTooltipParams } from '@visx/xychart/lib/components/Tooltip'

interface DataPoint {
  x: number
  y: number
}

export interface DataItem {
  name: string
  data: DataPoint[]
  url?: string
  ath?: string
  atl?: string
  priceUsd?: number
  priceChange?: string
  color?: keyof typeof colors
  volume?: number | boolean
  currentFloor?: number
  currentAvg?: number
  currentVolume?: number
  metric?: string
}

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
  data?: DataItem[]
  /**
   * Link component
   */
  linkComponent?: React.FunctionComponent<any>
  /**
   * Renders the search variant.
   */
  search?: boolean
  /**
   * Renders the narrow embedded variant.
   */
  embedded?: boolean
  /**
   * Handler for ChartLabel close event.
   */
  onClose?: (index: number) => void

  width?: number
  height?: number
  margin?: { top: number; bottom: number; left: number; right: number }
  showXAxis?: boolean,
  showYAxis?: boolean,
  /**
   * Displays a tooltip over hovered point on a line
   */
  showTooltip?: boolean
}

type HoverDataPoint = {
  value: number | null
  timestamp: number | null
}

type FilterStatus = {
  [key: string]: boolean
}

const defaultMargin = { top: 50, right: 50, bottom: 50, left: 50 }

const Chart = forwardRef(
  (
    {
      loading = false,
      error = false,
      noSelected = false,
      data = [],
      search = false,
      embedded = false,
      linkComponent,
      onClose,
      width,
      height,
      margin = defaultMargin,
      showXAxis = true,
      showYAxis = true,
      showTooltip = false,
      ...props
    }: ChartProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const theme = useTheme()
    const isMobile = useBreakpointIndex() <= 1

    const emptyFilters: FilterStatus = Object.fromEntries(
      data.map((d) => [d.name, true])
    )
    const [filterStatus, setFilterStatus] = useState<FilterStatus>(emptyFilters)
    const [activeSeriesKey, setActiveSeriesKey] = useState<string>(null)
    const [activeDataPoint, setActiveDataPoint] = useState<DataPoint>(null)

    /* Reset filters when data changes. */
    useEffect(() => {
      setFilterStatus(emptyFilters)
    }, [data])


    const chartColors = ['blue', 'pink', 'orange', 'green', 'yellow']
    const seriesColors: { [key: string]: keyof typeof colors } =
      Object.fromEntries(
        data.map((d, i) => [d.name, chartColors[i] as keyof typeof colors])
      )
    const getRawColor = (seriesName: string) =>
      theme.rawColors[seriesColors[seriesName]]

    const tickFormatTime = (n: number) => format(Number(n), 'MM/dd/yy')
    const tickFormatPrice = (n: number) =>
      formatNumber(Number(n), { kmbUnits: true, prefix: 'ETHER' })

    const handlePointerMove = ({
      datum,
      key,
    }: EventHandlerParams<DataPoint>) => {
      setActiveSeriesKey(key)
      setActiveDataPoint(datum)
    }
    const handlePointerOut = () => {
      setActiveSeriesKey(null)
      setActiveDataPoint(null)
    }

    const toggle = useCallback(
      (seriesName: string) => {
        setFilterStatus({
          ...filterStatus,
          [seriesName]: !filterStatus[seriesName],
        })
      },
      [filterStatus, setFilterStatus]
    )

    const metricKeys = {
      FLOOR: 'currentFloor',
      PAST_WEEK_AVERAGE: 'currentAvg',
      PAST_WEEK_VOLUME: 'currentVolume',
    }

    const labelValue = (set: DataItem) => {
      if (activeDataPoint && activeSeriesKey === set.name)
        return activeDataPoint.y

      return set[
        metricKeys[set.metric as keyof typeof metricKeys] as
          | 'currentFloor'
          | 'currentAvg'
          | 'currentVolume'
      ]
    }

    const isDim = useCallback(
      (seriesName: string) => {
        if (activeSeriesKey == null) return false
        return activeSeriesKey !== seriesName
      },
      [activeSeriesKey]
    )

    const chartLabels = useMemo(
      () =>
        data
          .filter((set) => filterStatus[set.name])
          .map((set, i) => {
            return (
              <ChartLabel
                key={i}
                title={set.name}
                titleColor={seriesColors[set.name]}
                price_1={labelValue(set)}
                onClose={() => toggle(set.name)}
                atl={set.atl ?? '-'}
                ath={set.ath ?? '-'}
                price_2={set.priceUsd}
                change={set.priceChange}
                url={set.url}
                isDim={isDim(set.name)}
                timestamp={
                  activeDataPoint?.x && activeSeriesKey === set.name
                    ? format(activeDataPoint?.x, 'LLL dd yyyy hh:mm')
                    : null
                }
                maxWidth={isMobile ? 140 : 280}
                {...{ linkComponent }}
              />
            )
          }),
      [data, filterStatus, activeDataPoint, isMobile]
    )

    if (loading || data.length == 0 || error)
      return <EmptyChart {...{ loading, error, width, height, data }} />

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
        <XYChart
          xScale={{ type: 'time' }} 
          yScale={{ type: 'linear' }}
          height={height}
          width={width}
          margin={margin}
          pointerEventsDataKey="nearest"
          onPointerMove={handlePointerMove}
          onPointerOut={handlePointerOut}
        >
          <>
            {showXAxis && 
              <Axis
                orientation="bottom"
                key="time-axis"
                hideAxisLine={true}
                hideTicks={true}
                numTicks={width / 120}
                tickFormat={tickFormatTime}
                tickLabelProps={() => ({
                  fill: theme.colors.white,
                  fontSize: 14,
                  textAnchor: 'middle',
                  verticalAnchor: 'middle',
                })}
              />
            }
            {showYAxis && 
              <Axis
                key="price-axis"
                orientation="left"
                left={50}
                hideAxisLine={true}
                hideTicks={true}
                tickFormat={tickFormatPrice}
                tickLabelProps={() => ({
                  fill: theme.colors.white,
                  fontSize: 14,
                  textAnchor: 'end',
                  verticalAnchor: 'middle',
                })}
              />
            }
            {data.map(d => 
              <LinearGradient
                id={d.name.replace(/\s/g, '')}
                key={`grad-${d.name}`}
              >
                <stop
                  stopOpacity="0.5"
                  stopColor={getRawColor(d.name)}
                  offset="0"
                />
                <stop
                  stopOpacity="0.3"
                  stopColor={getRawColor(d.name)}
                  offset="0.2"
                />
                <stop
                  stopOpacity="0.1"
                  stopColor={getRawColor(d.name)}
                  offset="0.5"
                />
                <stop
                  stopOpacity="0"
                  stopColor={getRawColor(d.name)}
                  offset="0.9"
                />
              </LinearGradient>
            )}
            {data
              .filter((set) => filterStatus[set.name])
              .map((d, i: number) => (
                <AnimatedAreaSeries
                  key={`series-${d.name}`}
                  dataKey={d.name}
                  data={d.data}
                  xAccessor={(d) => d?.x}
                  yAccessor={(d) => d?.y}
                  fill={`url(#${d.name.replace(/\s/g, '')})`}
                  curve={curveCardinal}
                  lineProps={{ stroke: getRawColor(d.name) }}
                />
            ))}
            <Tooltip
              showDatumGlyph
              unstyled
              applyPositionStyle
              snapTooltipToDatumX
              snapTooltipToDatumY
              glyphStyle={{
                stroke: 'none',
                fill: activeSeriesKey ? getRawColor(activeSeriesKey) : 'none',
                r: 6,
              }}
              offsetTop={-65}
              offsetLeft={-47}
              renderTooltip={({ tooltipData }: RenderTooltipParams<DataPoint>) => showTooltip ?
                <StyledTooltip color={getRawColor(tooltipData.nearestDatum.key)}>
                  {tickFormatPrice(tooltipData.nearestDatum.datum.y)}<br />
                  {tickFormatTime(tooltipData.nearestDatum.datum.x)}
                  <TooltipTail color={getRawColor(tooltipData.nearestDatum.key)} />
                </StyledTooltip>
                : <div />}
            />
          </>
        </XYChart>

        {!embedded && (
          <CustomLegendWrapper>
            {data.map((set, i) => (
              <ButtonChartCollection
                key={i}
                color={seriesColors[set.name]}
                title={truncateString(set.name, 16)}
                selected={filterStatus[set.name]}
                // selected={false}
                onClick={() => toggle(set.name)}
              />
            ))}
          </CustomLegendWrapper>
        )}
      </>
    )
  }
)

const ChartParent = (props: ChartProps) => (
  <ParentSize>
    {({ height, width }) => <Chart {...{ height, width, ...props }} />}
  </ParentSize>
)

export default ChartParent
