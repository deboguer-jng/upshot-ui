import styled from '@emotion/styled'
import Panel from '../../@UI/Panel'
import Image from '../../@UI/Image'
import colors from '../../../themes/UpshotUI/colors'
import { Box, Flex } from 'theme-ui'

type NFTCardImageProps = {
  $isPixelated: boolean
}

type NFTCardProps = {
  $hoverUnderglow: keyof typeof colors
}

type NFTDealBadgeProps = {
  $percentDifference?: number
}

export const NFTCardBase = styled(Flex)<NFTCardProps>`
  flex-direction: column;
  gap: 4;
  align-items: center;
  position: static;
  height: min-content;
  top: 160px;
  padding: 0;
  cursor: pointer;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.sm};
  background-color: ${({ theme }) => theme.colors['grey-800']};
  -webkit-transform: translateZ(0); /* Trim overflow with translated layer. */


  &:hover {
    box-shadow: ${({ theme, $hoverUnderglow }) => theme.shadow.underglow($hoverUnderglow)};

    & > div:first-of-type {
      box-shadow: ${({ theme }) => theme.shadow.default};
    }
  }
`

export const NFTCardWrapper = styled(Box)`
  position: absolute;
  inset: 0px;
  place-items: center;
`

export const NFTCardImage = styled(Image)<NFTCardImageProps>`
width: 100%;
image-rendering: ${({ $isPixelated }) => ($isPixelated ? 'pixelated' : '')};
pointer-events: none;
border-radius: ${({ theme }) => `${theme.radii.sm} ${theme.radii.sm} 0 0`};
`

export const NFTCardDetails = styled(Flex)`
  flex-direction: row;
  align-items: space-between;
`

export const StyledLink = styled.a`
  cursor: pointer;
  text-decoration: none;

  &:hover {
      text-decoration: underline;
  }
`

export const DealBadge = styled(Panel)<NFTDealBadgeProps>`
    border-radius: ${({ theme }) => theme.radii.xs};
    background-color: ${({ theme, $percentDifference }) => ($percentDifference > 0 ? theme.colors['green'] : theme.colors['red'])};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2px 5px;
    position: absolute;
    top: 7px;
    right: 10px;
    max-width: 80%;
    z-index: 2;
    line-height: 13px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`