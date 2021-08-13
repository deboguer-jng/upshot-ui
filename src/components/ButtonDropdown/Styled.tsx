import styled from '@emotion/styled'

interface DropdownProps {
  open: boolean
  disabled: boolean
  isMulti: boolean
}

interface DropdownMenuArrowProps {
  open: boolean
  disabled: boolean
}

interface DropdownSelectedProps {
  isSelected: boolean
  disabled: boolean
}

interface DropdownMenuItemProps {
  isSelected: boolean
  noSelected: boolean
  isMulti: boolean
}

export const DropdownWrapper = styled.div`
  position: relative;
`

export const Dropdown = styled.div<DropdownProps>`
  position: relative;
  z-index: 1;
  border-radius: 30px;
  height: 35px;
  background: black;
  width: 300px;
  padding: 6px 12px;
  display: flex;
  align-items: center;

  span {
    color: ${({ theme, isMulti, disabled }) =>
      disabled
        ? theme.colors['grey-600']
        : isMulti
        ? theme.colors['grey-300']
        : theme.colors['grey-500']};
  }
`

export const DropdownMenuArrow = styled.div<DropdownMenuArrowProps>`
  display: flex;
  align-items: center;

  svg {
    width: 15px;
    transform: rotate(${({ open }) => (open ? '180deg' : '0deg')});

    path {
      fill: ${({ theme, disabled }) =>
        disabled ? theme.colors['grey-600'] : theme.colors.primary};
    }
  }
`

export const DropdownMenuItems = styled.div`
  overflow: auto;
  height: -webkit-fill-available;
  background: transparent;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors['grey-700']};
    border-radius: 5px;
    outline: none;
  }
`

export const DropdownMenu = styled.div`
  position: absolute;
  z-index: 0;
  background: #151515;
  padding-top: 35px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 30px;
  border-radius: 30px;
  height: 237px;
  width: 300px;
  top: 0;
  left: 0;
  overflow: hidden;
`

export const DropdownSelected = styled.div<DropdownSelectedProps>`
  flex-grow: 1;
  margin-left: 6px;
  color: ${({ theme, isSelected, disabled }) =>
    disabled
      ? theme.colors['grey-600']
      : isSelected
      ? theme.colors.primary
      : theme.colors['grey-300']};
`

export const DropdownMenuItem = styled.div<DropdownMenuItemProps>`
  display: flex;
  align-items: center;
  padding: 8px 11px;
  user-select: none;
  color: ${({ theme, isSelected, noSelected, isMulti }) => {
    if (isMulti) return theme.colors['grey-300']
    if (noSelected) return 'white'
    if (isSelected) return 'white'
    return theme.colors['grey-700']
  }};

  &:hover {
    background: ${({ theme }) => theme.colors['grey-800']};
  }
`

export const DropdownMultiSelected = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 12px;

  svg {
    width: 15px;
    path {
      fill: ${({ theme }) => theme.colors['grey-400']};
    }
  }
`

export const DropdownMultiSelectedCount = styled.div`
  position: absolute;
  top: -6.5px;
  right: -6.5px;
  font-size: 10px;
  line-height: 12px;
  width: 13px;
  height: 13px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors['grey-800']};
  border: 1px solid ${({ theme }) => theme.colors['grey-800']};
`
