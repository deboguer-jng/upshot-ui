import React, { useMemo, useState, useCallback, useRef } from 'react'
import { format } from 'date-fns'
import { Flex, Text, Label } from 'theme-ui'
import { Group } from '@visx/group'
import { Circle } from '@visx/shape'
import { scaleLinear, scaleLog, scaleThreshold } from '@visx/scale'
import { defaultStyles, useTooltip, TooltipWithBounds } from '@visx/tooltip'
import { AxisLeft, AxisBottom } from '@visx/axis'
import { ParentSize } from '@visx/responsive'
import { UseTooltipParams } from '@visx/tooltip/lib/hooks/useTooltip'

import theme from '../../../themes/UpshotUI'
import { LegendContainer, TimeFilter, TimeFilterContainer } from './Styled'
import { TooltipContent } from './TooltipContent'
import Checkbox from '../Checkbox'
import Threshold from '@visx/legend/lib/legends/Threshold'
import EmptyChart from '../Chart/components/emptyChart'
import { Legend, LegendItem, LegendLabel, LegendThreshold } from '@visx/legend'
import { voronoi } from '@visx/voronoi'
import { localPoint } from '@visx/event'

export interface ChartProps {
  data?: ChartDataItem[]
  name?: string
  showControls?: boolean
  margin?: { top: number; bottom: number; left: number; right: number }
  loading?: boolean
  error?: boolean
}

interface ChartSizeProps {
  height: number
  width: number
}

export interface ChartDataItem {
  x: number
  y: number
  id: string
  address: string | null
  gmi?: number
  ens?: string
  img?: string
  contractAddress: string
  pixelated?: boolean
}

enum SERIES_KEYS {
  OVER900 = 'over900',
  UNDER900 = 'under900',
}

const defaultMargin = { top: 30, right: 50, bottom: 150, left: 50 }

let tooltipTimeout: any

