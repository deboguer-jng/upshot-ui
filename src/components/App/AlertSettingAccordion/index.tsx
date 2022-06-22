import React, { forwardRef, useState, useEffect, useRef } from 'react'
import { useTheme } from '@emotion/react'
import { format, formatDistance } from 'date-fns'
import Button from '../../@UI/Button'

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
  status: boolean
  following: boolean
  onFollowChange?: (value: boolean) => void
}

/**
 * Provides a surface for UI elements.
 */
const CollectorRow = forwardRef(
  (
    {
      address,
      displayName,
      children,
      defaultOpen = false,
      linkComponent,
      status,
      following,
      onFollowChange,
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
    const breakpointIndex = useBreakpointIndex()
    const isMobile = useBreakpointIndex() <= 1
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
          </Flex>
          <Flex sx={{ alignItems: 'center' }}>
            {status ? (
              <IconButton onClick={(e) => e.stopPropagation()}>
                <Icon icon="alertOn" color="white" size={32} />
              </IconButton>
            ) : (
              <IconButton>
                <Icon
                  icon="alertOff"
                  color="white"
                  size={32}
                  onClick={(e) => e.stopPropagation()}
                />
              </IconButton>
            )}
          </Flex>
          <Flex sx={{ alignItems: 'center' }}>
            {following ? (
              <Button
                icon={<Icon icon="checkmark" />}
                variant="secondary"
                onClick={(e) => {
                  e.stopPropagation()
                  onFollowChange(!following)
                }}
              >
                {!isMobile && <> Following </>}
              </Button>
            ) : (
              <Button
                variant="secondary"
                onClick={(e) => {
                  e.stopPropagation()
                  onFollowChange(!following)
                }}
              >
                Follow
              </Button>
            )}
          </Flex>

          <Flex sx={{ alignItems: 'center' }}>
            <IconButton onClick={() => setOpen(!open)}>
              <Icon color="primary" icon={open ? 'arrowUp' : 'arrowDropdown'} />
            </IconButton>
          </Flex>
        </CollectorRowContent>

        <CollectorRowExpansion $open={open} $contentHeight={expansionHeight}>
          <Box
            sx={{
              p: 4,
            }}
            ref={expansionContentRef}
          >
            {children}
          </Box>
        </CollectorRowExpansion>
      </CollectorRowBase>
    )
  }
)

export default CollectorRow
