import React, { forwardRef, HTMLAttributes } from 'react'
import { Text, Flex } from 'theme-ui'

import Link from '../../@UI/Link'
import ErrorSvg from '../../../assets/svg/icons/Error.svg'
import { imageOptimizer } from '../../../utils/imageOptimizer'
import { useBreakpointIndex } from '../../../hooks/useBreakpointIndex'
import theme from '../../../themes/UpshotUI'
import Icon from '../Icon'
import {
  MiniNftCardWrapper,
  MiniNftCardMainBoard,
  MiniNftCardDetailsBoard,
  MiniNftCardPrice,
  MiniNftCardName,
  MiniNftCardMainContentWrapper,
  AddressCircle,
  MiniNftCardDetailsName,
  MiniNftCardDetailLabel,
  MiniNftCardDetailValue,
  MiniNftCardImageWrapper,
  PriceTooltip,
} from './Styled'

export interface MiniNftCardInterface {
  /**
   * Price for the NFT in Eth.
   */
  price?: string
  /**
   * Rarity percentage.
   */
  rarity?: string

  sales?: string

  appraisal?: string

  listing?: string

  floorPrice?: string
  /**
   * NFT creator information.
   */
  creator?: string
  /**
   * Cover image.
   */
  image?: string
  /**
   * Shown error variant.
   */
  error?: boolean
  /**
   * NFT name
   */
  name?: string
  /**
   * Last sale from address.
   */
  from?: string

  fromLink?: string
  /**
   * Last sale to address.
   */
  to?: string

  toLink?: string
  /**
   * Last sale date
   */
  date?: string
  /**
   * Variant type
   */
  type?: 'default' | 'search' | 'collection' | 'recommend'
  /**
   * Pricing type
   */
  priceType?: 'appraisal' | 'listed' | 'last-sold'

  pixelated?: boolean

  /**
   * link to nft collection
   */
  collectionLink?: string
  /**
   * link to nft
   */
  nftLink?: string

  tooltip?: string

  /**
   * Link component
   */
  linkComponent?: React.FunctionComponent<any>
}

