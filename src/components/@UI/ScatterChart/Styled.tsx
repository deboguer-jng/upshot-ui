import styled from '@emotion/styled'
import { Flex } from 'theme-ui'

interface TimeFilterProps {
  active: boolean
}

export const TimeFilter = styled.span<TimeFilterProps>`
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
export const LegendContainer = styled.div`
  margin-top: -110px;
`

export const LegendCircle = styled.div<{color: string}>`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  margin-right: 6px;
  background-color: ${({ color }) => color}
`
export const LegendItem = styled(Flex)`
  align-items: center;
`

export const TimeFilterContainer = styled(Flex)`
  width: 50%;
  padding-top: 30px;
  justify-content: space-between;
`

export const TooltipContainer = styled.div`
  background-color: ${({theme}) => theme.colors['grey-900']};
  border-radius: 5px;
  color: white;
  padding: 12px;
  font-weight: 600;
  font-size: 1rem;
`

export const TooltipDate = styled(Flex)`
  align-items: center;
  font-weight: 400;
  font-size: 0.9rem;
  color: ${({theme}) => theme.rawColors['grey-400']};
`

export const AddressDot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.rawColors.purple};
  margin-right: 4px;
`

export const GMI = styled.span`
  font-size: 0.9rem;
  color: ${({theme}) => theme.rawColors.white};
  margin-left: 5px;
`

export const TooltipPrice = styled.div`
  font-size: 0.9rem;
  color: ${({theme}) => theme.rawColors.white};
`

export const NFT = styled.div`
  color: ${({theme}) => theme.rawColors.blue};
`