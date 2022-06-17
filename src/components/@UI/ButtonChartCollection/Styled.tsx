import styled from '@emotion/styled'
import colors from '../../../themes/UpshotUI/colors'

interface ButtonChartCollectionIconProps {
  selected: Boolean
  $color: keyof typeof colors
}

export const ButtonChartCollectionWrapper = styled('div', transientOptions)`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-right: ${({ theme }) => theme.sizes[5] + 'px'};
  padding-bottom: ${({ theme }) => theme.sizes[1] + 'px'};
`

export const ButtonChartCollectionIcon = styled(
  'div',
  transientOptions
)<ButtonChartCollectionIconProps>`
  width: 18px;
  height: 18px;
  border-radius: ${({ theme }) => theme.sizes[2] + 'px'};
  margin-right: 10px;
  background: ${({ theme, selected, $color }) =>
    selected ? theme.colors[$color] : theme.colors.transparent};
  border: 3px solid ${({ theme, $color }) => theme.colors[$color]};
`
