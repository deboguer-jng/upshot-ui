import styled from '@emotion/styled'
import colors from '../../themes/UpshotUI/colors'
import { fonts, fontWeights, fontSizes } from '../../themes/UpshotUI/text'
import sizes from '../../themes/UpshotUI/sizes'

interface AttributeLabelBaseProps {
  $transparent: boolean
}

export const AttributeLabelBase = styled.div<AttributeLabelBaseProps>`
  border-radius: ${({ theme }) => theme.radii.pill};
  color: ${colors.blue};
  border-color: ${colors.blue};
  border: 1px solid;
  border-width: 2;
  height: 32px;
  width: 282px;
  display: inline-block;
  background-color: ${({ $transparent }) => $transparent ? 'transparent' : colors.transparentBlue };
  font-family: ${ fonts.body };
  font-weight: ${ fontWeights.body };
  font-size: ${ fontSizes[4] };
  padding-top: ${ sizes[1] + 'px' };
`

export const RightAlignBlock = styled.div`
  float: right;
  padding-right: ${ sizes[3] + 'px' };
`

export const LabelText = styled.div`
  padding-left: ${ sizes[3] + 'px' };
  display: inline-block;
`

export const Division = styled.div`
  font-size: ${ fontSizes[4] };
  padding-right: ${ sizes[3] + 'px' };
  display: inline-block;
`
