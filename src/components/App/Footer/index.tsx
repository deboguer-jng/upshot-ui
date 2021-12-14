import React, { forwardRef } from 'react'
import {
  FooterLine,
  StyledBoxMiddleSeparate,
  StyledBox,
  StyledBoxLeft,
  StyledBoxRight,
  StyledBoxMiddle,
  LogoBox,
  StyledMiddleLink,
} from './Styled'
import Flex from '../../Layout/Flex'
import { FlexProps, Link } from 'theme-ui'
import Icon from '../../@UI/Icon'
import IconButton from '../../@UI/IconButton'

interface FooterProps extends FlexProps {
  /**
   * Sidebar is visible.
   */
  sidebarVisible?: boolean
}

/**
 * Footer at the bottom of the application.
 */
const Footer = forwardRef(
  (
    { sidebarVisible = false, ...props }: FooterProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const iconColor = sidebarVisible ? 'white' : 'grey-700'

    return (
      <FooterLine {...{ ref, ...props }}>
        <StyledBoxLeft>
          <LogoBox href="https://upshot.io/" target="_blank">
            Upshot
          </LogoBox>
          <StyledBox>
            <Flex>
              <StyledMiddleLink
                href="https://upshot.io/whitepaper.pdf"
                target="_blank"
              >
                Whitepaper
              </StyledMiddleLink>
              <StyledBoxMiddleSeparate>|</StyledBoxMiddleSeparate>
              <StyledMiddleLink
                href="https://upshot.io/wp-content/uploads/2021/05/privacy.pdf"
                target="_blank"
              >
                Privacy
              </StyledMiddleLink>
              <StyledBoxMiddleSeparate>|</StyledBoxMiddleSeparate>
              <StyledMiddleLink href="https://upshot.io/faq/" target="_blank">
                FAQ
              </StyledMiddleLink>
            </Flex>
          </StyledBox>
        </StyledBoxLeft>
        <StyledBoxRight>
          <Flex>
            <StyledBoxMiddle>
              <Link href="https://blog.upshot.io/" target="_blank">
                <IconButton>
                  <Icon
                    color={iconColor}
                    icon="mediumBlock"
                    size={24}
                    style={{ transition: 'all 0.5s ease', flexShrink: 0 }}
                  />
                </IconButton>
              </Link>
            </StyledBoxMiddle>
            <StyledBoxMiddle>
              <Link href="https://twitter.com/upshothq" target="_blank">
                <IconButton>
                  <Icon
                    color={iconColor}
                    icon="twitterCircle"
                    size={24}
                    style={{ transition: 'all 0.5s ease', flexShrink: 0 }}
                  />
                </IconButton>
              </Link>
            </StyledBoxMiddle>
            <StyledBoxMiddle>
              <Link href="https://discord.gg/upshot" target="_blank">
                <IconButton>
                  <Icon
                    color={iconColor}
                    icon="discord"
                    size={24}
                    style={{ transition: 'all 0.5s ease', flexShrink: 0 }}
                  />
                </IconButton>
              </Link>
            </StyledBoxMiddle>
            <StyledBoxMiddle>
              <Link href="https://www.instagram.com/upshot.hq/" target="_blank">
                <IconButton>
                  <Icon
                    color={iconColor}
                    icon="instagramCircle"
                    size={24}
                    style={{ transition: 'all 0.5s ease', flexShrink: 0 }}
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
