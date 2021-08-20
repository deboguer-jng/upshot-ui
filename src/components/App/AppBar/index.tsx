import React, { useState, useRef, forwardRef } from 'react'
import Icon from '../../@UI/Icon'
import IconButton from '../../@UI/IconButton'
import { Text, Link, Grid, Flex, GridProps } from 'theme-ui'
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
  /* The app bar height should be the same size as input fields. */
  const { theme } = useTheme()
  const { height } = theme.forms.inputs.default

  /* Use expansion toggling on narrow viewports. */
  const breakpointIndex = useBreakpointIndex()
  const [mobileExpand, setMobileExpand] = useState(false)
  const [mobileShow, setMobileShow] = useState(true)

  const isSmBreakpoint = breakpointIndex < 2 // Mobile & Tablet
  const expandedMobile = mobileExpand && isSmBreakpoint
  const showContent = !isSmBreakpoint || mobileShow

  /* Search state */
  const [search, setSearch] = useState('')

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
    if (!isSmBreakpoint) handleCollapse(true)
  }

  const handleSearch = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault()

    /**
     * @todo Connect to search API
     */
    console.log({ search })
  }

  return (
    <Grid
      columns="1fr auto"
      sx={{ height, alignItems: 'center' }}
      {...{ ref, ...props }}
    >
      {/* Left-aligned section. */}
      <Flex
        as="form"
        sx={{ gap: 4, alignItems: 'center' }}
        onSubmit={handleSearch}
      >
        <IconButton
          type="button"
          onClick={() => handleCollapse()}
          sx={{ height, width: height, padding: 0 }}
        >
          <Icon
            icon={expandedMobile ? 'arrowSmallLeft' : 'upshot'}
            color={expandedMobile ? 'grey-600' : 'primary'}
            size={expandedMobile ? 24 : '100%'}
            style={{ marginLeft: expandedMobile ? -4 : 0 }}
            aria-label={expandedMobile ? 'Back button' : 'Upshot logo'}
          />
        </IconButton>
        <Flex
          sx={{
            flexDirection: 'column',
            width: expandedMobile ? '100%' : isSmBreakpoint ? 140 : 300,
            transition: 'default',
            transitionDuration: '.5s',
          }}
        >
          <InputRoundedSearch
            onFocus={handleExpand}
            onBlur={handleBlur}
            hasButton={expandedMobile}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            buttonProps={{ type: 'submit' }}
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
