import React, { forwardRef } from 'react'
import { FooterLine, StyledBoxMiddleSeparate, StyledBox, StyledBoxLeft, StyledBoxRight, StyledBoxMiddle} from './Styled'
import Flex from '../../Layout/Flex'
import { FlexProps, Link } from 'theme-ui'
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

              <Link href="https://blog.upshot.io/" target="_blank">
                <IconButton>  
                  <Icon
                    color="grey-700"
                    icon="mediumBlock"
                    size={24}
                  />
                </IconButton>
              </Link>
                
              </StyledBoxMiddle>
              <StyledBoxMiddle>
                
              <Link href="https://twitter.com/upshothq" target="_blank">
                <IconButton>  
                  <Icon
                    color="grey-700"
                    icon="twitterCircle"
                    size={24}
                  />
                </IconButton>
              </Link>
                
              </StyledBoxMiddle>
              <StyledBoxMiddle>
              
                <Link href="https://discord.gg/upshot" target="_blank">
                  <IconButton>  
                    <Icon
                      color="grey-700"
                      icon="discord"
                      size={24}
                    />
                  </IconButton>
                </Link>
              
              </StyledBoxMiddle>
              <StyledBoxMiddle>
                
              <Link href="https://www.instagram.com/upshot.hq/" target="_blank">
                <IconButton>  
                  <Icon
                    color="grey-700"
                    icon="instagramCircle"
                    size={24}
                  />
                </IconButton>
              </Link>
                
              </StyledBoxMiddle>
          </Flex>
        </StyledBoxRight>
      </FooterLine>
    ) 
  }
)

export default Footer