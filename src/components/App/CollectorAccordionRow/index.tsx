import React, { forwardRef, useState } from 'react'
import {
  CollectorRowBase,
  CollectorRowContent,
  CollectorRowExpansion,
} from './Styled'
import { Grid, Flex, Text, Box } from 'theme-ui'
import Avatar from '../../@UI/Avatar'
import Icon from '../../@UI/Icon'
import Label from '../../@UI/Label'
import IconButton from '../../@UI/IconButton'

export type CollectorAccordionRowVariant = 'landing' | 'collection'

export interface CollectorAccordionRowProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Collector's name
   */
  name?: string
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
  avgHoldTime?: string
  /**
   * First acquisition
   */
  firstAcquisition?: string
  /**
   * Total NFT value
   */
  totalNftValue?: string
  /**
   * NFT collection
   */
  nftCollection?: { imageUrl: string; url: string }[]
  /**
   * Other collectors
   */
  otherCollectors?: {
    name: string
    imageUrl: string
    url: string
    count: number
  }[]
}

/**
 * Provides a surface for UI elements.
 */
const CollectorRow = forwardRef(
  (
    {
      name,
      subtitle,
      collectionName,
      count,
      portfolioValue,
      avgHoldTime,
      firstAcquisition,
      totalNftValue,
      nftCollection,
      otherCollectors,
      ...props
    }: CollectorAccordionRowProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [open, setOpen] = useState(false)

    return (
      <CollectorRowBase {...{ ref, ...props }}>
        <CollectorRowContent>
          <Avatar size="md" src="/img/defaultAvatar.png" />

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
              }}
            >
              {name}
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
                {count ?? '-'}
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
            columns={['1fr', '1fr', portfolioValue ? '1fr' : '1fr 1fr']}
            sx={{ marginX: [0, 0, 46], columnGap: 72, p: 6 }}
          >
            <Flex sx={{ flexDirection: 'column', gap: 4 }}>
              {!!avgHoldTime && (
                <Flex sx={{ flexDirection: 'column', gap: 2 }}>
                  <Text sx={{ fontWeight: 'heading' }}>Avg. Hold Time:</Text>
                  <Text
                    variant="h3Primary"
                    sx={{
                      color: 'primary',
                      textAlign: 'right',
                    }}
                  >
                    {avgHoldTime}
                  </Text>
                </Flex>
              )}

              {!!firstAcquisition && (
                <Flex sx={{ flexDirection: 'column', gap: 2 }}>
                  <Text sx={{ fontWeight: 'heading' }}>
                    First Cryptopunks Acquisition
                  </Text>
                  <Text
                    variant="h3Primary"
                    sx={{
                      color: 'primary',
                      textAlign: 'right',
                    }}
                  >
                    {firstAcquisition}
                  </Text>
                </Flex>
              )}

              {!!nftCollection && (
                <Flex sx={{ flexDirection: 'column', gap: 2 }}>
                  <Text sx={{ fontWeight: 'heading' }}>
                    {name}'s {collectionName} Collection
                  </Text>
                  <Grid
                    sx={{
                      gap: 2,
                      gridTemplateColumns:
                        'repeat(auto-fill, minmax(92px, 1fr) )',
                    }}
                  >
                    {nftCollection.map(({ imageUrl, url }, idx) => (
                      <a href={url} key={idx}>
                        <Box
                          sx={{
                            backgroundImage: `url(${imageUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: 'sm',
                            width: '100%',
                            paddingTop: '100%',
                          }}
                        />
                      </a>
                    ))}
                  </Grid>
                </Flex>
              )}
            </Flex>

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

              {!!otherCollectors && (
                <Flex sx={{ flexDirection: 'column', gap: 2 }}>
                  <Text sx={{ fontWeight: 'heading' }}>Also Collecting</Text>
                  <Flex
                    sx={{
                      gap: 4,
                      flexWrap: 'wrap',
                    }}
                  >
                    {otherCollectors?.map(
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
            </Flex>
          </Grid>
        </CollectorRowExpansion>
      </CollectorRowBase>
    )
  }
)

export default CollectorRow
