import styled from '@emotion/styled'

interface FadeProps {
  $isScrolledRight: boolean
}

export const Relative = styled.div`
position: relative;
`

export const ScrollWrapper = styled.div`
  overflow-x: auto;
`

export const FadeEffect = styled.div<FadeProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0px;
  transition: ease .5s;
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 85%, rgba(0,0,0,1) 100%);
  background-color: ${({ theme }) => theme.colors.black};
  opacity: ${({ $isScrolledRight }) => $isScrolledRight === true ? 0 : 1};
  pointer-events: none;
`