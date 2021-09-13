import styled from '@emotion/styled'
import transactionHistoryItem from '../../../themes/UpshotUI/transactionHistoryItem'

interface TransactionHistoryItemIconProps {
  $variant: keyof typeof transactionHistoryItem.variant
}

export const TransactionHistoryItemWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const TransactionHistoryItemIcon = styled.div<TransactionHistoryItemIconProps>`
  width: ${({ theme }) => theme.transactionHistoryItem.width}px;
  height: ${({ theme }) => theme.transactionHistoryItem.height}px;
  border-radius: ${({ theme }) => theme.transactionHistoryItem.borderRadius}px;
  background-color: ${({ theme, $variant }) =>
    theme.transactionHistoryItem.variant[$variant].background};
  margin-right: ${({ theme }) => theme.transactionHistoryItem.marginRight}px;
`

export const TransactionHistoryItemText = styled.div`
  color: ${({ theme }) => theme.colors['grey-300']};
`
