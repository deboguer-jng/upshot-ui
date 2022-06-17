import styled from '@emotion/styled'
import { transparentize } from 'polished'
import colors from '../../../themes/UpshotUI/colors'
import { fonts, fontWeights, fontSizes } from '../../../themes/UpshotUI/text'
import sizes from '../../../themes/UpshotUI/sizes'
import Button from '../Button'
import Box from '../../Layout/Box'
import { transientOptions } from '../../../themes'

interface LabelAttributeBaseProps {
  $transparent: boolean
  hasHover?: boolean
  expanded?: boolean
}

interface LabelTextProps {
  showTooltip: boolean
}

export const LabelAttributeBase = styled(
  'div',
  transientOptions
)<LabelAttributeBaseProps>`
  border-radius: ${({ theme, expanded }) =>
    expanded ? theme.radii.lg : theme.radii.pill};
  color: ${colors.blue};
  border-color: ${colors.blue};
  border: 2px solid;
  border-width: 2;
  min-height: 32px;
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

  &:hover {
    ${({ theme, $transparent, hasHover }) =>
      hasHover &&
      `
      background-color: ${
        $transparent
          ? transparentize(0.8, theme.rawColors.primary)
          : 'transparent'
      };
    `}
  }
`

export const RightAlignBlock = styled('div', transientOptions)`
  display: flex;
  float: right;
  width: 90px;
  justify-content: space-between;
  padding-right: ${sizes[3] + 'px'};
`

export const LabelText = styled('div', transientOptions)<LabelTextProps>`
  padding-left: ${sizes[3] + 'px'};
  text-overflow: ellipsis;
  width: 75%;
  overflow: hidden;
  height: 20px;
  white-space: nowrap;
  display: inline-block;
  opacity: ${({ showTooltip }) => (showTooltip ? 0.7 : 1)};
`

export const ExpandedLabelAttributeTitleText = styled(
  LabelText,
  transientOptions
)`
  font-weight: ${fontWeights.body};
  font-size: ${fontSizes[2]};
`

export const ExpandedLabelAttributeText = styled(LabelText, transientOptions)`
  font-weight: ${fontWeights.bold};
  font-size: ${fontSizes[3]};
`

export const Division = styled('div', transientOptions)`
  display: inline-block;
`
export const CloseButton = styled(Button, transientOptions)`
  padding: 0;
  padding-right: ${sizes[3] + 'px'};

  &:not(:disabled):hover {
    span {
      text-decoration: none;
    }
  }
`

export const LabelAttributeTooltip = styled('div', transientOptions)`
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

export const LabelAttributeExpandedTextContainer = styled(
  Box,
  transientOptions
)`
  margin: 11px 0px 10px 5px;
  width: 95%;
`
