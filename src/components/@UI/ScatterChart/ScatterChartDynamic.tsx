import React, { Suspense, lazy, forwardRef } from 'react'
import { ScatterChartProps } from './'

const ApexScatterChart = lazy(() => import('./'))

/**
 * ApexCharts requires a window global variable, which conflicts
 * with the next.js SSR loader. To get around these, we wrap the
 * component with an ES2020 module import and lazy load it.
 */
const ScatterChartDynamic = forwardRef(
  (props: ScatterChartProps, ref: React.ForwardedRef<HTMLDivElement>) => (
    <Suspense fallback={null}>
      <ApexScatterChart {...{ ref, ...props }} />
    </Suspense>
  )
)

export default ScatterChartDynamic
