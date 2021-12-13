import React, { forwardRef } from 'react'

import Panel from '../../@UI/Panel'
import { PanelProps } from '../../@UI/Panel'
import Icon from '../../@UI/Icon'
import Text from '../../@UI/Text'
import Flex from '../../Layout/Flex'
import Box from '../../Layout/Box'
import { StyledPanel, StyledButton, StyledText, StyledBox } from './Styled'

export interface OpenseaPanelProps extends PanelProps {
  /**
   * Project type - upper title
   */
  variant?: 'wide' | 'popup'
}

/**
 * Provides big and small project panels.
 */
const OpenseaPanel = forwardRef(
  (
    {
      variant = 'wide',
      ...props
    }: OpenseaPanelProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
   
    return (
      <StyledPanel $variant={variant}>
        <StyledButton variant="secondary" size="md" capitalize={true}>
          <Icon
            icon="openSeaBlock"
            color="white"
            size={16}
            style={{
              verticalAlign: 'middle',
              marginRight: '6px',
            }}
          />
          <StyledText color="white">
            Buy on Opensea
          </StyledText>
          
        </StyledButton>

        <Flex sx={{ gap: 4 }}>
          <Flex
            sx={{
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Box>
              <Icon
                icon="upshot"
                color="green"
                size={16}
                style={{
                  verticalAlign: 'middle',
                  marginRight: '6px',
                }}
              />
              <StyledText color="green" variant="large">
                Underpriced
              </StyledText>
            </Box>
            

            <StyledBox>
              <Text color="grey-500">
                { variant === 'wide' && (
                  'Listed'
                )}
                { variant === 'popup' && (
                  'This NFT is listed'
                )}
              </Text>
              &nbsp; { variant === 'popup' && (
                <br />
              )}
              <Text color="green">
                29% below appraisal price
              </Text>
              &nbsp; { variant === 'popup' && (
                <br />
              )}
              <Text color="grey-500">
                at
              </Text>
              &nbsp;
              <Text color="grey-400">
                Ξ0,000 ($0,000,000)
              </Text>
            </StyledBox>
          </Flex>
        </Flex>
      </StyledPanel>
    )
  }
)

export default OpenseaPanel
