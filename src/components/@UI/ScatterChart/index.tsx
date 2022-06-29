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

export interface ChartProps {
  data: ChartDataItem[]
  name: string
  showControls?: boolean
  margin?: { top: number; bottom: number; left: number; right: number }
  loading: boolean
  error: boolean
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

const ScatterChartVisx = ({
  width,
  height,
  margin = defaultMargin,
  data = [],
  name,
  loading,
  error,
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

  const handlePointClick = useCallback(
    (point) => {
      if (!selectedId || selectedId != point.id) {
        setSelectedId(point.id)
        showTooltip({
          tooltipLeft: xScale(point.x),
          tooltipTop: yScale(point.y),
          tooltipData: point,
        })
      } else {
        setSelectedId(null)
        hideTooltip()
      }
    },
    [xScale, yScale, selectedId, setSelectedId, showTooltip, hideTooltip]
  )

  const handleMouseOver = useCallback(
    (point) => {
      setHoverId(point.id)
      if (!selectedId)
        showTooltip({
          tooltipLeft: xScale(point.x),
          tooltipTop: yScale(point.y),
          tooltipData: point,
        })
    },
    [xScale, yScale, selectedId, showTooltip]
  )

  const handleMouseOut = useCallback(
    (e) => {
      setHoverId(null)
      if (!selectedId) hideTooltip()
    },
    [selectedId, hideTooltip]
  )

  const handleChartClick = useCallback(
    (e) => {
      setSelectedId(null)
      hideTooltip()
    },
    [hideTooltip, setSelectedId]
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
      <svg width={width} height={height} ref={svgRef}>
        <rect
          width={width}
          height={height}
          onClick={handleChartClick}
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
        <Group left={margin.left} top={margin.top}>
          {data
            .sort((a) => a.gmi - 900)
            .map((point: ChartDataItem, i: number) => (
              <Circle
                key={`point-${point.id}-${i}`}
                className="dot"
                cx={xScale(point.x)}
                cy={yScale(point.y)}
                r={hoverId === point.id || selectedId === point.id ? 8 : 6}
                fill={point.gmi > 900 ? theme.colors.pink : theme.colors.blue}
                filter={getMarkerFilter(point)}
                cursor="pointer"
                onMouseOver={(e) => handleMouseOver(point)}
                onMouseOut={(e) => handleMouseOut(point)}
                onClick={(e) => handlePointClick(point)}
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
          }}
        >
          <TooltipContent {...tooltipData} />
        </TooltipWithBounds>
      )}
      <LegendContainer>
        <Threshold 
          scale={legendScale}
          direction='row'
          style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}
          labelLower='gmi &lt; '
          labelUpper='gmi &gt; '
          shape='circle'
          shapeWidth={10}
          shapeStyle={(label) => ({color: label.index === 0 ? theme.colors.blue : theme.colors.pink})}
          legendLabelProps={{onClick: (e) => console.log('legendLabel onClick',e)}}
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
