import React from 'react'
import ErrorSvg from '../../../assets/svg/icons/Error.svg'
import {
  MiniNftCardWrapper,
  MiniNftCardMainBoard,
  MiniNftCardDetailsBoard,
  MiniNftCardPrice,
  MiniNftCardName,
  MiniNftCardMainContentWrapper,
} from './Styled'

export interface MiniNftCardInterface {
  error?: boolean
}

export default function MiniNftCard({ error = false }: MiniNftCardInterface) {
  if (error) {
    return (
      <MiniNftCardWrapper>
        <MiniNftCardMainBoard>
          <img src={ErrorSvg} />
          <MiniNftCardMainContentWrapper>
            <MiniNftCardPrice error>Error</MiniNftCardPrice>
            <MiniNftCardName error>Error</MiniNftCardName>
          </MiniNftCardMainContentWrapper>
        </MiniNftCardMainBoard>
        <MiniNftCardDetailsBoard></MiniNftCardDetailsBoard>
      </MiniNftCardWrapper>
    )
  }

  return <MiniNftCardWrapper></MiniNftCardWrapper>
}
