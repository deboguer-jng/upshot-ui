import styled from '@emotion/styled'
import colors from '../../../themes/UpshotUI/colors'
import Icon, { IconProps } from '../Icon'
import { HTMLAttributes } from 'react'

interface ButtonChartCollectionIconProps {
  selected: Boolean
  $color: keyof typeof colors
}

interface ButtonChartCollectionCloseIcon extends IconProps {
  show: Boolean
}

export const ButtonChartCollectionWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const ButtonChartCollectionContentWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const ButtonChartCollectionIcon = styled.div<ButtonChartCollectionIconProps>`
  width: 18px;
  height: 18px;
  border-radius: 9px;
  margin-right: 10px;
  background: ${({ theme, selected, $color }) =>
    selected ? theme.colors[$color] : theme.colors.transparent};
  border: 3px solid ${({ theme, $color }) => theme.colors[$color]};
`

export const ButtonChartCollectionCloseIcon = styled(
  Icon
)<ButtonChartCollectionCloseIcon>`
  margin-left: 10px;
  width: 12px;
  height: 12px;
  cursor: pointer;
  display: ${({ show }) => (show ? 'block' : 'none')};
`
