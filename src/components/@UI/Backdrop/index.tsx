import React, { forwardRef } from 'react'
import ReactDOM from 'react-dom'

import { Overlay } from './Styled'

export interface BackdropProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Backdrop visibility
   */
  open?: boolean
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
    { open, ...props }: BackdropProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => (
    <Portal>
      <Overlay $open={open} {...{ ref, ...props }} />
    </Portal>
  )
)

export default Backdrop
