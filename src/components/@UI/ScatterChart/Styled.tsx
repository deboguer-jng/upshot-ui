import styled from '@emotion/styled'

interface TimeFilterProps {
  active: boolean
}

export const ScatterChartWrapper = styled('div', transientOptions)`
  width: 100%;

  & .apexcharts-tooltip,
  & .apexcharts-tooltip-series-group.active {
    background: ${({ theme }) => theme.colors.black};
  }

  & .apexcharts-xcrosshairs.apexcharts-active {
    display: none;
  }
`

export const CustomLegendWrapper = styled('div', transientOptions)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const TimeFilterWrapper = styled('div', transientOptions)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const TimeFilter = styled('span', transientOptions)<TimeFilterProps>`
  border-radius: 20px;
  padding: 4px 16px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height, or 129% */

  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;

  /* Text Primary Grey 300 #E4E4E4 */

  color: ${({ active, theme }) =>
    active ? theme.colors['grey-900'] : '#E4E4E4'};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary : 'transparent'};
`
