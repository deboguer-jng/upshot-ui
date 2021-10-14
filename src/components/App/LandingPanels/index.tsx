import React, { forwardRef } from 'react'
import { PanelProps } from '../../@UI/Panel'
import { StyledAvatar, StyledText, StyledTitle, StyledLink, StyledDescription, StyledPanel, StyledIcon } from './Styled'
import { Link, Box } from 'theme-ui'
import { Icon } from '../../..'

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
  ) => (
    <StyledPanel {...{ ref, ...props }}>
      <StyledLink href={url}>
        <Box>
          <StyledAvatar src={image} />
          <StyledIcon icon='openLink' color='grey-700' size='20' />
          <StyledText color='grey-600' variant='large'>{projectType}</StyledText>
          <StyledTitle variant='h3Primary' color='grey-300'>{title}</StyledTitle>
        </Box>
      </StyledLink>
      <StyledDescription color='grey-500'>
        {description}
      </StyledDescription>
    </StyledPanel>
  )
)

export default LandingPanel
