import React, { forwardRef, useState } from 'react'
import Icon from '../Icon'
import {
  AppraisalsCopyWrapper,
  AppraisalsCopyClosed,
  AppraisalsCopyOpened,
  ArrpaisalsCopyOpenedTopBar,
  AppraisalsCopyButton,
  AppraisalsCopyOpenedContent,
} from './Styled'

export interface AppraisalsCopyProps {
  /**
   * Appraisal read more link.
   */
  link: React.ReactNode
}

const AppraisalsCopy = forwardRef(
  (
    { link, ...props }: AppraisalsCopyProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <AppraisalsCopyWrapper {...{ ref, ...props }} open={open}>
          {!open ? (
            <AppraisalsCopyClosed>
              <div>
                How are our appraisals calculated?
                <AppraisalsCopyButton onClick={() => setOpen(true)}>
                  {' '}
                  Read more.{' '}
                </AppraisalsCopyButton>
              </div>
              <Icon icon="attentionCircle" color="transparent" size="16" />
            </AppraisalsCopyClosed>
          ) : (
            <AppraisalsCopyOpened>
              <ArrpaisalsCopyOpenedTopBar>
                How are our appraisals calculated?
                <Icon icon="attentionCircle" color="black" size="16" />
              </ArrpaisalsCopyOpenedTopBar>

              <AppraisalsCopyOpenedContent>
                Our appraisals combine on-chain data (like transactions,
                collections, traits, metadata, and rarity) with off-chain data
                (like bid/ask spread, market behaviors, etc) with a little
                Upshot magic.
                {link}
              </AppraisalsCopyOpenedContent>

              <AppraisalsCopyButton onClick={() => setOpen(false)}>
                Read less.
              </AppraisalsCopyButton>
            </AppraisalsCopyOpened>
          )}
        </AppraisalsCopyWrapper>
      </>
    )
  }
)

export default AppraisalsCopy
