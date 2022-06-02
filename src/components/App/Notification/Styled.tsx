import styled from '@emotion/styled'
import { transparentize } from 'polished'

import { Button } from '../../..'
import Panel from '../../@UI/Panel'
import Icon from '../../@UI/Icon'
import Text from '../../@UI/Text'
import Flex from '../../Layout/Flex'
import Box from '../../Layout/Box'
import colors from '../../../themes/UpshotUI/colors'
import Image from '../../@UI/Image'


/* interface panelProps {
  $variant: 'wide' | 'popup'
} */

export const StyledPanel = styled(Panel)`
  flex-direction: column;
  margin-top: 8px;
  display: flex;
`

export const Divider = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors['grey-300']};
  opacity: 15%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 0;
`

// Notif rows

export const StyledFlex = styled(Flex)`
  margin-left: -30px;
  margin-right: -30px;
  gap: 12px;
  max-width: 500px;
  padding-top: 10px; 
  padding-bottom: 10px;
  padding-left: 30px;
  padding-right: 30px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`

export const CenterFlex = styled(Flex)`
  flex-direction: column;
  justify-content: center;
`

export const RoundImage = styled(Image)`
  border-radius: 50%;
  width: 52px;
  height: 52px;
`