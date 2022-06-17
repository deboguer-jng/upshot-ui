import styled from '@emotion/styled'
import Panel from '../../@UI/Panel'
import colors from '../../../themes/UpshotUI/colors'
import { Box, Flex } from 'theme-ui'

type CollectionCardItemImageProps = {
  $isPixelated: boolean
  $src: string
}

type CollectionCardItemProps = {
  $expanded: boolean
  $hoverUnderglow: keyof typeof colors
}

export const CollectionCardItemBase = styled(Panel)<CollectionCardItemProps>`
  display: flex;
  position: relative;
  min-height: 260px;
  padding: 0;
  cursor: pointer;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.md};
  -webkit-transform: translateZ(0); /* Trim overflow with translated layer. */

  /* Hide details until hover unless expanded. */
  ${({ $expanded, theme }) =>
    !$expanded &&
    `
  & > div:last-of-type {
    transition: ${theme.transitions.default};
    opacity: 0.0;
  }`}

  &:hover {
    box-shadow: ${({ theme, $hoverUnderglow }) =>
      theme.shadow.underglow($hoverUnderglow)};

    & > div:first-of-type {
      transform: translateY(-72px);
      box-shadow: ${({ theme }) => theme.shadow.default};
    }

    & > div:last-of-type {
      opacity: 1;
    }
  }

  ${({ $expanded, theme }) =>
    $expanded &&
    `& > div:first-of-type {
      transform: translateY(-72px);
      box-shadow: ${theme.shadow.default}};
    }`}
`

export const CollectionCardItemImage = styled(
  Box
)<CollectionCardItemImageProps>`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: ${({ $src }) => `url(${$src})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  outline: none;
  transition: ${({ theme }) => theme.transitions.default};
  image-rendering: ${({ $isPixelated }) => ($isPixelated ? 'pixelated' : '')};
  pointer-events: none;
  z-index: 1;
  border-radius: ${({ theme }) => theme.radii.md};
  bottom: 10px;
`

export const CollectionCardItemDetails = styled(Flex)`
  position: absolute;
  bottom: 0;
  z-index: 1;
`
