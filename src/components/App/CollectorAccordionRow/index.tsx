import React, { forwardRef, useState, useEffect, useRef } from 'react'
import { useTheme } from '@emotion/react'
import { format, formatDistance } from 'date-fns'

import {
  CollectorRowAvatarWrapper,
  CollectorRowBase,
  CollectorRowContent,
  CollectorRowExpansion,
  StyledPanel,
} from './Styled'
import { Grid, Flex, Text, Box } from 'theme-ui'
import Avatar from '../../@UI/Avatar'
import Icon from '../../@UI/Icon'
import Label from '../../@UI/Label'
import Link from '../../@UI/Link'
import makeBlockie from 'ethereum-blockies-base64'
import { Pagination } from '../../..'
import IconButton from '../../@UI/IconButton'
import { useBreakpointIndex } from '../../..'
import { imageOptimizer } from '../../../utils/imageOptimizer'
import { formatNumber } from '../../../utils/number'

export interface CollectorAccordionRowProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Collector's address
   */
  address?: string
  /**
   * Collector's username or address to display
   */
  displayName?: string
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
   * Age of entire collection
   */
  ageOfCollection?: number
  /**
   * Renders slightly differently for landing page
   */
  isLandingPage?: boolean
  /**
   * Total NFT value
   */
  totalNftValue?: string

  extraCollectionChanged?: (id: number) => void
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
  /**
   * Link component
   */
  linkComponent?: React.FunctionComponent<any>
}

enum BREAKPOINT_INDEXES {
  ZERO = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
}

/**
 * Provides a surface for UI elements.
 */
