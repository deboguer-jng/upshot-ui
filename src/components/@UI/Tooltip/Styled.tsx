import styled from '@emotion/styled'

import colors from '../../../themes/UpshotUI/colors'
import Box from '../../Layout/Box'
import Icon from '../Icon'
import Panel from '../Panel'

export const BaseBox = styled(Box)`
  display: inline-block;
`
export const ChildContainer = styled(Box)`
  cursor: pointer;
`
export const IconMiddle = styled(Icon)`
  vertical-align: middle;
`
export const StyledPanel = styled(Panel)`
  backdrop-filter: blur(12px);
  background-color: ${({ theme }) => theme.colors['grey-900']};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 12px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.7);
`
