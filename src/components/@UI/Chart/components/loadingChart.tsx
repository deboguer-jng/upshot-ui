import React from 'react'
import { ChartLoadingBoard } from '../Styled'
import Spinner from '../../Spinner'

const LoadingChart = () => {
  return (
    <ChartLoadingBoard>
      <Spinner />
    </ChartLoadingBoard>
  )
}

export default LoadingChart
