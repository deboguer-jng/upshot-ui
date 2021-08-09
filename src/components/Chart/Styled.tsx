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

export const ChartWrapper = styled.div`
  width: ${(props: ChartWrapperProps) => props.width}px;
  height: ${(props: ChartWrapperProps) => props.width / 2}px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: ${(props: NoDataBoardProps) => props.color};
    margin-bottom: 0.5rem;
  }

  h1 {
    color: ${(props: NoDataBoardProps) => props.color};
    font-size: 20px;
  }
`
