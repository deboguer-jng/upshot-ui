import React, { forwardRef, useState, useEffect, useRef } from 'react'
import { Box } from 'theme-ui'

import Text from '../../@UI/Text'
import { PanelProps } from '../../@UI/Panel'
import { StyledAvatar, StyledText, StyledDescription, StyledPanel, StyledIcon } from './Styled'
import colors from '../../../themes/UpshotUI/colors'

export interface LandingPanelProps extends PanelProps {
  /**
   * Project type - upper title
   */
  projectType?: string
  /**
   * Card title
   */
  title: string
  /**
   * Description
   */
  description: string
  /**
   * Card URL
   */
  image?: string
  /**
   * Show "openLink" icon (top-right)
   */
  showLinkIcon?: boolean
  /**
   * Underglow color on :hover
   */
  hoverUnderglow?: keyof typeof colors
  /**
   * Is card disabled?
   */
  disabled?: boolean
}

/**
 * Provides big and small project panels.
 */
const LandingPanel = forwardRef(
  (
    {
      projectType,
      title,
      description,
      image,
      showLinkIcon = true,
      hoverUnderglow = 'blue',
      disabled = false,
      ...props
    }: LandingPanelProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [width, setWidth] = useState(0)
    const [isBig, setIsBig] = useState(false)
    const panelRef = useRef<HTMLDivElement>()


    useEffect(() => {
      function handleResize() {
        if (typeof panelRef.current !== null) {
          let width = (panelRef.current as HTMLElement).clientWidth
          setWidth(width)
          setIsBig(width > 300)
        }
      }
      handleResize()
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [width])

    return (
      <Box {...{ ref, ...props }}>
        <StyledPanel ref={panelRef} hoverUnderglow={hoverUnderglow} $isBig={isBig} >
          <Box>
            { showLinkIcon && (
              <StyledIcon icon='openLink' color='grey-700' size='20' />
            )}
            { isBig && (
              <>
                <StyledAvatar src={image} />
                <StyledText color='grey-600' variant='large'>{projectType}</StyledText>
              </>
            )}
            <Text variant='h3Primary' color={disabled ? 'grey-600' : 'grey-300'}>{title}</Text>
          </Box>
          <StyledDescription $isBig={isBig} color={disabled ? 'grey-600' : 'grey-500'}>
            {description}
          </StyledDescription>
        </StyledPanel>
      </Box>
    )
  }
)

export default LandingPanel
