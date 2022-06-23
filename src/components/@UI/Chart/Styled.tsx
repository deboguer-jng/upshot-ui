import styled from "@emotion/styled"

export const NoDataBoard = styled.div`
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
export const ReactChartWrapper = styled.div<{ $isEmpty?: boolean }>`
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

export const ChartLoadingBoard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors['grey-900']};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TooltipStyled = styled.div`  
  background: transparent!important;
  border: none!important;
  box-shadow: none!important;
  overflow: visible;
`

export const AxisTooltip = styled.div`
  background: black;
  color: ${({ theme }) => theme.rawColors.text};
  border-radius: ${({ theme }) => theme.radii.pill};
  font-size: ${({ theme }) => theme.fontSizes[0]};
`

export const TooltipContainer = styled.div`
  position: relative;
  background: black;
  border-radius: 1rem;
  padding: 0.1rem 1rem;
  overflow: visible;
  font-family: ${({ theme }) => theme.fonts.body};
`
export const TooltipThingIdk = styled.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%) rotate(-45deg);
  width: 10px;
  height: 10px;
  background: black;
`
export const CustomLegendWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  flex-wrap: wrap;
`
