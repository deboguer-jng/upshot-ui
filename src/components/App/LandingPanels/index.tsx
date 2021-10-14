import React, { forwardRef, useState, useEffect, useRef } from 'react'
import { PanelProps } from '../../@UI/Panel'
import { StyledAvatar, StyledText, StyledTitle, StyledLink, StyledDescription, StyledPanel, StyledIcon } from './Styled'
import { Box } from 'theme-ui'

export interface LandingPanelProps extends PanelProps {
  /**
   * 
   */
  projectType?: string
  /**
   * 
   */
  title: string
  /**
   * 
   */
  description: string
  /**
   * 
   */
  url?: string
  /**
   * 
   */
  image?: string
}

/**
 * Provides a surface for UI elements.
 */
const LandingPanel = forwardRef(
  (
    {
      projectType,
      title,
      description,
      url,
      image,
      ...props
    }: LandingPanelProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [width, setWidth] = useState(0)
    const panelRef = useRef<HTMLDivElement>()

    useEffect(() => {
      let width = (panelRef.current as HTMLElement).clientWidth
      setWidth(width)
    })

    return (
      <div {...{ ref, ...props }}>
        <StyledPanel ref={panelRef}>
          <StyledLink href={url}>
            <Box>
              <StyledAvatar src={image} />
              <StyledIcon icon='openLink' color='grey-700' size='20' />
              <StyledText color='grey-600' variant='large'>{projectType}</StyledText>
              <StyledTitle variant='h3Primary' color='grey-300'>{title} {width}</StyledTitle>
            </Box>
          </StyledLink>
          <StyledDescription color='grey-500'>
            {description}
          </StyledDescription>
        </StyledPanel>
      </div>
    )
  }
)

export default LandingPanel
