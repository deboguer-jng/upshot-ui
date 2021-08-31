import React, { Suspense, lazy, forwardRef } from 'react'
import { ChartProps } from './'

const ApexChart = lazy(() => import('./'))

/**
 * ApexCharts requires a window global variable, which conflicts
 * with the next.js SSR loader. To get around these, we wrap the
 * component with an ES2020 module import and lazy load it.
 */
const ChartDynamic = forwardRef(
  (props: ChartProps, ref: React.ForwardedRef<HTMLDivElement>) => (
    <Suspense fallback={null}>
      <ApexChart {...{ ref, ...props }} />
    </Suspense>
  )
)

export default ChartDynamic
