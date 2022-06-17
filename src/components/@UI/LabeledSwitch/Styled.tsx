import styled from '@emotion/styled'

interface LabeledSwitchButtonProps {
  $on?: boolean
}

export const LabeledSwitchBase = styled('div', transientOptions)`
  display: flex;
  cursor: pointer;
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.rawColors.blue + ' 0px 0px 0px 1.5px'};
  color: ${({ theme }) => theme.colors.blue};
`

export const LabeledSwitchButton = styled(
  'div',
  transientOptions
)<LabeledSwitchButtonProps>`
  display: flex;
  height: 36px;
  align-items: center;
  justify-content: center;
  user-select: none;
  padding: 0 ${({ theme }) => theme.space[5] + 'px'};
  background: ${({ theme, $on }) => theme.colors[$on ? 'blue' : 'black']};
  color: ${({ theme, $on }) => theme.colors[$on ? 'black' : 'blue']};
  border-radius: ${({ theme }) => theme.radii.pill};
  transition: ${({ theme }) => theme.transitions.default};
  flex-grow: ${({ $on }) => ($on ? 0 : 1)};
`
