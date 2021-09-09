import React, { forwardRef } from 'react'
import { FooterLine, StyledBoxMiddleSeparate, StyledBox, StyledBoxLeft, StyledBoxRight, StyledBoxMiddle} from './Styled'
import Flex from '../../Layout/Flex'
import { FlexProps } from 'theme-ui'
import Icon from '../../@UI/Icon'
import IconButton from '../../@UI/IconButton'


/**
 * Footer at the bottom of the application.
 */
const Footer = forwardRef(
  ({ ...props }: FlexProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <FooterLine gap={2} columns={[3, '2fr,1fr,2fr']} { ...props } >

        <StyledBoxLeft>
          Upshot
        </StyledBoxLeft>
        <StyledBox>
          <Flex>
              <StyledBoxMiddle>              
                  Whitepaper               
              </StyledBoxMiddle>
              <StyledBoxMiddleSeparate>|</StyledBoxMiddleSeparate>
              <StyledBoxMiddle>               
                  Privacy               
              </StyledBoxMiddle>
              <StyledBoxMiddleSeparate>|</StyledBoxMiddleSeparate>
              <StyledBoxMiddle>          
                  FAQ               
              </StyledBoxMiddle>
          </Flex>
        </StyledBox>
        <StyledBoxRight>
        <Flex>
              <StyledBoxMiddle>
              <IconButton>  
                <Icon
                  color="grey-700"
                  icon="mediumBlock"
                  size={24}
                />
              </IconButton>
                
              </StyledBoxMiddle>
              <StyledBoxMiddle>
                
              <IconButton>  
                <Icon
                  color="grey-700"
                  icon="twitterCircle"
                  size={24}
                />
              </IconButton>
                
              </StyledBoxMiddle>
              <StyledBoxMiddle>
                
              <IconButton>  
                <Icon
                  color="grey-700"
                  icon="instagramCircle"
                  size={24}
                />
              </IconButton>
                
              </StyledBoxMiddle>
              <StyledBoxMiddle>
                
              <IconButton>  
                <Icon
                  color="grey-700"
                  icon="facebook"
                  size={24}
                />
              </IconButton>
              
            </StyledBoxMiddle>
          </Flex>
        </StyledBoxRight>
      </FooterLine>
    ) 
  }
)

export default Footer