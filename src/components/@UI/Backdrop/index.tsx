import React, { forwardRef } from 'react'
import ReactDOM from 'react-dom'

import { Overlay } from './Styled'

export interface BackdropProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Backdrop visibility
   */
  open?: boolean
  /**
   * Backdrop filter blur
   */
  blur?: boolean
}

/**
 * Provides a React DOM portal above all content.
 */
const Portal = ({ children }: { children: React.ReactNode }) =>
  ReactDOM.createPortal(children, document.body as HTMLBodyElement)

/**
 * The Backdrop component is used to provide emphasis on a particular element
 * or parts of it.
 */
const Backdrop = forwardRef(
  (
    { open, blur, ...props }: BackdropProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => (
    <Portal>
      <Overlay $open={open} $blur={blur} {...{ ref, ...props }} />
    </Portal>
  )
)

export default Backdrop
