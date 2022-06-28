import styled from '@emotion/styled'
import { transientOptions } from '../../../themes'

interface FilterButtonProps {
  active: boolean
}

interface ChartWrapperProps {
  $embedded: boolean
}

export const ChartWrapper = styled('div', transientOptions)<ChartWrapperProps>`
  width: 100%;
`

export const ChartNoSelectedTextArea = styled('div', transientOptions)`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  width: 100%;
  height: 100%;
  p,
  h1 {
    color: white;
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.body};
  }
  p {
    font-size: 14px;
  }
  h1 {
    font-size: 35px;
  }
`

export const ChartLoadingBoard = styled('div', transientOptions)`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors['grey-900']};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NoDataBoard = styled('div', transientOptions)`
  position: relative;
  font-family: ${({ theme }) => theme.fonts.body};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  width: 100%;
  height: 100%;
  p {
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
  }
  h1 {
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    font-size: 35px;
    line-height: 42px;
  }
`

export const Tooltip = styled('div', transientOptions)`
  background: black;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  color: white;
`

export const FilterButton = styled(
  'button',
  transientOptions
)<FilterButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: theme.colors.black;
  font-size: 14px;
  height: 18px;
  width: 50px;
  background: theme.colors.primary;
  outline: none;
  border-radius: 9px;
`

export const ReactChartWrapper = styled('div', transientOptions)<{
  $isEmpty?: boolean
  isFullWidth?: boolean
}>`
  width: ${({ isFullWidth }) => (isFullWidth ? '100vw' : '100%')};
  margin-left: ${({ isFullWidth }) => (isFullWidth ? '-16px' : 0)};
  margin-right: ${({ isFullWidth }) => (isFullWidth ? '-16px' : 0)};
  width: 100%;
  padding-top: ${({ $isEmpty }) => ($isEmpty ? 'calc(25% + 160px)' : '25%')};
  position: relative;
  & > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    & > div:first-of-type {
      min-height: unset !important;
    }
  }
`

export const TooltipContainer = styled('div', transientOptions)`
  position: relative;
  background: black;
  border-radius: 1rem;
  padding: 0.1rem 1rem;
  overflow: visible;
  font-family: ${({ theme }) => theme.fonts.body};
`

export const CustomLegendWrapper = styled('div', transientOptions)`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  flex-wrap: wrap;
`

export const StyledTooltip = styled('div', transientOptions)<{ 
  color: string
}>`
  position: relative;
  background: black;
  border-radius: 1rem;
  padding: 0.1rem 1rem;
  overflow: visible;
  font-family: ${({theme}) => theme.fonts.body};
  color: ${({color}) => color};
  border: 1px solid ${({color}) => color};
`

export const TooltipTail = styled('div', transientOptions)<{
  color: string
}>`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%) rotate(-45deg);
  width: 10px;
  height: 10px;
  background: black;
  border-left: 1px solid ${({color}) => color};
  border-bottom: 1px solid ${({color}) => color};
`