import styled from '@emotion/styled'

interface NoDataBoardProps {
  color?: string
  borderColor?: string
  font: string
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

export const ChartWrapper = styled.div`
  width: ${(props: ChartWrapperProps) => props.width}px;
  height: ${(props: ChartWrapperProps) => props.width / 2}px;

  & > div:first-of-type {
    min-height: unset !important;
  }
`

export const ChartLoadingBoard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  background: ${(props: ChartLoadingBoardProps) => props.background};
`

export const NoDataBoard = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-left: 1px solid ${(props: NoDataBoardProps) => props.borderColor};
  border-bottom: 1px solid ${(props: NoDataBoardProps) => props.borderColor};
  font-family: ${(props: NoDataBoardProps) => props.font};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: ${(props: NoDataBoardProps) => props.color};
    margin: 0;
  }

  h1 {
    color: ${(props: NoDataBoardProps) => props.color};
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
  justify-content: space-around;
`

export const FilterButton = styled.button`
  border: none;
  color: ${(props: FilterButtonProps) => (props.active ? 'black' : 'white')};
  font-size: 14px;
  height: 18px;
  width: 50px;
  background: ${(props: FilterButtonProps) =>
    props.active ? '#0091FF' : 'transparent'};
  outline: none;
  border-radius: 9px;
`

export const CustomLegendWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
  margin-top: 1rem;
`

export const CustomLegend = styled.button`
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
    border: 2px solid ${(props: CustomLegendProps) => props.color};
    background: ${(props: CustomLegendProps) =>
      props.active ? props.color : 'transparent'};
  }

  span {
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    font-family: Proxima Nova;
    color: ${(props: CustomLegendProps) => props.color};
  }
`
