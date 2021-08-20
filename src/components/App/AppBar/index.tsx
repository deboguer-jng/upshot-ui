import React, { useState, useRef, forwardRef } from 'react'
import Icon from '../../@UI/Icon'
import IconButton from '../../@UI/IconButton'
import { Box, Text, Link, Grid, Flex, GridProps } from 'theme-ui'
import InputRoundedSearch from '../../@UI/InputRoundedSearch'
import { useTheme } from '../../../themes/UpshotUI'
import { useBreakpointIndex } from '@theme-ui/match-media'

export interface AppBarProps extends GridProps {}

/**
 * Navigation bar at the top of the application.
 */
const AppBar = (
  { ...props }: AppBarProps,
  ref: React.RefObject<HTMLDivElement>
) => {
  const { theme } = useTheme()
  const breakpointIndex = useBreakpointIndex()
  const [mobileExpand, setMobileExpand] = useState(false)
  const [mobileShow, setMobileShow] = useState(true)
  const inputRef = useRef<HTMLInputElement>()

  /* The app bar height should be the same size as input fields. */
  const { height } = theme.forms.inputs.default

  /* Use expansion toggling on narrow viewports. */
  const isMobileBreakpoint = breakpointIndex < 2
  const expandedMobile = mobileExpand && isMobileBreakpoint
  const showContent = !isMobileBreakpoint || mobileShow

  /**
   * Expand handler (Mobile UX)
   *
   * Called during the focus event for the search
   * input field. On mobile devices, this hides the
   * content and begins expanding the form to full width.
   */
  const handleExpand = () => {
    if (mobileExpand) return
    setMobileExpand(true)
    setMobileShow(false)
  }

  /**
   * Collapse handler
   *
   * Called when the small left chevron arrow is clicked,
   * on the field is blurred from a desktop-wide viewport.
   *
   * @param {boolean} immediate Collapse without a delay.
   */
  const handleCollapse = (immediate?: boolean) => {
    if (!mobileExpand) return
    setMobileExpand(false)

    /* Show content after transition completes. */
    setTimeout(() => setMobileShow(true), immediate ? 0 : 500)
  }

  /**
   * Blur handler
   *
   * Used to immediately transition to the collapsed
   * state, when a field is blurred from a desktop-wide device.
   */
  const handleBlur = () => {
    if (!isMobileBreakpoint) handleCollapse(true)
  }

  const handleSearch = () => {}

  return (
    <Grid
      columns="1fr auto"
      sx={{ height, alignItems: 'center' }}
      {...{ ref, ...props }}
    >
      {/* Left-aligned section. */}
      <Flex sx={{ gap: 4, alignItems: 'center' }}>
        <IconButton
          sx={{ height, width: height, padding: 0 }}
          onClick={() => handleCollapse()}
        >
          <Icon
            icon={expandedMobile ? 'arrowSmallLeft' : 'upshot'}
            color={expandedMobile ? 'grey-600' : 'primary'}
            size={expandedMobile ? 24 : '100%'}
            style={{ marginLeft: expandedMobile ? -4 : 0 }}
          />
        </IconButton>
        <Flex
          sx={{
            flexDirection: 'column',
            width: expandedMobile ? '100%' : isMobileBreakpoint ? 140 : 300,
            transition: 'default',
            transitionDuration: '.5s',
          }}
        >
          <InputRoundedSearch
            onFocus={handleExpand}
            onBlur={handleBlur}
            hasButton={expandedMobile}
            ref={inputRef}
            buttonProps={{ onClick: handleSearch }}
          />
        </Flex>

        {showContent && <Link>FAQ</Link>}
      </Flex>

      {/* Right-aligned section. */}
      {showContent && <Text>[Button]</Text>}
    </Grid>
  )
}

export default forwardRef(AppBar)
