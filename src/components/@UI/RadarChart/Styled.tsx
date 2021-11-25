import styled from '@emotion/styled'

export const RadarChartWrapper = styled.div`
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
`
