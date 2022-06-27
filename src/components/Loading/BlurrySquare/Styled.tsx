import styled from '@emotion/styled'
import { Box } from 'theme-ui'
import { transientOptions } from '../../../themes'

import Spinner from '../../@UI/Spinner'
import Flex from '../../Layout/Flex'

export const CenteredSpinner = styled(Spinner, transientOptions)`
  margin: auto;
`

export const BackgroundBox = styled(Box, transientOptions)`
  position: absolute;
  background-color: black;
  top: 0px;
  left: 0px;
  margin-top: 14%;
  margin-left: 8%;
  filter: blur(15px);
  width: 60%;
  height: 25%;
`

export const BlurrySquare = styled(Flex, transientOptions)`
  min-width: ${({ theme }) => theme.miniNftCard.width}px;
  min-height: ${({ theme }) => theme.miniNftCard.height}px;
  width: ${({ theme }) => theme.miniNftCard.width}px;
  height: ${({ theme }) => theme.miniNftCard.height}px;
  position: relative;
  overflow: auto;
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme }) => theme.colors['grey-700']};
  background-image: radial-gradient(circle at 50% 45%, #000 10%, #0000 50%),
    radial-gradient(50% 100% ellipse at 50% 90%, #000 20%, #0000 60%);
  box-shadow: 8px 0px ${({ theme }) => theme.colors.black};
`
