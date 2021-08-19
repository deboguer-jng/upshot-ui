import React from 'react'
import Icon from '../../@UI/Icon'
import { Text, Link, Grid, Flex, GridProps } from 'theme-ui'
import InputRounded from '../../@UI/InputRounded'
import { useTheme } from '../../../themes/UpshotUI'

export interface AppBarProps extends GridProps {}

/**
 * Navigation bar at the top of the application.
 */
export default function AppBar({ ...props }: AppBarProps) {
  const { theme } = useTheme()

  /* The app bar height should be the same size as input fields. */
  const { height } = theme.forms.inputs.default

  return (
    <Grid columns={'1fr auto'} sx={{ height, alignItems: 'center' }} {...props}>
      {/* Left-aligned section. */}
      <Flex sx={{ gap: 4, alignItems: 'center' }}>
        <Icon icon="upshot" color="primary" size={height} />
        <InputRounded placeholder="Search..." sx={{ width: 300 }} />
        <Text>
          <Link>FAQ</Link>
        </Text>
      </Flex>

      {/* Right-aligned section. */}
      <Text>[Button]</Text>
    </Grid>
  )
}
