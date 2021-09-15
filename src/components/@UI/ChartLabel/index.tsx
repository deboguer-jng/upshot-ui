import React, { forwardRef } from 'react'
import Colors from '../../../themes/UpshotUI/colors'
import Box from '../../Layout/Box'
import Flex from '../../Layout/Flex'
import Icon from '../../@UI/Icon'
import { Text } from 'theme-ui'
import { IconBox, StyledIconButton, StyledTitle, StyledH2, StyledChangeDiv } from './Styled'
import { padding } from 'polished'

export interface LabelProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 
   */
  type: 'alone' | 'multi'
  /**
   * 
   */
  title: string
  /**
   * 
   */
  price: string
  /**
   * 
   */
  change: string
  /**
   * 
   */
  titleColor?: keyof typeof Colors
}

/**
 *
 * Provides a basic label or a currency label of various sizes.
 */
const Label = forwardRef(
  (
    {
      type,
      title,
      price,
      change,
      titleColor = 'primary',
      ...props
    }: LabelProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <Flex {...{ ref, ...props }}>
        {/* Each combination of style and size is a unique variant of the theme */}
        <IconBox $color={titleColor}>
          <StyledIconButton
            type="button"
            onClick={() => console.log('close click')}
          >
            <Icon
              size={12}
              color={titleColor}
              icon='x'
            />
          </StyledIconButton> 
        </IconBox>
        <Box>
          <StyledTitle $color={titleColor}>
            {title}
          </StyledTitle>
          <StyledH2 $type={type}>
            {price}
          </StyledH2>
          <StyledChangeDiv $type={type}>
            {change}
          </StyledChangeDiv>

        </Box>
      </Flex>
    )
  }
)

export default Label
