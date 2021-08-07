import styled from '@emotion/styled'
import { AvatarProps } from './'
import { Flex } from 'theme-ui'

export const AvatarBase = styled.div<AvatarProps>`
  position: relative;
  overflow: hidden;
  width: ${({ theme, size }) => theme.avatars.sizes[size]}px;
  height: ${({ theme, size }) => theme.avatars.sizes[size]}px;
  border-radius: 50%;
  background: ${({ theme }) => theme.gradients.primary};
`

export const AvatarOutline = styled.div<AvatarProps>`
  position: absolute;
  pointer-events: none;
  display: inline-block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;

  /* Create a box-shadow border (min: 1px) relative to avatar size. */
  box-shadow: inset 0 0 0
    ${({ theme, size, borderColor }) =>
      `max(1px,
        ${
          Number(theme.avatars.sizes[size]) *
          theme.avatars.borderThickness *
          0.01
        }px
      ) ${theme.colors[borderColor]}`};
`

export const AvatarInitialsBase = styled(Flex)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 92%;
  height: 92%;
  margin: 4%;
  border-radius: 50%;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
`
