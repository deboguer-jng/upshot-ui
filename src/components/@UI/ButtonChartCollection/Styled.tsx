import styled from '@emotion/styled'
import colors from '../../../themes/UpshotUI/colors'

interface ButtonChartCollectionIconProps {
  selected: Boolean
  $color: keyof typeof colors
}

export const ButtonChartCollectionWrapper = styled.div`
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
