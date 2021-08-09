import styled from '@emotion/styled'

interface StyledSpinnerProps {
  borderColor?: string
  size: number
}

export const StyledSpinner = styled.div`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  height: ${(props: StyledSpinnerProps) => props.size}px;
  width: ${(props: StyledSpinnerProps) => props.size}px;
  margin: -${(props: StyledSpinnerProps) => props.size / 2}px 0 0 -${(
      props: StyledSpinnerProps
    ) => props.size / 2}px;
  border: 4px rgba(0, 0, 0, 0.25) solid;
  border-top: 4px ${(props: StyledSpinnerProps) => props.borderColor} solid;
  border-right: 4px ${(props: StyledSpinnerProps) => props.borderColor} solid;
  border-bottom: 4px ${(props: StyledSpinnerProps) => props.borderColor} solid;
  border-radius: 50%;
  -webkit-animation: spin3 1s infinite linear;
  animation: spin3 1s infinite linear;

  @-webkit-keyframes spin3 {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }

  @keyframes spin3 {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
`
