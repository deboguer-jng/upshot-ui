import styled from '@emotion/styled'
import { transparentize } from 'polished'

import { Button } from '../../..'
import Panel from '../../@UI/Panel'
import Icon from '../../@UI/Icon'
import Text from '../../@UI/Text'
import Flex from '../../Layout/Flex'
import Box from '../../Layout/Box'
import colors from '../../../themes/UpshotUI/colors'

/* interface panelProps {
  $variant: 'wide' | 'popup'
} */

export const StyledPanel = styled(Panel)`
  flex-direction: column;
  margin-top: 8px;
  gap: 16px;
  display: flex;
`

export const Divider = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors['grey-300']};
  opacity: 15%;
  margin-left: -30px;
  margin-right: -30px;
  margin-top: -12px;
  margin-bottom: -5px;
`