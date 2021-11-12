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
    transition: ${({ theme }) => theme.transitions.default};

    path {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`

export const SwitchDropdownOptions = styled.div<SwitchDropdownOptionsProps>`
  position: relative;
  // padding-left: 8px;
  // padding-right: 8px;
  width: 100%;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? 1 : 0)};
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  transition: ${({ theme }) => theme.transitions.default};
`

export const SwitchDropdownOption = styled.div`
  cursor: pointer;
`
