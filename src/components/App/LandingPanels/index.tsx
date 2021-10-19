import React, { forwardRef, useState, useEffect, useRef } from 'react'
import { PanelProps } from '../../@UI/Panel'
import { StyledAvatar, StyledText, StyledTitle, StyledLink, StyledDescription, StyledPanel, StyledIcon } from './Styled'
import { Box } from 'theme-ui'

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
  url?: string
  /**
   * Card image
   */
  image?: string
  /**
   * Show "openLink" icon (top-right)
   */
  showLinkIcon?: boolean
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
      url,
      image,
      showLinkIcon = true,
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
        <StyledPanel ref={panelRef} $isBig={isBig}>
          <StyledLink href={url}>
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
              <StyledTitle variant='h3Primary' color='grey-300'>{title}</StyledTitle>
            </Box>
          </StyledLink>
          <StyledDescription $isBig={isBig} color='grey-500'>
            {description}
          </StyledDescription>
        </StyledPanel>
      </Box>
    )
  }
)

export default LandingPanel
