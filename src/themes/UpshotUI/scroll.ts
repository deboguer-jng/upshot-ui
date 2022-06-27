import sizes from './sizes'
import colors from './colors'
import { radii } from './sizes'
import { css } from '@emotion/react'

const scroll = {
  thin: css`
    &::-webkit-scrollbar,
    & *::-webkit-scrollbar {
      height: ${sizes[2]}px;
      width: ${sizes[2]}px;
    }
    &::-webkit-scrollbar-thumb,
    & *::-webkit-scrollbar-thumb {
      background-color: ${colors['grey-700']};
      border-radius: ${radii.pill};
    }
  `,
}

export default scroll
