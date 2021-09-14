import styled from '@emotion/styled'

interface SwitchDropdownHeaderProps {
  open: boolean
}

export const SwitchDropdownWrapper = styled.div``

export const SwitchDropdownHeader = styled.div<SwitchDropdownHeaderProps>`
  display: flex;
  align-items: center;
  padding: 8px;

  svg {
    width: 16px;
    height: 16px;
    margin-left: 8px;
    cursor: pointer;
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
`

export const SwitchDropdownOption = styled.div`
  cursor: pointer;
  padding: 5px 0;
`
