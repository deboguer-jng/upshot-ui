import css from '@emotion/css'
import { keyframes } from '@emotion/react'
import { Keyframes } from '@emotion/serialize'
import colors from './colors'

export const durations = {
  fast: '.125s',
  normal: '.5s',
  slow: '1s',
}

export const fade: Keyframes = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

export const spin: Keyframes = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
})

export const pulse: Keyframes = keyframes({
  '25%': {backgroundColor: colors['grey-700'] },
  '50%': {backgroundColor: colors['grey-600'] },
  '75%': {backgroundColor: colors['grey-700'] },
})

const animations = {
  fadeIn: css`
    ${fade} ${durations.slow} forwards
  `,
  spin: css`
    ${spin} ${durations.slow} infinite linear
  `,
  pulse: css`
    ${pulse} ${durations.slow} infinite linear
  `,
}

export default animations
