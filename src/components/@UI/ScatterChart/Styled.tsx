import styled from '@emotion/styled'
import { Flex } from 'theme-ui'
import { transientOptions } from '../../../themes'

interface TimeFilterProps {
  $active: boolean
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

  color: ${({ $active, theme }) =>
    $active ? theme.colors['grey-900'] : '#E4E4E4'};
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.primary : 'transparent'};
`
export const LegendContainer = styled('div', transientOptions)`
  margin-top: -120px;
`

export const LegendCircle = styled('div', transientOptions)<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  margin-right: 6px;
  background-color: ${({ color }) => color};
`
export const LegendItem = styled(Flex, transientOptions)`
  align-items: center;
`

export const TimeFilterContainer = styled(Flex, transientOptions)`
  width: 50%;
  padding-top: 30px;
  justify-content: space-between;
`

export const TooltipContainer = styled('div', transientOptions)`
  background-color: ${({ theme }) => theme.colors['grey-900']};
  border-radius: 5px;
  color: white;
  padding: 12px;
  font-weight: 600;
  font-size: 1rem;
  position: relative;
`

export const TooltipDate = styled(Flex, transientOptions)`
  align-items: center;
  font-weight: 400;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.rawColors['grey-400']};
`

export const AddressDot = styled('div', transientOptions)`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.rawColors.purple};
  margin-right: 4px;
`

export const GMI = styled('span', transientOptions)`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.rawColors.white};
  margin-left: 5px;
`

export const TooltipPrice = styled('div', transientOptions)`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.rawColors.white};
`

export const NFT = styled('div', transientOptions)`
  color: ${({ theme }) => theme.rawColors.blue};
`

export const TooltipImageContainer = styled(Flex, transientOptions)`
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`
