import styled from '@emotion/styled'
import { Text } from 'theme-ui'

interface MiniNftCardPriceProps {
  error?: boolean
}

interface MiniNftCardNameProps {
  error?: boolean
}

interface MiniNftCardMainContentWrapperProps {
  type: 'default' | 'search'
}

interface AddressCircleProps {
  variant: 'from' | 'to'
}

interface MiniNftCardMainBoardProps {
  error?: boolean
}

interface MiniNftCardDetailsNameProps {
  error?: boolean
}

interface MiniNftCardDetailValueProps {
  error?: boolean
}

interface MiniNftCardImageWrapperProps {
  pixelated?: boolean
}

export const MiniNftCardWrapper = styled.div`
  position: relative;
  width: fit-content;
  width: ${({ theme }) => theme.miniNftCard.width}px;
  height: ${({ theme }) => theme.miniNftCard.height}px;
  transition: width 0.5s ease;

  & > div:last-child {
    transition: transform 0.5s ease;
    transform: translateX(0);
  }

  &:hover {
    width: calc(${({ theme }) => theme.miniNftCard.width}px * 1.7 + 10px);
    transition: width 0.5s ease;

    & > div:last-child {
      transition: transform 0.5s ease;
      transform: translateX(70%);
    }
  }
`

export const MiniNftCardImageWrapper = styled.img<MiniNftCardImageWrapperProps>`
  image-rendering: ${({ pixelated }) => (pixelated ? 'pixelated' : '')};
`

export const MiniNftCardMainBoard = styled.div<MiniNftCardMainBoardProps>`
  position: relative;
  background-color: ${({ theme }) => theme.miniNftCard.errorBackground};
  border-radius: ${({ theme }) => theme.miniNftCard.borderRadius}px;
  width: ${({ theme }) => theme.miniNftCard.width}px;
  height: ${({ theme }) => theme.miniNftCard.height}px;
  padding: ${({ theme }) => theme.miniNftCard.padding}px;
  z-index: ${({ theme }) => theme.zIndex.default + 1};
  overflow: hidden;

  img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    top: ${({ theme, error }) =>
      error ? theme.miniNftCard.errorImageTop : 0}px;
    left: 0;
    z-index: ${({ theme }) => theme.zIndex.default};
  }
`

export const MiniNftCardDetailsBoard = styled.div`
  position: absolute;
  top: 0;
  left: ${({ theme }) => theme.miniNftCard.details.defaultLeft}px;
  background-color: ${({ theme }) => theme.miniNftCard.details.background};
  border-radius: ${({ theme }) => theme.miniNftCard.borderRadius}px;
  width: ${({ theme }) => theme.miniNftCard.width}px;
  height: ${({ theme }) => theme.miniNftCard.height}px;
  padding: ${({ theme }) => theme.miniNftCard.padding}px;
  padding-top: 18px;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
`

export const MiniNftCardMainContentWrapper = styled.div<MiniNftCardMainContentWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ type }) => (type === 'search' ? 'flex-end' : 'start')};
  height: 100%;
  z-index: ${({ theme }) => theme.zIndex.default + 1};
  position: relative;
`

export const MiniNftCardPrice = styled.span<MiniNftCardPriceProps>`
  position: relative;
  font-weight: bold;
  text-transform: uppercase;
  width: fit-content;
  border-radius: ${({ theme }) => theme.miniNftCard.borderRadius}px;
  background-color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.miniNftCard.price.fontSize}px;
  color: ${({ theme, error }) =>
    error ? theme.miniNftCard.price.error : theme.miniNftCard.price.default};
  padding: ${({ theme }) =>
    `${theme.miniNftCard.price.paddingTop}px ${theme.miniNftCard.price.paddingLeft}px`};
`

export const MiniNftCardName = styled.div<MiniNftCardNameProps>`
  text-transform: ${({ error }) => (error ? 'uppercase' : 'none')};
  color: ${({ theme, error }) =>
    error ? theme.miniNftCard.name.error : theme.miniNftCard.name.default};
  font-size: ${({ theme }) => theme.miniNftCard.name.fontSize}px;
  border-radius: ${({ theme }) => theme.miniNftCard.name.borderRadius}px;
  padding-top: ${({ theme }) => theme.miniNftCard.name.paddingTop}px;
  padding-bottom: ${({ theme }) => theme.miniNftCard.name.paddingTop}px;
  padding-left: ${({ theme }) => theme.miniNftCard.name.paddingLeft}px;
  padding-right: ${({ theme }) => theme.miniNftCard.name.paddingLeft}px;
  backdrop-filter: blur(${({ theme }) => theme.miniNftCard.name.blur}px);
  background: rgba(0, 0, 0, 0.5);
  width: -webkit-fill-available;
  text-align: center;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`

export const AddressCircle = styled.div<AddressCircleProps>`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  margin-right: 6px;
  background-color: ${({ theme, variant }) =>
    variant === 'from' ? theme.colors.purple : theme.colors.yellow};
`

export const MiniNftCardDetailsName = styled(Text)<MiniNftCardDetailsNameProps>`
  color: ${({ theme, error }) =>
    error ? theme.colors.red : theme.colors.white};
  line-height: ${({ theme }) => theme.miniNftCard.name.lineHeight}px;
  -webkit-line-clamp: 3;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`

export const MiniNftCardDetailLabel = styled(Text)`
  color: ${({ theme }) => theme.colors['grey-500']};
`

export const MiniNftCardDetailValue = styled(Text)<MiniNftCardDetailValueProps>`
  margin-bottom: 5px;
  color: ${({ theme, error }) =>
    error ? theme.colors.red : theme.colors.white};
  -webkit-line-clamp: 2;
  text-overfow: elipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`
