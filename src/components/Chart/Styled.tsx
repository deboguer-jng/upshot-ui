import styled from '@emotion/styled'

interface NoDataBoardProps {
  color?: string
  borderColor?: string
}

interface ChartWrapperProps {
  width: number
}

interface ChartLoadingBoardProps {
  background?: string
}

interface FilterButtonProps {
  active: boolean
}

interface CustomLegendProps {
  active: boolean
  color: string
}

export const ChartWrapper = styled.div<ChartWrapperProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.width / 2}px;

  & > div:first-of-type {
    min-height: unset !important;
  }
`

export const ChartNoSelectedWrapper = styled.div`
  position: relative;
`

export const ChartNoSelectedTextArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

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

export const ChartLoadingBoard = styled.div<ChartLoadingBoardProps>`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  background: ${(props) => props.background};
`

export const NoDataBoard = styled.div<NoDataBoardProps>`
  width: 100%;
  height: 100%;
  position: relative;
  border-left: 1px solid ${(props) => props.borderColor};
  border-bottom: 1px solid ${(props) => props.borderColor};
  font-family: ${({ theme }) => theme.fonts.body};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: ${(props) => props.color};
    margin: 0;
  }

  h1 {
    color: ${(props) => props.color};
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
  border: none;
  color: ${(props) => (props.active ? 'black' : 'white')};
  font-size: 14px;
  height: 18px;
  width: 50px;
  background: ${(props) => (props.active ? '#0091FF' : 'transparent')};
  outline: none;
  border-radius: 9px;
`

export const CustomLegendWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
  margin-top: 1rem;
`

export const CustomLegend = styled.button<CustomLegendProps>`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  outline: none;

  div {
    width: 18px;
    height: 18px;
    border-radius: 9px;
    margin-right: 10px;
    border: 2px solid ${(props) => props.color};
    background: ${(props) => (props.active ? props.color : 'transparent')};
  }

  span {
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    color: ${(props) => props.color};
  }
`
