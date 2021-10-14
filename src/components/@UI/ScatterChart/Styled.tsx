import styled from '@emotion/styled'

export const ScatterChartWrapper = styled.div`
  width: 100%;
  height: 300px;

  & .apexcharts-tooltip,
  & .apexcharts-tooltip-series-group.active {
    background: ${({ theme }) => theme.colors.black};
  }
`
