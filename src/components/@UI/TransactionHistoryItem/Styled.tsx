import styled from '@emotion/styled'
import transactionHistoryItem from '../../../themes/UpshotUI/transactionHistoryItem'
import { transientOptions } from '../../../themes'

interface TransactionHistoryItemIconProps {
  $variant: keyof typeof transactionHistoryItem.variant
}

export const TransactionHistoryItemWrapper = styled('div', transientOptions)`
  display: flex;
  align-items: center;
`

export const TransactionHistoryItemIcon = styled(
  'div',
  transientOptions
)<TransactionHistoryItemIconProps>`
  width: ${({ theme }) => theme.transactionHistoryItem.width}px;
  height: ${({ theme }) => theme.transactionHistoryItem.height}px;
  border-radius: ${({ theme }) => theme.transactionHistoryItem.borderRadius}px;
  background-color: ${({ theme, $variant }) =>
    theme.transactionHistoryItem.variant[$variant].background};
  margin-right: ${({ theme }) => theme.transactionHistoryItem.marginRight}px;
`

export const TransactionHistoryItemText = styled('div', transientOptions)`
  color: ${({ theme }) => theme.colors['grey-300']};
`
