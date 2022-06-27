import React, { forwardRef } from 'react'
import { RadarChartWrapper } from './Styled'
import { truncateString } from '../../../utils/string'
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
   * Data series as an array of numbers or a list of (timestamp, value) tuples.
   */
  data?: RadarChartData

  width: number
  height: number
  margin?: { top: number; right: number; bottom: number; left: number }
  levels?: number
}

export interface RadarChartData {
  series: {
    name: string
    data: number[]
  }[]
  labels: string[]
}

// const Chart = forwardRef(
//   (
//     {
//       loading = false,
//       error = false,
//       noSelected = false,
//       data,
//       ...props
//     }: RadarChartProps,
//     ref: React.ForwardedRef<HTMLDivElement>
//   ) => {
//     const dataAvailable =
//       !loading && data?.series?.length && !error && !noSelected

//     return (
//       <RadarChartWrapper {...{ ref, ...props }}>
//         <div>
//           {dataAvailable ? (
//             <PopulatedRadarChart chartData={data} />
//           ) : (
//             <EmptyChart
//               {...{
//                 loading,
//                 error,
//                 noSelected,
//               }}
//             />
//           )}
//         </div>
//       </RadarChartWrapper>
//     )
//   }
// )

// export default Chart
import { Group } from '@visx/group'
import { scaleLinear } from '@visx/scale'
import { Point } from '@visx/point'
import { Line, LineRadial } from '@visx/shape'
import { Label } from '@visx/annotation'
import theme from '../../../themes/UpshotUI'

const degrees = 360

const genAngles = (length: number) =>
  [...new Array(length + 1)].map((_, i) => ({
    angle: i * (degrees / length),
  }))

const genPoints = (length: number, radius: number) => {
  const step = (Math.PI * 2) / length
  return [...new Array(length)].map((_, i) => ({
    x: radius * Math.sin(i * step),
    y: radius * Math.cos(i * step),
  }))
}

const genPolygonPoints = (
  dataArray: RadarChartData['series'][0]['data'],
  scale: (n: number) => number
) => {
  const step = (Math.PI * 2) / dataArray.length
  const points: { x: number; y: number }[] = new Array(dataArray.length).fill({
    x: 0,
    y: 0,
  })
  const pointString: string = new Array(dataArray.length + 1)
    .fill('')
    .reduce((res, _, i) => {
      if (i > dataArray.length) return res
      const xVal = scale(dataArray[i - 1]) * Math.sin(i * step)
      const yVal = scale(dataArray[i - 1]) * Math.cos(i * step)
      points[i - 1] = { x: xVal, y: yVal }
      res += `${xVal},${yVal} `
      return res
    })

  return { points, pointString }
}

const defaultMargin = { top: 40, left: 80, right: 80, bottom: 80 }

export type RadarProps = {
  width: number
  height: number
  margin?: { top: number; right: number; bottom: number; left: number }
  levels?: number
}

const Chart = ({
  width,
  height,
  levels = 5,
  margin = defaultMargin,
  data,
  loading = false,
  error = false,
}: RadarChartProps) => {
  const xMax = width - margin.left - margin.right
  const yMax = height - margin.top - margin.bottom
  const radius = Math.min(xMax, yMax) / 2
  const dataPoints: number[] = data?.series[0]?.data

  const radialScale = scaleLinear<number>({
    range: [0, Math.PI * 2],
    domain: [degrees, 0],
  })

  const yScale = scaleLinear<number>({
    range: [0, radius],
    domain: [0, Math.max(...dataPoints)],
  })

  const webs = genAngles(dataPoints?.length)
  const points = genPoints(dataPoints?.length, radius)
  const polygonPoints = genPolygonPoints(dataPoints, (d) => yScale(d) ?? 0)
  const zeroPoint = new Point({ x: 0, y: 0 })

  const getLabelAnchorX = (x: number) => {
    if (Math.round(x) == 0) return 'middle'
    if (x > 0) return 'start'
    if (x < 0) return 'end'
  }
  
  const getLabelAnchorY = (y: number) => {
    if (y > height*0.25) return 'start'
    if (y < -height*0.25) return 'end'
    if (Math.abs(y) < height*0.5) return 'middle'
  }

  const labelWidth = 150
  const getTextOffset = (x: number) => {
    if (Math.round(x) == 0) return 0
    if (x > 0) return -labelWidth * 0.22
    if (x < 0) return labelWidth * 0.22
  }

  return width < 10 ? null : (
    <svg width={width} height={height}>
      <rect fill='none' width={width} height={height} rx={14} />
      <Group top={height / 2 - margin.top} left={width / 2}>
          <LineRadial
            key={`web-base`}
            data={webs}
            angle={(d) => radialScale(d.angle) ?? 0}
            radius={radius}
            fill={theme.colors['grey-800']}
            stroke={theme.colors['grey-700']}
            strokeWidth={1}
            strokeOpacity={0.8}
            strokeLinecap="round"
          />
        {[...new Array(levels-1)].reverse().map((_, i) => (
          <LineRadial
            key={`web-${i}`}
            data={webs}
            angle={(d) => radialScale(d.angle) ?? 0}
            radius={((i + 1) * radius) / levels}
            stroke={theme.colors['grey-700']}
            strokeWidth={1}
            strokeOpacity={0.8}
            strokeLinecap="round"
          />
        ))}
        {[...new Array(dataPoints.length)].map((_, i) => (
          <>
            <Line
              key={`radar-line-${i}`}
              from={zeroPoint}
              to={points[i]}
              stroke={theme.colors['grey-700']}
            />
            <Label 
              x={points[i].x} 
              y={points[i].y} 
              width={labelWidth}
              title={truncateString(data.labels[i], 10)}
              showBackground={false}
              showAnchorLine={false}
              fontColor={theme.colors['grey-500']}
              titleFontWeight={400}
              titleFontSize={11}
              titleProps={{textAnchor: 'middle', dx: getTextOffset(points[i].x) }}
              horizontalAnchor={getLabelAnchorX(points[i].x)}
              verticalAnchor={getLabelAnchorY(points[i].y)}
            />
          </>
        ))}
        <polygon
          points={polygonPoints.pointString}
          fill={theme.colors.primary}
          fillOpacity={0.3}
          stroke={theme.colors.primary}
          strokeWidth={1}
        />
        {polygonPoints.points.map((point, i) => (
          <circle
            key={`radar-point-${i}`}
            cx={point.x}
            cy={point.y}
            r={2}
            fill={theme.colors.blue}
          />
        ))}
      </Group>
    </svg>
  )
}

export default Chart
