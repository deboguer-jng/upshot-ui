import css from '@emotion/css'
import { keyframes } from '@emotion/react'
import { Keyframes } from '@emotion/serialize'

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

const animations = {
  fadeIn: css`
    ${fade} ${durations.slow} forwards
  `,
  spin: css`
    ${spin} ${durations.slow} infinite linear
  `,
}

export default animations
