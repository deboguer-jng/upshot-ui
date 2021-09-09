import React from 'react'
import { FooterLine, StyledBoxMiddleSeparate, StyledBox, StyledBoxLeft, StyledBoxRight, StyledBoxMiddle} from './Styled'
import Flex from '../../Layout/Flex'
import { FlexProps } from 'theme-ui'
import Icon from '../../@UI/Icon'
import IconButton from '../../@UI/IconButton'


/** Provides a Footer */
export default function Footer({ ...props }: FlexProps) {
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
                  color="primary"
                  icon="mediumBlock"
                  size={24}
                />
              </IconButton>
                
              </StyledBoxMiddle>
              <StyledBoxMiddle>
                
              <IconButton>  
                <Icon
                  color="primary"
                  icon="twitterCircle"
                  size={24}
                />
              </IconButton>
                
              </StyledBoxMiddle>
              <StyledBoxMiddle>
                
              <IconButton>  
                <Icon
                  color="primary"
                  icon="instagramCircle"
                  size={24}
                />
              </IconButton>
                
              </StyledBoxMiddle>
              <StyledBoxMiddle>
                
              <IconButton>  
                <Icon
                  color="primary"
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