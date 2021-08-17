import styled from '@emotion/styled'
import colors from '../../themes/UpshotUI/colors'

interface StyledSpinnerProps {
  size: number
}

export const StyledSpinner = styled.div`
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: ${(props: StyledSpinnerProps) => props.size}px;
  height: ${(props: StyledSpinnerProps) => props.size}px;
  border-radius: 50%;
  background: #ffffff;
  background: linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 80%);
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  &:before {
    width: 100%;
    height: 50%;
    background: #ffffff;
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, #fff 80%);
    border-radius: ${(props: StyledSpinnerProps) => props.size/2}px ${(props: StyledSpinnerProps) => props.size/2}px 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  &:after {
    background: ${({ theme }) => theme.colors.background};
    width: 70%;
    height: 70%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @-webkit-keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`
