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

interface DropdownMultiSelectedProps {
  disabled: boolean
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
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme, isMulti, disabled }) =>
      disabled
        ? theme.buttons.dropdown.variants.disabled.color
        : isMulti
        ? theme.buttons.dropdown.variants.isMulti.color
        : theme.buttons.dropdown.variants.default.color};
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
        disabled
          ? theme.buttons.dropdown.variants.disabled.color
          : theme.buttons.dropdown.arrow.color};
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
    background-color: ${({ theme }) => theme.buttons.dropdown.scroll.color};
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
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme, isSelected, disabled }) =>
    disabled
      ? theme.buttons.dropdown.variants.disabled.color
      : isSelected
      ? theme.buttons.dropdown.variants.default.selected
      : theme.buttons.dropdown.variants.isMulti.color};
`

export const DropdownMenuItem = styled.div<DropdownMenuItemProps>`
  display: flex;
  align-items: center;
  padding: 8px 11px;
  user-select: none;
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme, isSelected, noSelected, isMulti }) => {
    if (isMulti) return theme.buttons.dropdown.variants.isMulti.color
    if (noSelected) return theme.buttons.dropdown.variants.default.isSelected
    if (isSelected) return theme.buttons.dropdown.variants.default.isSelected
    return theme.buttons.dropdown.variants.default.unSelected
  }};

  &:hover {
    background: ${({ theme }) => theme.colors['grey-800']};
  }
`

export const DropdownMultiSelected = styled.div<DropdownMultiSelectedProps>`
  position: relative;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 12px;
  font-family: ${({ theme }) => theme.fonts.body};

  svg {
    width: 15px;
    height: 15px;
    path {
      fill: ${({ theme, disabled }) =>
        disabled ? theme.colors.transparent : theme.colors['grey-400']};
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
  font-family: ${({ theme }) => theme.fonts.body};
  background-color: ${({ theme }) => theme.buttons.dropdown.count.background};
  color: ${({ theme }) => theme.buttons.dropdown.count.color};
  border: 1px solid ${({ theme }) => theme.buttons.dropdown.count.border};
`
