import Backdrop from '../Backdrop'
import React, { useState, forwardRef } from 'react'
import ReactDOM from 'react-dom'

import { BackdropProps } from '../Backdrop'
import { ModalWrapper } from './Styled'

export interface ModalProps extends BackdropProps {
  /**
   * Poss blur to backdrop filter.
   */
  backdropBlur?: boolean
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
const Modal = forwardRef(
  (
    {
      open = false,
      backdropBlur = false,
      onClose,
      children,
      ...props
    }: ModalProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    /**
     * Adds a small delay for the transition to complete.
     */
    const [isClosing, setIsClosing] = useState(false)
    if (open === false || isClosing === true) {
      document.body.style.overflow = 'visible'
    } else {
      document.body.style.overflow = 'hidden'
    }

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
        <Backdrop
          open={open && !isClosing}
          onClick={handleClose}
          blur={backdropBlur}
          {...{ ref, ...props }}
        />
        <Portal>
          <ModalWrapper $open={open && !isClosing}>{children}</ModalWrapper>
        </Portal>
      </>
    )
  }
)

export default Modal
