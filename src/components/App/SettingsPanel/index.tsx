import React, { forwardRef, ReactElement, useEffect, useLayoutEffect, useState } from 'react'
import { useTheme } from '@emotion/react'
import { PanelProps } from '../../@UI/Panel'
import { PanelBase, MenuItem, SettingsMenu, SettingsContainer } from './Styled'
import { useBreakpointIndex } from '../../../hooks/useBreakpointIndex'
import { Box, BoxProps, Flex, IconButton, Text } from 'theme-ui'
import Icon from '../../@UI/Icon'

interface SettingsMenuItemProps extends BoxProps {
  label: string
}

export const SettingsMenuItem = (props: SettingsMenuItemProps) => (
  <Box>{props.children}</Box>
)

export interface SettingsPanelProps extends PanelProps {
  children?: ReactElement<SettingsMenuItemProps>[]
}

export const SettingsPanel = forwardRef(
  (
    { children = [], radii = 'lg', ...props }: SettingsPanelProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const isMobile = useBreakpointIndex() <= 1
    const theme = useTheme()
    const [activeItem, setActiveItem] = useState(null)

    const onBackClick = () => {
      setActiveItem(null)
    }

    // set initial activeItem state if not mobile
    useEffect(() => {
      if(!isMobile && !activeItem) setActiveItem(children[0].props.label)
    }, [isMobile])

    return (
      <PanelBase {...{ ref, ...props }}>
        <Flex>
          {((isMobile && !activeItem) || !isMobile) && (
            <SettingsMenu
              $radii={radii}
              sx={{
                width: isMobile ? '100%' : '30%',
                borderTopRightRadius: isMobile ? theme.radii[radii] : 0,
                borderBottomRightRadius: isMobile ? theme.radii[radii] : 0,
              }}
            >
              <MenuItem sx={{ fontSize: '13px' }}>User Settings</MenuItem>
              {children.map((item: ReactElement<SettingsMenuItemProps>) => (
                <MenuItem
                  active={activeItem === item.props.label}
                  onClick={() => setActiveItem(item.props.label)}
                  sx={{ fontWeight: 600 }}
                >
                  {item.props.label}
                  {isMobile && (
                    <Icon
                      icon="arrowSmallRight"
                      size={20}
                      style={{ position: 'absolute', right: '10px' }}
                    />
                  )}
                </MenuItem>
              ))}
            </SettingsMenu>
          )}
          {((isMobile && activeItem) || !isMobile) && (
            <SettingsContainer
              sx={{ padding: isMobile ? '20px' : '25px 40px' }}
            >
              <Flex sx={{ alignItems: 'baseline' }}>
                {isMobile && (
                  <IconButton
                    onClick={onBackClick}
                    sx={{ width: [32, 40], height: [32, 40] }}
                  >
                    <Icon icon="arrowStylizedLeft" />
                  </IconButton>
                )}
                <Text
                  sx={{
                    fontSize: ['20px', '35px'],
                    lineHeight: ['30px', '45px'],
                    fontWeight: 700,
                    paddingBottom: '30px',
                  }}
                >
                  {activeItem}
                </Text>
              </Flex>
              {children.map((item: ReactElement<SettingsMenuItemProps>) => {
                if (activeItem === item.props.label) return item
                else return null
              })}
            </SettingsContainer>
          )}
        </Flex>
      </PanelBase>
    )
  }
)
