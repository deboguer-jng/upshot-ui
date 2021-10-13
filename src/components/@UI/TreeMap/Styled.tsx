import styled from '@emotion/styled'
import ReactApexChart from 'react-apexcharts'

export const WrappedReactApexChart = styled(ReactApexChart)`
  margin-left: -2px;
  margin-right: -2px;
  .apexcharts-treemap-rect {
    clip-path: inset(2px 2px 2px 2px round 4px);
  }
`