const CollectorRow = forwardRef(
  (
    {
      address,
      displayName,
      subtitle,
      collectionName,
      count,
      portfolioValue,
      avgHoldTime,
      firstAcquisition,
      ageOfCollection,
      totalNftValue,
      nftCollection,
      extraCollections = [],
      children,
      extraCollectionChanged,
      defaultOpen = false,
      isLandingPage = false,
      linkComponent,
      ...props
    }: CollectorAccordionRowProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const theme = useTheme()
    const [open, setOpen] = useState(defaultOpen)
    const [page, setPage] = useState(0)
    const [extraCollectionPage, setExtraCollectionPage] = useState(0)
    const [selectedCollection, setSelectedCollection] = useState<
      number | undefined
    >()
    const [selectedCollectionName, setSelectedCollectionName] =
      useState(collectionName)
    const breakpointIndex = useBreakpointIndex()
    const isFirstColumn =
      !!avgHoldTime ||
      !!firstAcquisition ||
      !!ageOfCollection ||
      !!totalNftValue
    const [expansionHeight, setExpansionHeight] = useState(0)
    const [expansionWidth, setExpansionWidth] = useState(0)
    const expansionContentRef = useRef(null)

    useEffect(() => {
      setExpansionHeight(expansionContentRef.current.clientHeight)
      setExpansionWidth(expansionContentRef.current.clientWidth)
    })

    const handlePageChange = ({ selected }: { selected: number }) => {
      setPage(selected)
    }

    const handleExtrCollectionPageChange = ({
      selected,
    }: {
      selected: number
    }) => {
      setExtraCollectionPage(selected)
    }

    const collectionTemplateWidth = {
      [BREAKPOINT_INDEXES.ZERO]: 20,
      [BREAKPOINT_INDEXES.ONE]: 20,
      [BREAKPOINT_INDEXES.TWO]: 20,
      [BREAKPOINT_INDEXES.THREE]: 14,
      [BREAKPOINT_INDEXES.FOUR]: extraCollections?.length ? 20 : 14,
      [BREAKPOINT_INDEXES.FIVE]: extraCollections?.length ? 20 : 14,
      [BREAKPOINT_INDEXES.SIX]: extraCollections?.length ? 20 : 14,
    }

    const collectionPageSize = {
      [BREAKPOINT_INDEXES.ZERO]: 4,
      [BREAKPOINT_INDEXES.ONE]: 4,
      [BREAKPOINT_INDEXES.TWO]: 8,
      [BREAKPOINT_INDEXES.THREE]: 12,
      [BREAKPOINT_INDEXES.FOUR]: extraCollections?.length ? 16 : 12,
      [BREAKPOINT_INDEXES.FIVE]: extraCollections?.length ? 16 : 12,
      [BREAKPOINT_INDEXES.SIX]: extraCollections?.length ? 16 : 12,
    }

    const extraCollectionPageSize = {
      [BREAKPOINT_INDEXES.ZERO]: 4,
      [BREAKPOINT_INDEXES.ONE]: 4,
      [BREAKPOINT_INDEXES.TWO]: 8,
      [BREAKPOINT_INDEXES.THREE]: 12,
      [BREAKPOINT_INDEXES.FOUR]: extraCollections?.length > 8 ? 8 : 4,
      [BREAKPOINT_INDEXES.FIVE]: extraCollections?.length > 8 ? 8 : 4,
      [BREAKPOINT_INDEXES.SIX]: extraCollections?.length > 8 ? 8 : 4,
    }

    const curCollectionPageSize =
      collectionPageSize[breakpointIndex as BREAKPOINT_INDEXES]
    const curextraCollectionPageSize =
      extraCollectionPageSize[breakpointIndex as BREAKPOINT_INDEXES]

    return (
      <CollectorRowBase {...{ ref, ...props }}>
        <CollectorRowContent onClick={() => setOpen(!open)}>
          <Link
            sx={{
              width: '100%',
              height: '48px',
              position: 'relative',
              '&:hover img': {
                display: 'none',
              },
              '&:hover svg': {
                display: 'block !important',
              },
              '&:hover': {
                backgroundColor: '#151515',
                borderRadius: '50%',
                border: '2px solid black',
              },
            }}
            href={`/analytics/user/${address}`}
            component={linkComponent}
          >
            <Avatar size="md" src={makeBlockie(address)} />
            <Icon
              icon="arrowStylizedRight"
              color="primary"
              style={{
                display: 'none',
                position: 'absolute',
                top: '0',
                width: '40% !important',
                height: '40% !important',
                margin: '30%',
              }}
              size="40%"
            />
          </Link>
          <Flex
            sx={{ flexDirection: 'column', justifyContent: 'center', gap: 1 }}
          >
            <Link
              sx={{
                fontWeight: 'bold',
                fontSize: breakpointIndex <= 1 ? 2 : 3,
                lineHeight: 1,
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                width: 'fit-content',
                color: 'inherit',
              }}
              href={`/analytics/user/${address}`}
              component={linkComponent}
            >
              {displayName}
            </Link>
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
            {portfolioValue && isLandingPage ? (
              <Label size="xs" variant="currency">
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
                {count ? formatNumber(count) : null}
              </Text>
            )}
          </Flex>

          <Flex sx={{ alignItems: 'center' }}>
            <IconButton onClick={() => setOpen(!open)}>
              <Icon color="primary" icon={open ? 'arrowUp' : 'arrowDropdown'} />
            </IconButton>
          </Flex>
        </CollectorRowContent>

        <CollectorRowExpansion $open={open} $contentHeight={expansionHeight}>
          <Grid
            columns={
              expansionWidth < parseInt(theme.breakpointsNamed.sm) ||
              !extraCollections?.length
                ? '1fr'
                : '1fr 1fr'
            }
            sx={{
              marginX: [0, 46],
              paddingBottom: '46px !important',
              columnGap: 6,
              p: 4,
            }}
            ref={expansionContentRef}
          >
            {isFirstColumn && (
              <Flex sx={{ flexDirection: 'column', gap: 4 }}>
                <Grid columns={breakpointIndex <= 2 ? 1 : 2}>
                  {!!avgHoldTime && (
                    <StyledPanel>
                      <Flex sx={{ flexDirection: 'column', gap: 2 }}>
                        <Text
                          sx={{
                            fontWeight: 'heading',
                            fontSize: '12px',
                            textTransform: 'capitalize',
                          }}
                        >
                          Average Hold Time:
                        </Text>
                        <Text
                          variant="h3Primary"
                          sx={{
                            color: 'primary',
                          }}
                        >
                          {formatDistance(0, avgHoldTime * 1000)}
                        </Text>
                      </Flex>
                    </StyledPanel>
                  )}

                  {!!firstAcquisition && (
                    <StyledPanel>
                      <Flex sx={{ flexDirection: 'column', gap: 2 }}>
                        <Text sx={{ fontWeight: 'heading', fontSize: '12px' }}>
                          First {collectionName} Acquisition:
                        </Text>
                        <Text
                          variant="h3Primary"
                          sx={{
                            color: 'primary',
                          }}
                        >
                          {format(firstAcquisition * 1000, 'MM/dd/yyyy')}
                        </Text>
                      </Flex>
                    </StyledPanel>
                  )}

                  {!!ageOfCollection && (
                    <StyledPanel>
                      <Flex sx={{ flexDirection: 'column', gap: 2 }}>
                        <Text sx={{ fontWeight: 'heading', fontSize: '12px' }}>
                          Age of entire collection:
                        </Text>
                        <Flex
                          sx={{
                            gap: 1,
                          }}
                        >
                          <Text
                            variant="h3Primary"
                            sx={{
                              color: 'primary',
                            }}
                          >
                            {format(ageOfCollection * 1000, 'MM/dd/yyyy')}
                          </Text>
                        </Flex>
                      </Flex>
                    </StyledPanel>
                  )}

                  {!!totalNftValue && (
                    <StyledPanel>
                      <Flex sx={{ flexDirection: 'column', gap: 2 }}>
                        <Text sx={{ fontWeight: 'heading', fontSize: '12px' }}>
                          Appraised value of collection:
                        </Text>
                        <Flex
                          sx={{
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
                    </StyledPanel>
                  )}
                </Grid>

                {!!extraCollections && !!extraCollections.length && (
                  <StyledPanel sx={{ flexGrow: 1 }}>
                    <Flex sx={{ flexDirection: 'column', gap: 2 }}>
                      <Text sx={{ fontWeight: 'heading' }}>
                        {isLandingPage
                          ? 'Collections in Portfolio:'
                          : 'Also Collecting:'}
                      </Text>
                      <Grid
                        sx={{
                          gap: 2,
                          gridTemplateColumns: `repeat(auto-fill, minmax(${
                            collectionTemplateWidth[
                              breakpointIndex as BREAKPOINT_INDEXES
                            ]
                          }%, 1fr))`,
                        }}
                      >
                        {extraCollections
                          ?.slice(
                            extraCollectionPage * curextraCollectionPageSize,
                            extraCollectionPage * curextraCollectionPageSize +
                              curextraCollectionPageSize
                          )
                          ?.map(({ id, name, url, imageUrl, count }, idx) => (
                            <Flex
                              sx={{
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 2,
                              }}
                              key={idx}
                            >
                              <CollectorRowAvatarWrapper
                                selected={idx === selectedCollection}
                                onClick={() => {
                                  extraCollectionChanged?.(id)
                                  setSelectedCollection(idx)
                                  setSelectedCollectionName(name)
                                  setPage(0)
                                }}
                              >
                                <Avatar
                                  size="md"
                                  color="white"
                                  sx={{
                                    position: 'absolute',
                                    top: '0px',
                                    left: '0px',
                                    rigth: '0px',
                                    bottom: '0px',
                                    width: '100%!important',
                                    height: '100%!important',
                                  }}
                                  src={
                                    imageOptimizer(imageUrl, {
                                      height: parseInt(
                                        theme.images.avatar.lg.size
                                      ),
                                      width: parseInt(
                                        theme.images.avatar.lg.size
                                      ),
                                    }) ?? imageUrl
                                  }
                                />
                              </CollectorRowAvatarWrapper>
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
                                  {count ? formatNumber(count) : 0} NFTs
                                </Text>
                              </Flex>
                            </Flex>
                          ))}
                      </Grid>
                      <Box sx={{ textAlign: 'center' }}>
                        {Math.ceil(
                          extraCollections.length / curextraCollectionPageSize
                        ) > 1 && (
                          <Pagination
                            forcePage={extraCollectionPage}
                            pageCount={Math.ceil(
                              extraCollections.length /
                                curextraCollectionPageSize
                            )}
                            pageRangeDisplayed={0}
                            marginPagesDisplayed={0}
                            onPageChange={handleExtrCollectionPageChange}
                          />
                        )}
                      </Box>
                    </Flex>
                  </StyledPanel>
                )}
              </Flex>
            )}

            <StyledPanel $hideBorder={!isFirstColumn}>
              <Flex sx={{ flexDirection: 'column', gap: 4, height: '100%' }}>
                {!!nftCollection && !!nftCollection.length ? (
                  <Flex
                    sx={{ flexDirection: 'column', gap: 2, height: '100%' }}
                  >
                    <Text sx={{ fontWeight: 'heading' }}>
                      {selectedCollectionName &&
                        `${displayName}'s ${selectedCollectionName} Collection`}
                      {!selectedCollectionName &&
                        `Notable NFTs in ${displayName}'s Collection`}
                    </Text>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid
                        sx={{
                          gap: 2,
                          gridTemplateColumns: `repeat(auto-fill, minmax(${
                            collectionTemplateWidth[
                              breakpointIndex as BREAKPOINT_INDEXES
                            ]
                          }%, 1fr) )`,
                        }}
                      >
                        {nftCollection
                          .slice(
                            page * curCollectionPageSize,
                            page * curCollectionPageSize + curCollectionPageSize
                          )
                          .map(({ imageUrl, url, pixelated }, idx) => {
                            const optimizedSrc =
                              imageOptimizer(imageUrl, {
                                height: 180,
                                width: 180,
                              }) ?? imageUrl
                            const imageSrc = pixelated ? imageUrl : optimizedSrc

                            return (
                              <Link
                                href={url}
                                key={idx}
                                component={linkComponent}
                              >
                                <Box
                                  sx={{
                                    backgroundImage: `url(${imageSrc})`,
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
                              </Link>
                            )
                          })}
                      </Grid>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                      {Math.ceil(nftCollection.length / curCollectionPageSize) >
                        1 && (
                        <Pagination
                          forcePage={page}
                          pageCount={Math.ceil(
                            nftCollection.length / curCollectionPageSize
                          )}
                          pageRangeDisplayed={0}
                          marginPagesDisplayed={0}
                          onPageChange={handlePageChange}
                        />
                      )}
                    </Box>
                  </Flex>
                ) : (
                  <Flex sx={{ flexDirection: 'column', gap: 2 }}>
                    <Text sx={{ fontWeight: 'heading', lineHeight: 1.5 }}>
                      {displayName} doesn't currently hold any {collectionName}{' '}
                      NFTs
                    </Text>
                  </Flex>
                )}

                {!!children && (
                  <Flex sx={{ flexDirection: 'column', gap: 2 }}>
                    {children}
                  </Flex>
                )}
              </Flex>
            </StyledPanel>
          </Grid>
        </CollectorRowExpansion>
      </CollectorRowBase>
    )
  }
)

export default CollectorRow
