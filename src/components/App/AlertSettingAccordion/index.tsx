import React, { forwardRef, useState, useEffect, useRef } from 'react'
import { useTheme } from '@emotion/react'
import { format, formatDistance } from 'date-fns'
import Button from '../../@UI/Button';

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
import Tooltip from '../../@UI/Tooltip'

export interface AlertSettingAccordionProps
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
    }: AlertSettingAccordionProps,
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

    const collectionTemplateWidth = [
      20,
      20,
      20,
      14,
      extraCollections?.length ? 20 : 14,
      extraCollections?.length ? 20 : 14,
      extraCollections?.length ? 20 : 14,
    ]

    const extraCollectionTemplateWidth = [
      25,
      25,
      25,
      14,
      extraCollections?.length ? 25 : 14,
      extraCollections?.length ? 25 : 14,
      extraCollections?.length ? 25 : 14,
    ]

    const collectionPageSize = [
      4,
      4,
      8,
      12,
      extraCollections?.length ? 16 : 12,
      extraCollections?.length ? 16 : 12,
      extraCollections?.length ? 16 : 12,
    ]

    const extraCollectionPageSize = [
      4,
      4,
      8,
      12,
      extraCollections?.length > 8 ? 8 : 4,
      extraCollections?.length > 8 ? 8 : 4,
      extraCollections?.length > 8 ? 8 : 4,
    ]

    const curCollectionPageSize = collectionPageSize[breakpointIndex]
    const curextraCollectionPageSize = extraCollectionPageSize[breakpointIndex]

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
            <Flex sx={{ alignItems: 'center', gap: 1 }}>
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
                  mr: 1,
                }}
                href={`/analytics/user/${address}`}
                component={linkComponent}
              >
                {displayName}
              </Link>

            </Flex>
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
            <IconButton>
                <Icon icon="notifications" size={32} />
            </IconButton>
            <Button
                icon={<Icon icon="checkmark" />}
                variant="secondary"
                >
                {' '}Following{' '}
            </Button>
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
            <Box>
                   content
            </Box>
        </Grid>
        </CollectorRowExpansion>
      </CollectorRowBase>
    )
  }
)

export default CollectorRow
