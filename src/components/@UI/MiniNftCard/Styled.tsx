import styled from '@emotion/styled'

interface MiniNftCardPriceProps {
  error?: boolean
}

interface MiniNftCardNameProps {
  error?: boolean
}

export const MiniNftCardWrapper = styled.div`
  position: relative;
`

export const MiniNftCardMainBoard = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.miniNftCard.errorBackground};
  border-radius: ${({ theme }) => theme.miniNftCard.borderRadius}px;
  width: ${({ theme }) => theme.miniNftCard.width}px;
  height: ${({ theme }) => theme.miniNftCard.height}px;
  padding: ${({ theme }) => theme.miniNftCard.padding}px;
  z-index: 1;
  overflow: hidden;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: ${({ theme }) => theme.miniNftCard.errorImageTop}px;
    left: 0;
    z-index: 0;
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
`

export const MiniNftCardMainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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
  backdrop-filter: blur(${({ theme }) => theme.miniNftCard.name.blur}px);
  background: rgba(0, 0, 0, 0.2);
  width: -webkit-fill-available;
  text-align: center;
`
