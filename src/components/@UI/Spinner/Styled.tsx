import styled from '@emotion/styled'
import { SpinnerSize } from './'

interface StyledSpinnerProps {
  $size: SpinnerSize
}

export const StyledSpinner = styled.div<StyledSpinnerProps>`
  width: ${({ theme, $size }) => theme.spinners.sizes[$size]}px;
  height: ${({ theme, $size }) => theme.spinners.sizes[$size]}px;

  /* Continuously rotate the spinner. */
  animation: ${({ theme }) => theme.animations.spin};
`

export const StyledGradient = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.radii.circle};

  background-image: conic-gradient(
    from 90deg at 50% 50%,
    #fff0 0deg,
    #fff 345deg,
    #fff 0deg,
    #fff0 0deg
  );
`