const MiniNftCard = forwardRef(
  (
    {
      error = false,
      type = 'default',
      priceType,
      creator,
      image,
      name,
      price,
      rarity,
      sales,
      floorPrice,
      from,
      fromLink,
      to,
      toLink,
      date,
      collectionLink,
      nftLink,
      pixelated = false,
      linkComponent,
      tooltip,
      appraisal,
      listing,
      ...props
    }: MiniNftCardInterface & HTMLAttributes<HTMLDivElement>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const isMobile = useBreakpointIndex() <= 1

    const optimizedSrc =
      imageOptimizer(image, {
        height: theme.miniNftCard.height,
        width: theme.miniNftCard.width,
      }) ?? image
    const imageSrc = pixelated ? image : optimizedSrc

    return (
      <MiniNftCardWrapper $isMobile={isMobile} {...{ ref, ...props }}>
        <Link href={nftLink} component={linkComponent}>
          <MiniNftCardMainBoard $error={error}>
            <MiniNftCardImageWrapper
              src={error ? ErrorSvg : imageSrc}
              $pixelated={pixelated}
            />
            <MiniNftCardMainContentWrapper type={type}>
              {type === 'default' ||
              type === 'collection' ||
              type === 'recommend' ? (
                <>
                  {error ? (
                    <MiniNftCardPrice $error={error}>Error</MiniNftCardPrice>
                  ) : appraisal?.length || listing?.length ? (
                    <MiniNftCardPrice
                      isRecommendListing={
                        type === 'recommend' && !appraisal && !!listing
                      }
                    >
                      {type === 'recommend' && appraisal ? (
                        <>
                          <Text sx={{ marginRight: 1, fontWeight: 'bold' }}>
                            {appraisal}
                          </Text>
                          <Icon size={16} icon="upshot" />
                        </>
                      ) : (
                        listing
                      )}
                      {!!tooltip && (
                        <PriceTooltip>
                          <Text
                            sx={{
                              fontSize: '12px',
                              lineHeight: '14px',
                              textTransform: 'none',
                            }}
                            color="grey-200"
                          >
                            {tooltip}
                          </Text>
                        </PriceTooltip>
                      )}
                    </MiniNftCardPrice>
                  ) : null}
                </>
              ) : (
                <MiniNftCardName $error={error}>
                  {error ? 'Error' : name}
                </MiniNftCardName>
              )}
            </MiniNftCardMainContentWrapper>
          </MiniNftCardMainBoard>
        </Link>

        {!isMobile && (
          <MiniNftCardDetailsBoard>
            {type === 'search' ? (
              <MiniNftCardDetailLabel variant="xSmall">
                Owner:
              </MiniNftCardDetailLabel>
            ) : null}
            <MiniNftCardDetailsName
              variant="small"
              $error={error}
              sx={{ mb: 2 }}
            >
              {error
                ? 'Error'
                : type === 'default' ||
                  type === 'collection' ||
                  type === 'recommend'
                ? name
                : creator}
            </MiniNftCardDetailsName>
            {type === 'default' ? (
              <MiniNftCardDetailValue variant="xSmall" $error={error}>
                {error ? 'Error' : 'Sold ' + date + ' ago'}
              </MiniNftCardDetailValue>
            ) : null}
            <MiniNftCardDetailLabel variant="xSmall">
              {type === 'default'
                ? !!from && 'From :'
                : type === 'collection'
                ? !!sales && '# of sales :'
                : type === 'recommend'
                ? appraisal
                  ? !!listing && 'Listing Price :'
                  : !!price && 'Last Sale'
                : !!rarity && 'Rarity :'}
            </MiniNftCardDetailLabel>
            <MiniNftCardDetailValue
              variant="small"
              $error={error}
              color={
                type === 'recommend' ? theme.colors.primary : theme.colors.white
              }
            >
              {error ? (
                type === 'default' ? (
                  'Error'
                ) : (
                  '--%'
                )
              ) : type === 'default' ? (
                <Flex sx={{ alignItems: 'center' }}>
                  <AddressCircle variant="from" />
                  <Link href={fromLink} component={linkComponent}>
                    <Text variant="small"> {from} </Text>
                  </Link>
                </Flex>
              ) : type === 'collection' ? (
                sales
              ) : type === 'recommend' ? (
                appraisal ? (
                  listing
                ) : (
                  price
                )
              ) : (
                rarity
              )}
            </MiniNftCardDetailValue>
            <MiniNftCardDetailLabel variant="xSmall">
              {type === 'default'
                ? !!to && 'To :'
                : type === 'collection'
                ? !!floorPrice && 'Floor Price :'
                : type === 'recommend'
                ? appraisal
                  ? !!price && 'Last Sold :'
                  : null
                : priceType === 'appraisal'
                ? 'Appraisal :'
                : priceType === 'listed'
                ? 'Listed :'
                : !!price && 'Last Sold :'}
            </MiniNftCardDetailLabel>
            <MiniNftCardDetailValue
              variant="small"
              $error={error}
              sx={{ flexGrow: 1 }}
            >
              {error ? (
                type === 'default' ? (
                  'Error'
                ) : (
                  '$--'
                )
              ) : type === 'default' ? (
                <Flex sx={{ alignItems: 'center' }}>
                  <AddressCircle variant="to" />
                  <Link href={toLink} component={linkComponent}>
                    <Text variant="small"> {to} </Text>
                  </Link>
                </Flex>
              ) : type === 'collection' ? (
                floorPrice
              ) : type === 'recommend' ? (
                appraisal ? (
                  price
                ) : null
              ) : (
                price
              )}
            </MiniNftCardDetailValue>
            {!!collectionLink && (
              <MiniNftCardDetailValue>
                {error ? (
                  <Text variant="small" color="grey-600">
                    View Collection
                  </Text>
                ) : (
                  <Link
                    color="primary"
                    target={type === 'recommend' ? '_blank' : undefined}
                    onClick={(e) => e.stopPropagation()}
                    href={collectionLink}
                    component={linkComponent}
                  >
                    <Text variant="small">
                      {type === 'recommend'
                        ? 'Buy on Opensea'
                        : 'View Collection'}
                    </Text>
                  </Link>
                )}
              </MiniNftCardDetailValue>
            )}
          </MiniNftCardDetailsBoard>
        )}
      </MiniNftCardWrapper>
    )
  }
)

export default MiniNftCard
