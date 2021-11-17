import styled from '@emotion/styled'

export const ScatterChartWrapper = styled.div`
  width: 100%;

  & .apexcharts-tooltip,
  & .apexcharts-tooltip-series-group.active {
    background: ${({ theme }) => theme.colors.black};
  }

  & .apexcharts-xcrosshairs.apexcharts-active {
    display: none;
  }
`
