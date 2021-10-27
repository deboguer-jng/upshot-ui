import styled from '@emotion/styled'
import ReactApexChart from 'react-apexcharts'

interface TreeMapChartInnerWrapperProps {
  isMobile: boolean
}

export const WrappedReactApexChart = styled(ReactApexChart)`
  margin-left: -2px;
  margin-right: -2px;
  .apexcharts-treemap-rect {
    clip-path: inset(2px 2px 2px 2px round 4px);
  }
`

export const TreeMapChartWrapper = styled.div`
  width: 100%;
`

export const TreeMapWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const TreeMapChartInnerWrapper = styled.div<TreeMapChartInnerWrapperProps>`
  position: relative;
  padding-top: ${({ isMobile }) => (isMobile ? '60%' : '35%')};
  width: 100%;
`
