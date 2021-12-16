import React, { forwardRef, useState, useEffect } from 'react'
import {
  CollectorRowBase,
  CollectorRowContent,
  CollectorRowExpansion,
} from './Styled'
import { Grid, Flex, Text, Box } from 'theme-ui'
import Avatar from '../../@UI/Avatar'
import Icon from '../../@UI/Icon'
import Label from '../../@UI/Label'
import makeBlockie from 'ethereum-blockies-base64'
import IconButton from '../../@UI/IconButton'
import {
  formatUsername,
  shortenAddress,
  fetchEns,
} from '../../../utils/address'
import { format, formatDistance } from 'date-fns'
import { ethers } from 'ethers'

export interface CollectorAccordionRowProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Collector's address
   */
  address?: string
  /**
   * Collector's username
   */
  username?: string
  /**
   * Small subheading text.
   */
  subtitle?: string
  /**
   * Collection name
   */
  collectionName?: string
  /**
   * NFT count
   */
  count?: number
  /**
   * Tracked portfolio appraisal
   */
  portfolioValue?: string
  /**
   * Average hold time
   */
  avgHoldTime?: number
  /**
   * First acquisition
   */
  firstAcquisition?: number
  /**
   * Total NFT value
   */
  totalNftValue?: string
  /**
   * NFT collection
   */
  nftCollection?: { imageUrl: string; url: string; pixelated?: boolean }[]
  /**
   * Other collections
   */
  extraCollections?: {
    id: number
    name?: string
    imageUrl: string
    url: string
    pixelated: boolean
    count?: number
  }[]
  /**
   * Children element
   */
  children?: React.ReactNode
  /**
   * Is it opened by default?
   */
  defaultOpen?: boolean
}

/**
 * Provides a surface for UI elements.
 */
