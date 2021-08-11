import styled from '@emotion/styled'

interface PrimaryButtonProps {
  activeBackgroundColor?: string
  activeColor?: string
  hoverBackgroundColor?: string
  hoverColor?: string
  color2?: string
  background?: string
  border?: string
  color?: string
  height?: number
  width: number
  size: boolean
  minimized: boolean
}

interface PlainButtonProps {
  color: string
  height: number
  clickedColor: string
}

interface DisclosureButtonProps {
  color: string
  background: string
  width?: number
  active: boolean
  size: boolean
  height: number
}

export const PrimaryButton = styled.button`
  background: ${(props: PrimaryButtonProps) => props.background};
  border: ${(props: PrimaryButtonProps) =>
    props.border ? `2px solid ${props.border}` : 'none'};
  font-size: ${(props: PrimaryButtonProps) => (props.size ? 18 : 24)}px;
  height: ${(props: PrimaryButtonProps) => props.height}px;
  border-radius: ${(props: PrimaryButtonProps) => props.height / 2}px;
  width: ${(props: PrimaryButtonProps) => props.width}px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;

  & svg {
    margin-right: ${(props: PrimaryButtonProps) =>
      props.minimized ? 0.25 : 0}rem;
    width: 1rem;
  }

  & * {
    fill: ${(props: PrimaryButtonProps) => props.color};
  }

  span {
    flex-grow: 1;
    color: ${(props: PrimaryButtonProps) => props.color};
  }

  &:disabled {
    cursor: not-allowed !important;
  }

  &:not(:disabled):hover {
    background: ${(props: PrimaryButtonProps) => props.hoverBackgroundColor};

    span {
      color: ${(props: PrimaryButtonProps) => props.hoverColor};
    }

    & * {
      fill: ${(props: PrimaryButtonProps) => props.hoverColor};
    }
  }

  &:focus {
    box-shadow: 0px 4px 4px rgba(0, 145, 255, 0.6);
  }

  &:not(:disabled):active {
    background: ${(props: PrimaryButtonProps) => props.activeBackgroundColor};

    span {
      color: ${(props: PrimaryButtonProps) => props.activeColor};
    }
    transform: scale(0.95);
  }
`

export const PlainButton = styled.button`
  font-size: 18px;
  border: none;
  background: transparent;
  outline: none;
  color: ${(props: PlainButtonProps) => props.color};
  display: flex;
  align-items: center;
  cursor: pointer;
  height: ${(props: PlainButtonProps) => props.height}px;

  &:not(:disabled):hover {
    span {
      text-decoration: underline;
    }
  }

  & svg {
    margin-left: 0.25rem;
    width: ${(props: PlainButtonProps) => props.height}px;

    & * {
      fill: ${(props: PlainButtonProps) => props.color};
    }
  }

  &:focus {
    color: ${(props: PlainButtonProps) => props.clickedColor};
  }
`

export const DisclosureButton = styled.button`
  background: ${(props: DisclosureButtonProps) => props.background};
  color: ${(props: DisclosureButtonProps) => props.color};
  width: ${(props: PrimaryButtonProps) => props.width}px;
  height: ${(props: PrimaryButtonProps) => props.height}px;
  border-radius: ${(props: PrimaryButtonProps) => props.height / 2}px;
  border: none;
  display: flex;
  font-size: ${(props: PrimaryButtonProps) => (props.size ? 18 : 24)}px;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;

  span {
    flex-grow: 1;
    text-align: left;
  }

  &:disabled {
    cursor: not-allowed !important;

    svg {
      path {
        fill: ${(props: DisclosureButtonProps) => props.color};
      }
    }
  }

  & svg {
    width: 1rem;
    margin-left: 1rem;
    transform: ${(props: PrimaryButtonProps) =>
      props.active ? 'rotate(180deg)' : 'rotate(0)'};
  }

  &:focus {
    box-shadow: 0px 4px 4px rgba(0, 145, 255, 0.6);
  }
`
