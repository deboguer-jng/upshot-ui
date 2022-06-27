import styled from '@emotion/styled'
import { transientOptions } from '../../../themes'

export const ScrollWrapper = styled('div', transientOptions)`
  overflow: hidden;
  position: relative;
`

export const SliderIconWrapper = styled('div', transientOptions)`
  position: absolute;
  bottom: 1px;
  height: 30px;
`

export const Slider = styled('input', transientOptions)`
  -webkit-appearance: none;
  width: 100%;
  height: 1px;
  margin-top: 20px;
  margin-left: 0;
  margin-bottom: 16px;
  border-radius: 0px;
  background: #231f20;
  outline: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: 0;
    position: relative;
    z-index: 100;
    background: transparent;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: 0;
    z-index: 100;
    background: transparent;
    cursor: pointer;
  }
`
