import React, { forwardRef, ReactElement, useState } from 'react'
import { useTheme } from '@emotion/react'
import { PanelProps } from '../../@UI/Panel'
import { PanelBase, MenuItem, SettingsMenu, SettingsContainer } from './Styled'
import { useBreakpointIndex } from '../../../hooks/useBreakpointIndex'
import { Box, BoxProps, Flex, Text } from 'theme-ui'

interface SettingsMenuItemProps extends BoxProps { label: string }

export const SettingsMenuItem = (props: SettingsMenuItemProps) => (
  <Box>{props.children}</Box>
)

export interface SettingsPanelProps extends PanelProps {
  children?: ReactElement<SettingsMenuItemProps>[]
}

export const SettingsPanel = forwardRef(
  (
    {
      children = [],
      radii = 'lg',
      ...props
    }: SettingsPanelProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const isMobile = useBreakpointIndex() <= 1
    const theme = useTheme()
    const [activeItem, setActiveItem] = useState(children[0].props.label);

    return (
      <PanelBase
        {...{ ref, ...props }}
      >
        <Flex>
          <SettingsMenu $radii={radii}>
            <MenuItem sx={{fontSize: '13px'}}>User Settings</MenuItem>
            {children.map((item: ReactElement<SettingsMenuItemProps>) => (
              <MenuItem 
                active={activeItem === item.props.label}
                onClick={() => setActiveItem(item.props.label)}
                sx={{fontWeight: 600}}
              >
                {item.props.label}
              </MenuItem>
            ))}
          </SettingsMenu>
          <SettingsContainer>
            <Text
              sx={{
                fontSize: ['20px', '35px'],
                lineHeight: ['30px', '45px'],
                fontWeight: 700,
              }}
            >
              {activeItem}
            </Text>
            {children.map((item: ReactElement<SettingsMenuItemProps>) => {
              if(activeItem === item.props.label) return item
              else return null
            })}
          </SettingsContainer>
        </Flex>
      </PanelBase>
    )
  }
)