const ScatterChartVisx = ({
  width,
  height,
  margin = defaultMargin,
  data = [],
  name,
  loading = false,
  error = false,
  showControls = false,
  ...props
}: ChartProps & ChartSizeProps) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const {
    showTooltip,
    hideTooltip,
    tooltipOpen,
    tooltipData,
    tooltipLeft = 0,
    tooltipTop = 0,
  }: UseTooltipParams<ChartDataItem> = useTooltip({
    tooltipOpen: false,
  })

  const [hoverId, setHoverId] = useState(null)
  const [selectedId, setSelectedId] = useState(null)
  const [timeScale, setTimeScale] = useState('all')
  const [isLogScale, setIsLogScale] = useState<boolean>(false)
  const [activeSeries, setActiveSeries] = useState<SERIES_KEYS>()

  const xMax = width - margin.left - margin.right
  const yMax = height - margin.top - margin.bottom

  const xRange = useMemo(() => {
    const max = Math.max(...data.map((d: ChartDataItem) => d.x))
    if (timeScale === '1h') return { min: max - 3600 * 1000, max }
    if (timeScale === '1d') return { min: max - 3600 * 1000 * 24, max }
    if (timeScale === '1w') return { min: max - 3600 * 1000 * 24 * 7, max }
    if (timeScale === '1w') return { min: max - 3600 * 1000 * 24 * 30, max }
    return {
      min: Math.min(...data.map((d: ChartDataItem) => d.x)),
      max,
    }
  }, [data, timeScale])

  const yRange = useMemo(() => {
    return {
      min: Math.min(...data.map((d: ChartDataItem) => d.y)),
      max: Math.max(...data.map((d: ChartDataItem) => d.y)),
    }
  }, [data])

  const xScale = useMemo(
    () =>
      scaleLinear<number>({
        domain: [xRange.min, xRange.max],
        range: [0, xMax],
        clamp: false,
      }),
    [xMax, xRange]
  )

  const yScale = useMemo(() => {
    const scaleParams = {
      domain: [yRange.min, yRange.max],
      range: [yMax, 0],
      clamp: false,
    }
    if (isLogScale) return scaleLog<number>(scaleParams)
    else return scaleLinear<number>(scaleParams)
  }, [yMax, yRange, isLogScale])

  const voronoiLayout = useMemo(() => {
    return voronoi<ChartDataItem>({
      x: (d) => xScale(d.x) + margin.left,
      y: (d) => yScale(d.y) + margin.top,
      width: xMax,
      height: yMax,
    })(data)
  }, [xMax, yMax, xScale, yScale])

  const handleMouseMove = useCallback(
    (event: React.MouseEvent | React.TouchEvent) => {
      if (tooltipTimeout) clearTimeout(tooltipTimeout)
      if (!svgRef.current) return

      // find the nearest polygon to the current mouse position
      const point = localPoint(svgRef.current, event)
      if (!point) return

      const neighborRadius = 100
      const closest = voronoiLayout.find(point.x, point.y, neighborRadius)
      if (
        closest &&
        closest.data.id !== hoverId &&
        closest.data.id !== selectedId
      ) {
        setHoverId(closest.data.id)
        if (!selectedId)
          showTooltip({
            tooltipLeft: xScale(closest.data.x),
            tooltipTop: yScale(closest.data.y),
            tooltipData: closest.data,
          })
      }
    },
    [xScale, yScale, showTooltip, voronoiLayout, selectedId, hoverId]
  )

  const handleMouseLeave = useCallback(() => {
    tooltipTimeout = setTimeout(() => {
      setHoverId(null)
      if (!selectedId) hideTooltip()
    }, 300)
  }, [selectedId, hideTooltip])

  const handleChartClick = useCallback(
    (event: React.MouseEvent | React.TouchEvent) => {
      if (!svgRef.current) return

      // find the nearest polygon to the current mouse position
      const point = localPoint(svgRef.current, event)
      if (!point) return

      const neighborRadius = 100
      const closest = voronoiLayout.find(point.x, point.y, neighborRadius)
      if (closest && closest?.data?.id !== selectedId) {
        setSelectedId(closest.data.id)
        showTooltip({
          tooltipLeft: xScale(closest.data.x),
          tooltipTop: yScale(closest.data.y),
          tooltipData: closest.data,
        })
      } else {
        setSelectedId(null)
        setHoverId(null)
        hideTooltip()
      }
    },
    [
      xScale,
      yScale,
      showTooltip,
      hideTooltip,
      voronoiLayout,
      selectedId,
      setSelectedId,
      hoverId,
    ]
  )

  const tickFormatTime = useCallback(
    (n: number) => {
      if (timeScale == '1h') return format(Number(n), 'h:mmbbb')
      if (timeScale == '1d') return format(Number(n), 'haaa ccc')
      if (timeScale == '1w') return format(Number(n), 'cccc')

      return format(Number(n), 'MM/dd/yy')
    },
    [timeScale]
  )

  const numTicksTime = useMemo(() => {
    if (timeScale == '1h') return 10
    if (timeScale == '1d') return 12
    if (timeScale == '1w') return 7
    return 10
  }, [timeScale])

  const getMarkerFilter = (point: ChartDataItem) => {
    if (hoverId === point.id || selectedId === point.id)
      return 'brightness(1.2)'
    if (
      (activeSeries == SERIES_KEYS.OVER900 && point.gmi < 900) ||
      (activeSeries == SERIES_KEYS.UNDER900 && point.gmi > 900)
    )
      return 'opacity(0.2)'

    return 'none'
  }

  const legendScale = scaleThreshold({
    domain: [900],
    range: [theme.colors.blue, theme.colors.pink],
  })

  if (loading || data.length == 0 || error)
    return <EmptyChart {...{ loading, error, height, width, data }} />

  return (
    <div>
      {showControls && (
        <Flex>
          <Label>
            <Checkbox
              checked={isLogScale}
              onChange={(e) => setIsLogScale(!isLogScale)}
            />
            Log scale
          </Label>
        </Flex>
      )}
      <svg 
        width={width} 
        height={height} 
        ref={svgRef}
        style={{ cursor: 'pointer' }}
      >
        <rect
          width={width}
          height={height}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleChartClick}
          onTouchEnd={handleChartClick}
          fillOpacity={0}
        />
        <Group
          pointerEvents="none"
          left={margin.left}
          top={margin.top}
          height={height}
        >
          <AxisLeft
            scale={yScale}
            hideAxisLine={true}
            tickFormat={(n: number) => `Ξ${n}`}
            tickLabelProps={() => ({
              fill: theme.colors.white,
              fontSize: 12,
              textAnchor: 'end',
              verticalAnchor: 'middle',
              x: -10,
            })}
            tickLength={0}
            numTicks={6}
          />
          <AxisBottom
            top={yMax}
            scale={xScale}
            hideAxisLine={true}
            tickLength={0}
            stroke={theme.colors.white}
            tickLabelProps={() => ({
              fill: theme.colors.white,
              fontSize: 12,
              textAnchor: 'middle',
              verticalAnchor: 'middle',
            })}
            tickFormat={tickFormatTime}
            numTicks={numTicksTime}
          />
        </Group>
        <Group left={margin.left} top={margin.top} pointerEvents='none'>
          {data
            .sort((a) => a.gmi - 900)
            .map((point: ChartDataItem, i: number) => (
              <Circle
                key={`point-${point.id}-${i}`}
                className="dot"
                cx={xScale(point.x)}
                cy={yScale(point.y)}
                r={point.id === hoverId || point.id === selectedId ? 8 : 6}
                fill={point.gmi > 900 ? theme.colors.pink : theme.colors.blue}
                filter={getMarkerFilter(point)}
                cursor="pointer"
              />
            ))}
        </Group>
      </svg>
      {tooltipOpen && tooltipData && tooltipLeft != null && tooltipTop != null && (
        <TooltipWithBounds
          key={Math.random()}
          left={tooltipLeft + 70}
          top={tooltipTop}
          style={{
            position: 'absolute',
            backgroundColor: 'transparent',
            pointerEvents: selectedId ? 'all' : 'none',
            zIndex: theme.zIndex.modal
          }}
        >
          <TooltipContent {...tooltipData} />
        </TooltipWithBounds>
      )}
      <LegendContainer>
        <Threshold
          scale={legendScale}
          direction="row"
          style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}
          labelLower="gmi &lt; "
          labelUpper="gmi &gt; "
          shape="circle"
          shapeWidth={10}
          shapeStyle={(label) => ({
            color: label.index === 0 ? theme.colors.blue : theme.colors.pink,
          })}
          legendLabelProps={{
            onClick: (e) => console.log('legendLabel onClick', e),
          }}
        />

        <TimeFilterContainer>
          {['1h', '1d', '1w', '1m', 'all'].map((t) => (
            <TimeFilter
              key={t}
              active={t === timeScale}
              onClick={(e) => setTimeScale(t)}
            >
              {t.toUpperCase()}
            </TimeFilter>
          ))}
        </TimeFilterContainer>
      </LegendContainer>
    </div>
  )
}

const ScatterChartVisxParent = (props: ChartProps) => (
  <ParentSize>
    {({ height, width }) => (
      <ScatterChartVisx {...{ height, width, ...props }} />
    )}
  </ParentSize>
)

export default ScatterChartVisxParent
