import styled from '@emotion/styled'

interface FadeProps {
  $isScrolledRight: boolean
}

export const Relative = styled('div', transientOptions)`
  position: relative;
`

export const ScrollWrapper = styled('div', transientOptions)`
  overflow-x: auto;

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`

export const FadeEffect = styled('div', transientOptions)<FadeProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0px;
  transition: ease 0.5s;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 85%,
    rgba(0, 0, 0, 1) 100%
  );
  background-color: ${({ theme }) => theme.colors.black};
  opacity: ${({ $isScrolledRight }) => ($isScrolledRight === true ? 0 : 1)};
  pointer-events: none;
`
