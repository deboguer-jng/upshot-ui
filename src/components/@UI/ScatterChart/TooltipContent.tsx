import { format } from 'date-fns'
import React, { useState } from 'react'
import { shortenAddress } from '../../../utils/address'
import { AddressDot, GMI, NFT, TooltipContainer, TooltipDate, TooltipImageContainer, TooltipPrice } from './Styled'
import Link from '../Link'
import Spinner from '../Spinner'

export interface TooltipContentProps {
  x: number
  y: number
  id: string
  address: string | null
  contractAddress: string
  gmi?: number
  ens?: string
  img?: string
  linkComponent?: React.FunctionComponent<any>
  pixelated?: boolean
}

export const TooltipContent = ({
  x: timestamp,
  y: price,
  id,
  address,
  ens,
  gmi,
  img,
  pixelated = false,
  contractAddress,
  linkComponent,
}: TooltipContentProps) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const shortAddress = shortenAddress(address)

  return (
    <TooltipContainer>
      <TooltipImageContainer>
        {!imageLoaded && <Spinner size='sm' sx={{position: 'absolute'}} />}
        <Link
          href={`/analytics/nft/${contractAddress}/${id}`}
          component={linkComponent}
        >
        {img?.length && 
          <img 
            src={img} 
            style={{ width: 150, minHeight: 50, imageRendering: pixelated ? 'pixelated' : 'auto'}} 
            onLoad={e => setImageLoaded(true)}
          />}
          </Link>
      </TooltipImageContainer>
      <NFT>
        <Link
          href={`/analytics/nft/${contractAddress}/${id}`}
          component={linkComponent}
        >
          #{id}
        </Link>
      </NFT>
      <TooltipPrice>
        {format(timestamp as number, 'MM/dd/yyyy')} (Ξ{price})
      </TooltipPrice>
      <TooltipDate>
        <AddressDot />
        <Link 
          href={`/analytics/user/${address}`}
          component={linkComponent}>
          {ens ? ens : shortAddress}
        </Link>
        <GMI>
          ({Math.round(gmi)})
        </GMI>
      </TooltipDate>
    </TooltipContainer>
  )
}
