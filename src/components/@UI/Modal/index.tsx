import Backdrop from '../Backdrop'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import { BackdropProps } from '../Backdrop'
import { ModalWrapper } from './Styled'

interface ModalProps extends BackdropProps {
  /**
   * Handler to close modal
   */
  onClose?: () => void
}

/**
 * Provides a React DOM portal above all content.
 */
const Portal = ({ children }: { children: React.ReactNode }) =>
  ReactDOM.createPortal(children, document.body as HTMLBodyElement)

/**
 * The Modal component is used to display a floating image
 * over a Backdrop using a React DOM portal.
 */
export default function Modal({
  open = false,
  onClose,
  children,
  ...props
}: ModalProps) {
  /**
   * Adds a small delay for the transition to complete.
   */
  const [isClosing, setIsClosing] = useState(false)

  const handleClose = () => {
    setIsClosing(true)
    window.setTimeout(() => {
      setIsClosing(false)
      onClose?.()
    }, 500)
  }

  if (!open && !isClosing) return null

  return (
    <>
      <Backdrop open={open && !isClosing} onClick={handleClose} {...props} />
      <Portal>
        <ModalWrapper $open={open && !isClosing}>{children}</ModalWrapper>
      </Portal>
    </>
  )
}
