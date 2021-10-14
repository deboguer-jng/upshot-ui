import React, { Suspense, lazy, forwardRef } from 'react'
import { TreeMapProps } from './'

const ApexTreeMapChart = lazy(() => import('./'))

/**
 * ApexCharts requires a window global variable, which conflicts
 * with the next.js SSR loader. To get around these, we wrap the
 * component with an ES2020 module import and lazy load it.
 */
const TreeMapChartDynamic = forwardRef(
  (props: TreeMapProps, ref: React.ForwardedRef<HTMLDivElement>) => (
    <Suspense fallback={null}>
      <ApexTreeMapChart {...{ ref, ...props }} />
    </Suspense>
  )
)

export default TreeMapChartDynamic
