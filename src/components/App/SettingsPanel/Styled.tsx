import styled from '@emotion/styled'
import { Text, Flex } from 'theme-ui'
import theme from '../../../themes/UpshotUI'
import { radii } from '../../../themes/UpshotUI/sizes'
import Panel from '../../@UI/Panel'
import { transientOptions } from '../../../themes'

interface SettingsMenuProps {
  $radii: keyof typeof radii
}

interface MenuItemProps {
  active?: boolean
}

export const PanelBase = styled(Panel, transientOptions)`
  padding: 0;
  width: 100%;
  height: 50%;
  position: relative;
`

export const SettingsMenu = styled(Flex, transientOptions)<SettingsMenuProps>`
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors['grey-900']};
  border-top-left-radius: ${({ theme, $radii }) => theme.radii[$radii]};
  border-bottom-left-radius: ${({ theme, $radii }) => theme.radii[$radii]};
  padding-bottom: 50px;
`

export const MenuItem = styled(Text, transientOptions)<MenuItemProps>`
  color: ${({ active }) =>
    active ? theme.colors.text : theme.colors['grey-400']};
  border-bottom: thin solid ${({ theme }) => theme.colors['grey-700']};
  padding: 20px;
  cursor: pointer;
  position: relative;
`

export const SettingsContainer = styled(Flex, transientOptions)`
  flex-direction: column;
  width: 100%;
`
export const SpinnerContainer = styled(
  Flex,
  transientOptions
)<SettingsMenuProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme, $radii }) => theme.radii[$radii]};
  opacity: 0.8;
  z-index: ${({ theme }) => theme.zIndex.modal - 1};
`