const CollectorRow = forwardRef(
  (
    {
      address,
      username,
      subtitle,
      collectionName,
      count,
      portfolioValue,
      avgHoldTime,
      firstAcquisition,
      totalNftValue,
      nftCollection,
      extraCollections,
      children,
      defaultOpen = false,
      ...props
    }: CollectorAccordionRowProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [open, setOpen] = useState(defaultOpen)
    const isFirstColumn = !!avgHoldTime || !!firstAcquisition || !!nftCollection
    const [avatarUrl, setAvatarUrl] = useState(
      address ? makeBlockie(address) : null
    )
    const [name, setName] = useState(username ? formatUsername(username) : null)

    useEffect(() => {
      const updateEns = async (address?: string) => {
        if (!address) return

        const { name, avatar } = await fetchEns(
          address,
          ethers.getDefaultProvider()
        )

        if (name) setName(name)
        if (avatar) setAvatarUrl(avatar)
      }

      updateEns(address)
    }, [])

    const displayName = name ?? (address ? shortenAddress(address) : 'Unknown')

    return (
      <CollectorRowBase {...{ ref, ...props }} onClick={() => setOpen(!open)}>
        <CollectorRowContent>
          <Avatar size="md" src={avatarUrl} />

          <Flex
            sx={{ flexDirection: 'column', justifyContent: 'center', gap: 1 }}
          >
            <Text
              sx={{
                fontWeight: 'bold',
                fontSize: 4,
                lineHeight: 1,
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              {displayName}
            </Text>
            {!!subtitle && (
              <Text
                sx={{
                  fontWeight: 'heading',
                  fontSize: 2,
                  lineHeight: 1,
                  color: 'primary',
                }}
              >
                {subtitle}
              </Text>
            )}
          </Flex>

          <Flex sx={{ alignItems: 'center' }}>
            {portfolioValue ? (
              <Label size="sm" variant="currency">
                {portfolioValue}
              </Label>
            ) : (
              <Text
                sx={{
                  fontWeight: 'bold',
                  fontSize: 4,
                  lineHeight: 1,
                }}
              >
                {count ?? ''}
              </Text>
            )}
          </Flex>

          <Flex sx={{ alignItems: 'center' }}>
            <IconButton onClick={() => setOpen(!open)}>
              <Icon color="primary" icon={open ? 'arrowUp' : 'arrowDropdown'} />
            </IconButton>
          </Flex>
        </CollectorRowContent>

        <CollectorRowExpansion $open={open}>
          <Grid
            columns={['1fr', '1fr', '1fr', !isFirstColumn ? '1fr' : '1fr 1fr']}
            sx={{ marginX: [0, 0, 46], columnGap: 72, p: 6 }}
          >
            {isFirstColumn && (
              <Flex sx={{ flexDirection: 'column', gap: 4 }}>
                <a href={`/analytics/user/${address}`} style={{ textDecoration: 'none' }}>
                  <Text
                    variant='h3Primary'
                    sx={{
                      color: 'primary',
                      paddingBottom: '12px',
                      fontSize: 4,
                    }}
                  >
                    View Portfolio
                  </Text>
                </a>
                {!!avgHoldTime && (
                  <Flex sx={{ flexDirection: 'column', gap: 2 }}>
                    <Text
                      sx={{
                        fontWeight: 'heading',
                        textTransform: 'capitalize',
                      }}
                    >
                      Average Hold Time
                    </Text>
                    <Text
                      variant="h3Primary"
                      sx={{
                        color: 'primary',
                        textAlign: 'right',
                      }}
                    >
                      {formatDistance(0, avgHoldTime * 1000)}
                    </Text>
                  </Flex>
                )}

                {!!firstAcquisition && (
                  <Flex sx={{ flexDirection: 'column', gap: 2 }}>
                    <Text sx={{ fontWeight: 'heading' }}>
                      First {collectionName} Acquisition
                    </Text>
                    <Text
                      variant="h3Primary"
                      sx={{
                        color: 'primary',
                        textAlign: 'right',
                      }}
                    >
                      {format(firstAcquisition * 1000, 'MM/dd/yyyy')}
                    </Text>
                  </Flex>
                )}

                {!!nftCollection && !!nftCollection.length ? (
                  <Flex sx={{ flexDirection: 'column', gap: 2 }}>
                    <Text sx={{ fontWeight: 'heading' }}>
                      {displayName}'s {collectionName} Collection
                    </Text>
                    <Grid
                      sx={{
                        gap: 2,
                        gridTemplateColumns:
                          'repeat(auto-fill, minmax(92px, 1fr) )',
                      }}
                    >
                      {nftCollection.map(
                        ({ imageUrl, url, pixelated }, idx) => (
                          <a href={url} key={idx}>
                            <Box
                              sx={{
                                backgroundImage: `url(${imageUrl})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                borderRadius: 'sm',
                                width: '100%',
                                paddingTop: '100%',
                                imageRendering: pixelated
                                  ? 'pixelated'
                                  : 'auto',
                              }}
                            />
                          </a>
                        )
                      )}
                    </Grid>
                  </Flex>
                ) : (
                  <Flex sx={{ flexDirection: 'column', gap: 2 }}>
                    <Text sx={{ fontWeight: 'heading', lineHeight: 1.5 }}>
                      {displayName} doesn't currently hold any {collectionName}{' '}
                      NFTs
                    </Text>
                  </Flex>
                )}
              </Flex>
            )}

            <Flex sx={{ flexDirection: 'column', gap: 4 }}>
              {!!totalNftValue && (
                <Flex sx={{ flexDirection: 'column', gap: 2 }}>
                  <Text sx={{ fontWeight: 'heading' }}>Total NFT Value</Text>
                  <Flex
                    sx={{
                      justifyContent: 'flex-end',
                      gap: 1,
                    }}
                  >
                    <Text variant="small" color="primary">
                      Ξ
                    </Text>
                    <Text
                      variant="h3Primary"
                      sx={{
                        color: 'primary',
                      }}
                    >
                      {totalNftValue}
                    </Text>
                  </Flex>
                </Flex>
              )}

              {!!extraCollections && !!extraCollections.length && (
                <Flex sx={{ flexDirection: 'column', gap: 2 }}>
                  <Text sx={{ fontWeight: 'heading' }}>Also Collecting</Text>
                  <Flex
                    sx={{
                      gap: 4,
                      flexWrap: 'wrap',
                    }}
                  >
                    {extraCollections?.map(
                      ({ name, url, imageUrl, count }, idx) => (
                        <Flex
                          sx={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 2,
                          }}
                          key={idx}
                        >
                          <a href={url}>
                            <Avatar size="lg" color="white" src={imageUrl} />
                          </a>
                          <Flex
                            sx={{
                              flexDirection: 'column',
                              alignItems: 'center',
                              gap: 1,
                            }}
                          >
                            <Text
                              variant="small"
                              color="white"
                              sx={{
                                whiteSpace: 'nowrap',
                                width: '72px',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                textAlign: 'center',
                                lineHeight: 1,
                              }}
                            >
                              {name}
                            </Text>
                            <Text
                              variant="small"
                              color="blue"
                              sx={{ lineHeight: 1 }}
                            >
                              {count} NFTs
                            </Text>
                          </Flex>
                        </Flex>
                      )
                    )}
                  </Flex>
                </Flex>
              )}
              {!!children && (
                <Flex sx={{ flexDirection: 'column', gap: 2 }}>{children}</Flex>
              )}
            </Flex>
          </Grid>
        </CollectorRowExpansion>
      </CollectorRowBase>
    )
  }
)

export default CollectorRow
