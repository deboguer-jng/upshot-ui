import styled from '@emotion/styled'

interface ButtonProps {
  color1?: string
  color2?: string
  background?: string
  border?: string
  color?: string
  height?: number
  width: number
}

export const MainButton = styled.button`
  background: ${(props: ButtonProps) => props.background};
  border: 2px solid ${(props: ButtonProps) => props.border};
  color: ${(props: ButtonProps) => props.color};
  font-size: 18px;
  height: ${(props: ButtonProps) => props.height}px;
  border-radius: ${(props: ButtonProps) => props.height / 2}px;
  width: ${(props: ButtonProps) => props.width}px;
  cursor: pointer;

  &:hover {
    background: ${(props: ButtonProps) =>
      props.background === props.color1 ? props.color2 : props.color1};
    border: 2px solid ${(props: ButtonProps) => props.border};
    color: ${(props: ButtonProps) =>
      props.color === props.color1 ? props.color2 : props.color1};
  }

  &:focus {
    box-shadow: 0px 4px 4px rgba(0, 145, 255, 0.6);
  }

  &:active {
    background: ${(props: ButtonProps) =>
      props.background === props.color1 ? props.color2 : props.color1};
    border: 2px solid ${(props: ButtonProps) => props.border};
    color: ${(props: ButtonProps) =>
      props.color === props.color1 ? props.color2 : props.color1};
    transform: scale(0.95);
  }
`
