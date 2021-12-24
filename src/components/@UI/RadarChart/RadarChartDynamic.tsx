import React, { Suspense, lazy, forwardRef } from 'react'
import { RadarChartProps } from './'

const ApexRadarChart = lazy(() => import('./'))

/**
 * ApexCharts requires a window global variable, which conflicts
 * with the next.js SSR loader. To get around these, we wrap the
 * component with an ES2020 module import and lazy load it.
 */
const RadarChartDynamic = forwardRef(
  (props: RadarChartProps, ref: React.ForwardedRef<HTMLDivElement>) => (
    <Suspense fallback={null}>
      <ApexRadarChart {...{ ref, ...props }} />
    </Suspense>
  )
)

export default RadarChartDynamic
