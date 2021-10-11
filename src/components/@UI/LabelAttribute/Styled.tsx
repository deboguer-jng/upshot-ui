import styled from '@emotion/styled'
import { transparentize } from 'polished'
import colors from '../../../themes/UpshotUI/colors'
import { fonts, fontWeights, fontSizes } from '../../../themes/UpshotUI/text'
import sizes from '../../../themes/UpshotUI/sizes'
import Button from '../Button'

interface LabelAttributeBaseProps {
  $transparent: boolean
}

interface LabelTextProps {
  showTooltip: boolean
}

export const LabelAttributeBase = styled.div<LabelAttributeBaseProps>`
  border-radius: ${({ theme }) => theme.radii.pill};
  color: ${colors.blue};
  border-color: ${colors.blue};
  border: 2px solid;
  border-width: 2;
  height: 32px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme, $transparent }) =>
    $transparent
      ? 'transparent'
      : transparentize(0.8, theme.rawColors.primary)};
  font-family: ${fonts.body};
  font-weight: ${fontWeights.body};
  font-size: ${fontSizes[4]};
  text-transform: capitalize;
  position: relative;
  align-items: center;
`

export const RightAlignBlock = styled.div`
  display: flex;
  float: right;
  padding-right: ${sizes[3] + 'px'};
`

export const LabelText = styled.div<LabelTextProps>`
  padding-left: ${sizes[3] + 'px'};
  text-overflow: ellipsis;
  width: 57%;
  overflow: hidden;
  height: 20px;
  white-space: nowrap;
  display: inline-block;
  opacity: ${({ showTooltip }) => (showTooltip ? 0.7 : 1)};
`

export const Division = styled.div`
  padding-right: ${sizes[5] + 'px'};
  display: inline-block;
`
export const CloseButton = styled(Button)`
  padding: 0;
  padding-right: ${sizes[3] + 'px'};

  &:not(:disabled):hover {
    span {
      text-decoration: none;
    }
  }
`

export const LabelAttributeTooltip = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(calc(-100% - 5px));
  width: 150px;
  padding: 12px;
  border-radius: 10px;
  background: black;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.7);
`
