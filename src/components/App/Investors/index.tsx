import React, { forwardRef } from 'react'
import { Flex, FlexProps } from 'theme-ui'
import colors from '../../../themes/UpshotUI/colors'
import investorLogos from './investorLogos.json'

/**
 * Investors footer at the bottom of the landing page.
 */
const Investors = forwardRef(
  ({ ...props }: FlexProps, ref: React.ForwardedRef<HTMLDivElement>) => (
    <Flex
      sx={{
        gap: 8,
        p: 8,
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors['grey-900']
      }}
      {...{ ref, ...props }}
    >
      {investorLogos.map((props) => (
        <img width={100} {...props} />
      ))}
    </Flex>
  )
)

export default Investors
