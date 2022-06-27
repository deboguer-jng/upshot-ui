import styled from '@emotion/styled'
import { Flex } from 'theme-ui'
import Colors from '../../../themes/UpshotUI/colors'
import { transientOptions } from '../../../themes'

export const ModalBase = styled(Flex, transientOptions)`
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 420px;
  padding: ${({ theme }) => theme.space[8] + 'px'}
    ${({ theme }) => theme.space[12] + 'px'};
  background-color: ${({ theme }) => theme.rawColors['grey-800']};
  color: ${({ theme }) => theme.rawColors['grey-300']};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadow.default};
`
