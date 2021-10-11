import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

export const ModalWrapper = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  max-height: 100vh;
  overflow-y: auto;
  transform: translate(-50%, -50%);
  z-index: ${({ theme }) => theme.zIndex.modal};
  animation: ${keyframes`from { opacity: 0; }`} 0.25s ease;
  opacity: ${({ $open }) => ($open ? 1.0 : 0.0)};
  transition: all 0.25s ease;
`
