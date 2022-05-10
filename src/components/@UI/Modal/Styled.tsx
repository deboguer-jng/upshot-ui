import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

interface ModalWrapperProps {
  $open: boolean
  $fullWidth: boolean
}

export const ModalWrapper = styled.div<ModalWrapperProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  max-height: 100vh;
  overflow-y: auto;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  transform: translate(-50%, -50%);
  z-index: ${({ theme }) => theme.zIndex.modal};
  animation: ${keyframes`from { opacity: 0; }`} 0.25s ease;
  opacity: ${({ $open }) => ($open ? 1.0 : 0.0)};
  transition: opacity 0.25s ease;
`
