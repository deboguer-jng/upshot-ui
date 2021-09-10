import React, { forwardRef } from 'react'
import {
  TransactionHistoryItemIcon,
  TransactionHistoryItemWrapper,
} from './Styled'
import transactionHistoryItem from '../../../themes/UpshotUI/transactionHistoryItem'
import Text from '../Text'

export interface TransactionHistoryItemProps {
  variant: keyof typeof transactionHistoryItem.variant
  text: string
}

const TransactionHistoryItem = forwardRef(
  (
    { variant, text, ...props }: TransactionHistoryItemProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <>
        <TransactionHistoryItemWrapper {...{ ref, ...props }}>
          <TransactionHistoryItemIcon $variant={variant} />
          <Text variant="largeHeading"> {text} </Text>
        </TransactionHistoryItemWrapper>
      </>
    )
  }
)

export default TransactionHistoryItem
