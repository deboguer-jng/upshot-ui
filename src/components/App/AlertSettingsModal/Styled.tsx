import styled from '@emotion/styled'
import { Flex, Grid } from 'theme-ui'
import { transientOptions } from '../../../themes'
import InputRounded from '../../@UI/InputRounded'
import Text from '../../@UI/Text'

export const InputContainer = styled(Grid, transientOptions)`
  align-items: center;
  gap: 15px;
  grid-template-columns: auto 1fr;
`

export const InputLabel = styled(Text, transientOptions)`
  font-size: 14px;
`

export const SettingsHeader = styled(Text, transientOptions)`
  padding-bottom: 20px;
`
SettingsHeader.defaultProps = { variant: 'large' }

export const Setting = styled(Flex, transientOptions)`
  padding-bottom: 15px;
  flex-direction: column;
  gap: 20px;
`

export const SettingsGroup = styled(Grid, transientOptions)`
  column-gap: 30px;
`
SettingsGroup.defaultProps = { columns: ['1fr', '1fr 1fr', '1fr 1fr', '1fr'] }

export const SettingsContainer = styled(Flex, transientOptions)`
  flex-direction: column;
  gap: 10px;
`
export const NumberInput = styled(InputRounded, transientOptions)``
