import styled from '@emotion/styled'
import CollectionButtons from '../../../themes/UpshotUI/buttons.collections'

interface CollectionButtonWrapperProps {
  highlight?: keyof typeof CollectionButtons.highlight
}

export const CollectionButtonWrapper = styled.div<CollectionButtonWrapperProps>`
  display: grid;
  grid-template-columns: ${({ theme }) => theme.buttons.collection.iconHeight}px auto;
  gap: ${({ theme }) => theme.buttons.collection.gap}px;
  align-items: center;
  background-color: ${({ theme }) => theme.buttons.collection.background};
  height: ${({ theme }) => theme.buttons.collection.height}px;
  border-radius: ${({ theme }) => theme.buttons.collection.borderRadius}px;
  padding: 4px;
  box-shadow: ${({ theme, highlight }) =>
    highlight
      ? `0px 4px 4px ${theme.buttons.collection.highlight[highlight]}`
      : ''};
`

export const CollectionButtonIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => theme.buttons.collection.iconHeight}px;
  width: ${({ theme }) => theme.buttons.collection.iconHeight}px;
  border-radius: ${({ theme }) => theme.buttons.collection.iconHeight / 2}px;
  background-color: ${({ theme }) => theme.colors['grey-900']};

  svg {
    height: 18px;
    width: 18px;

    * {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`

export const CollectionButtonTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const CollectionButtonText = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.buttons.collection.textSize}px;
  color: ${({ theme }) => theme.buttons.collection.color};
  font-weight: 600;
  font-style: normal;
  text-transform: uppercase;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const CollectionButtonSubText = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.buttons.collection.subTextSize}px;
  color: ${({ theme }) => theme.buttons.collection.color};
  font-weight: 500;
  font-style: normal;
  text-transform: uppercase;
`
