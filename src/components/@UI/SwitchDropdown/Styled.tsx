import styled from '@emotion/styled'

interface SwitchDropdownHeaderProps {
  open: boolean
}

export const SwitchDropdownWrapper = styled.div``

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

export const SwitchDropdownOptions = styled.div`
  padding: 8px;
  background: rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin-top: ${({ theme }) => `-${theme.sizes[6]}px`};
`

export const SwitchDropdownOption = styled.div`
  cursor: pointer;
  padding: 5px 0;
`
