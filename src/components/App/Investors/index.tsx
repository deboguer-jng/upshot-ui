import React, { forwardRef } from 'react'
import { Box, Flex, FlexProps } from 'theme-ui'
import colors from '../../../themes/UpshotUI/colors'
import { Container } from '../../../'
import investorLogos from './investorLogos.json'

/**
 * Investors footer at the bottom of the landing page.
 */
const Investors = forwardRef(
  ({ ...props }: FlexProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <Box sx={{ backgroundColor: colors['grey-900'], padding: 4 }}>
        <Container maxBreakpoint="lg">
          <Flex
            sx={{
              gap: 8,
              p: 8,
              flexWrap: 'wrap',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'center',
              backgroundColor: colors['grey-900'],
            }}
            {...{ ref, ...props }}
          >
            {investorLogos.map((props, key) => (
              <img width={100} {...{ key, ...props }} />
            ))}
          </Flex>
        </Container>
      </Box>
    )
  }
)

export default Investors
