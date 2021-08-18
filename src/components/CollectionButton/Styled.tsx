import styled from '@emotion/styled'
import CollectionButtons from '../../themes/UpshotUI/buttons.collections'

interface CollectionButtonWrapperProps {
  highlight?: keyof typeof CollectionButtons.highlight
}

export const CollectionButtonWrapper = styled.div<CollectionButtonWrapperProps>`
  display: flex;
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
  margin-right: ${({ theme }) => theme.buttons.collection.gap}px;
  background-color: #c4c4c4;

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
`

export const CollectionButtonText = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.buttons.collection.textSize}px;
  color: ${({ theme }) => theme.buttons.collection.color};
  font-weight: 600;
  font-style: normal;
  text-transform: uppercase;
`

export const CollectionButtonSubText = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.buttons.collection.subTextSize}px;
  color: ${({ theme }) => theme.buttons.collection.color};
  font-weight: 500;
  font-style: normal;
  text-transform: uppercase;
`
