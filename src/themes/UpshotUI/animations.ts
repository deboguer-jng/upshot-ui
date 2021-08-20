import css from '@emotion/css'
import { keyframes } from '@emotion/react'
import { Keyframes } from '@emotion/serialize'

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
    ${fade} 1s forwards
  `,
  spin: css`
    ${spin} 1.4s infinite linear
  `,
}

export default animations
