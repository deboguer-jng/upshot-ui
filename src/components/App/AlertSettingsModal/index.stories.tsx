import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Box, Flex, Label } from 'theme-ui'
import AlertSettingsModal from '.'
import Button from '../../@UI/Button'
import Checkbox from '../../@UI/Checkbox'
import Text from '../../@UI/Text'
import {
  InputContainer,
  InputLabel,
  NumberInput,
  Setting,
  SettingsGroup,
} from './Styled'
NumberInput.defaultProps = { dark: true, type: 'number' }

export default {
  title: 'App/AlertSettingsModal',
  component: AlertSettingsModal,
} as ComponentMeta<typeof AlertSettingsModal>

const Template: ComponentStory<typeof AlertSettingsModal> = (args) => {
  return (
    <AlertSettingsModal status="on" {...args}>
      <Box>
        <Box sx={{ marginBottom: '10px' }}>
          <Text variant="h3Primary"> Sam. Collector Alert </Text>
        </Box>
        <Box>
          <SettingsGroup>
            <Setting>
              <Label>
                <Checkbox checked={true} />
                Mints
              </Label>
              <InputContainer>
                <InputLabel variant="small">Min. Spent</InputLabel>
                <NumberInput
                  value={12}
                  suffix="ETH"
                  disabled={true}
                  sx={{ flex: 1 }}
                />
              </InputContainer>
            </Setting>
          </SettingsGroup>

          <SettingsGroup>
            <Setting>
              <Label>
                <Checkbox checked={true} />
                Buys
              </Label>
              <InputContainer>
                <InputLabel variant="small">Min. Tokens</InputLabel>
                <NumberInput
                  value={12}
                  suffix="tokens"
                  disabled={true}
                  sx={{ flex: 1 }}
                />
              </InputContainer>
            </Setting>
          </SettingsGroup>

          <SettingsGroup>
            <Setting>
              <Label>
                <Checkbox checked={true} />
                Sells
              </Label>
              <InputContainer>
                <InputLabel variant="small">Daily Limit</InputLabel>
                <NumberInput value={12} suffix="alets" sx={{ flex: 1 }} />
              </InputContainer>
            </Setting>
          </SettingsGroup>
          <Flex sx={{ gap: '10px', alignItems: 'center' }}>
            <Button sx={{ width: 150, marginTop: '10px' }} capitalize={true}>
              {/* { updateUserLoading ? (<Spinner />) : 'Save Changes' } */}
              Save Changes
            </Button>
            <Flex sx={{ flexDirection: 'column' }}>
              <Button
                variant="plain"
                sx={{ paddingBottom: 0, paddingTop: '15px' }}
                capitalize={true}
              >
                Reset
              </Button>
              <Text variant="small" sx={{ paddingLeft: '13px' }}>
                Reset all changes
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </AlertSettingsModal>
  )
}
export const Default = Template.bind({})
