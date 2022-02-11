import React, { forwardRef } from 'react'
import { BoxProps } from 'theme-ui'
import {
  InvestorImage,
} from './Styled'
import Box from '../../Layout/Box'

import polychainImg from '../../../assets/svg/investors/1_polychain.svg'
import frameworkImg from '../../../assets/svg/investors/2_framework.svg'
import blockchainSapitalImg from '../../../assets/svg/investors/3_bc.svg'
import coinfundImg from '../../../assets/svg/investors/4_coinfund.svg'
import slowImg from '../../../assets/svg/investors/5_slow.svg'
import mechanismImg from '../../../assets/svg/investors/6_mechanism.svg'
import delphiImg from '../../../assets/svg/investors/7_delphi.svg'


/**
 * Footer at the bottom of the application.
 */
const Investors = forwardRef(
  (
    { ...props }: BoxProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
        <Box sx={{ backgroundColor: 'grey-900', padding: '25px', textAlign: 'center' }} >
          <InvestorImage src={polychainImg} />
          <InvestorImage src={frameworkImg} />
          <InvestorImage src={blockchainSapitalImg} />
          <InvestorImage src={coinfundImg} />
          <InvestorImage src={slowImg} />
          <InvestorImage src={mechanismImg} />
          <InvestorImage src={delphiImg} />
        </Box>
    )
  }
)

export default Investors
