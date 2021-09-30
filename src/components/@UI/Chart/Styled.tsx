import styled from '@emotion/styled'

interface FilterButtonProps {
  active: boolean
}

interface ChartWrapperProps {
  $embedded: boolean
}

export const ChartWrapper = styled.div<ChartWrapperProps>`
  width: 100%;
`

export const ChartNoSelectedTextArea = styled.div`
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

export const Tooltip = styled.div`
  background: black;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  color: white;
`

export const FilterWrapper = styled.div`
  display: flex;
  margin-left: 50px;
  justify-content: space-between;
`

export const FilterButton = styled.button<FilterButtonProps>`
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

export const CustomLegendWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  flex-wrap: wrap;
`

export const ReactChartWrapper = styled.div`
  width: 100%;
  padding-top: 35%;
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
