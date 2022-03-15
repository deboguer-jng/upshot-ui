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
  link: string
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
                How do we develop our appraisals?
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
                How do we develop our appraisals?
                <Icon icon="attentionCircle" color="black" size="16" />
              </ArrpaisalsCopyOpenedTopBar>

              <AppraisalsCopyOpenedContent>
                Our appraisals combine real-time market, collection, and trait
                level data from on chain with off chain sources like bid/ask
                spreads and market behaviors and then seasoned with a little
                Upshot magic.
                <a href={link} target="_blank" rel="noreferrer">
                  Read article.
                </a>
              </AppraisalsCopyOpenedContent>

              <AppraisalsCopyButton onClick={() => setOpen(false)}>
                {' '}
                Read less.{' '}
              </AppraisalsCopyButton>
            </AppraisalsCopyOpened>
          )}
        </AppraisalsCopyWrapper>
      </>
    )
  }
)

export default AppraisalsCopy
