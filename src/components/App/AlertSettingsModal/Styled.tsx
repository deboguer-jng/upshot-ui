import styled from '@emotion/styled'
import Text from '../../@UI/Text';
import InputRounded from '../../@UI/InputRounded';
import {Grid, Flex} from 'theme-ui'

export const InputContainer = styled(Grid)`
  align-items: center;  
  gap: 15px;
  grid-template-columns: auto 1fr;
`

export const InputLabel = styled(Text)`
  width: 60px;
  font-size: 14px;
`

export const SettingsHeader = styled(Text)`
  padding-bottom: 20px;
`
SettingsHeader.defaultProps = { variant: 'large' }

export const Setting = styled(Flex)`
  padding-bottom: 15px;
  flex-direction: column;
  gap: 20px;
`

export const SettingsGroup = styled(Grid)`
  column-gap: 30px;
`
SettingsGroup.defaultProps = { columns: ['1fr', '1fr 1fr', '1fr 1fr', '1fr']}

export const SettingsContainer = styled(Flex)`
  flex-direction: column;
  gap: 10px;
`
export const NumberInput = styled(InputRounded)``