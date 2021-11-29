import styled from '@emotion/styled'
import Panel from '../../@UI/Panel'
import { Box } from 'theme-ui'

export const CollectionCardItemBase = styled(Panel)<{ $expanded: boolean }>`
  position: relative;
  min-height: 320px;
  padding: 0;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.underglow('blue')};

    & > div:first-of-type {
      transform: translateY(-82px);
      box-shadow: ${({ theme }) => theme.shadow.default};
    }
  }

  ${({ $expanded, theme }) =>
    $expanded &&
    `& > div:first-of-type {
      transform: translateY(-82px);
      box-shadow: ${theme.shadow.default}};
    }`};
`

export const CollectionCardItemImage = styled(Box)<{ $src: string }>`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: ${({ $src }) => `url(${$src})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  outline: none;
  border-radius: ${({ theme }) => theme.radii.md};
  transition: ${({ theme }) => theme.transitions.default};
  pointer-events: none;
  z-index: 1;
`

export const CollectionCardItemDetails = styled(Box)`
  position: absolute;
  bottom: 0;
  z-index: 0;
`
