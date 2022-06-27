import styled from '@emotion/styled'
import { transientOptions } from '../../../themes'

export const RadarChartWrapper = styled('div', transientOptions)`
  width: 100%;
  padding-top: 75%;
  position: relative;

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  & .apexcharts-radar-series line,
  & .apexcharts-radar-series polygon {
    stroke: rgba(255, 255, 255, 0.25);
  }
  & svg g.apexcharts-plot-series polygon:first-of-type {
    fill: rgba(0, 0, 0, 0.33);
  }
`
