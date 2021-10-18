import styled from '@emotion/styled'

interface SwitchDropdownHeaderProps {
  open: boolean
}

interface SwitchDropdownOptionsProps {
  open: boolean
}

export const SwitchDropdownWrapper = styled.div`
  position: relative;
`

export const SwitchDropdownHeader = styled.div<SwitchDropdownHeaderProps>`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
    margin-left: 8px;
    transform: rotate(${({ open }) => (open ? '180' : '0')}deg);

    path {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`

export const SwitchDropdownOptions = styled.div<SwitchDropdownOptionsProps>`
  position: absolute;
  padding: 8px;
  background: rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  width: fit-content;
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  // transition: ${({ theme }) => theme.transitions.default};
  transition: all 1s ease-in-out;
`

export const SwitchDropdownOption = styled.div`
  cursor: pointer;
  padding: 5px 0;
`
