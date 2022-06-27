import React, { forwardRef, useState } from 'react'
import Avatar from '../../@UI/Avatar'
import Text from '../../@UI/Text'
import { Box, GridProps } from 'theme-ui'
import { CollectionGridRowBase } from './Styled'
import {
  CollectorRowBase,
  CollectorRowContent,
  CollectorRowExpansion,
} from '../CollectorAccordionRow/Styled'
import Link from '../../@UI/Link'
import { Icon, useBreakpointIndex } from '../../..'
import { Flex, IconButton } from '@theme-ui/components'
import { imageOptimizer } from '../../../utils/imageOptimizer'
import { formatNumber } from '../../../utils/number'
import { useTheme } from '@emotion/react'
export type Variant = 'black' | 'dark' | 'normal'

export interface CollectionGridRowProps extends Omit<GridProps, 'ref'> {
  /**
   * The image source url for the avatar.
   */
  imageSrc?: string
  /**
   * The main title of the item.
   */
  title: string
  /**
   * The subtitle for the item.
   */
  subtitle?: string
  /**
   * Background variant
   */
  variant?: Variant
  /**
   * Expand to full-width.
   */
  fullWidth?: boolean
  /**
   * OnClick handler.
   */
  onClick?: () => void
  /**
   * Use nearest-neighbor interpolation.
   */
  pixelated?: boolean
  /**
   * Default state for the row.
   */
  defaultOpen?: boolean
  /**
   * Total count of NFTs.
   */
  nftCount?: number
  /**
   * Link url.
   */
  href?: string
  /**
   * Link component
   */
  linkComponent?: React.FunctionComponent<any>
}

const CollectionGridRow = forwardRef(
  (
    {
      variant = 'normal',
      fullWidth = false,
      defaultOpen = false,
      imageSrc,
      title,
      children,
      onClick,
      pixelated,
      subtitle,
      nftCount,
      href,
      linkComponent,
      ...props
    }: CollectionGridRowProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const theme = useTheme()
    const breakpointIndex = useBreakpointIndex()
    const isMobile = breakpointIndex <= 1
    const [open, setOpen] = useState(defaultOpen)

    const optimizedSrc =
      imageOptimizer(imageSrc, {
        width: parseInt(theme.images.avatar.md.size),
        height: parseInt(theme.images.avatar.md.size),
      }) ?? imageSrc
    const src = pixelated ? imageSrc : optimizedSrc

    const content = isMobile ? (
      <CollectorRowBase
        {...{ ref, ...props }}
        style={{
          width: fullWidth ? '100%' : 'auto',
        }}
        onClick={() => setOpen(!open)}
      >
        <CollectorRowContent $hasImage={!!imageSrc}>
          {!!imageSrc && (
            <Avatar
              {...{ src, onClick }}
              size="md"
              pixelated={pixelated}
              sx={{ cursor: onClick ? 'pointer' : 'auto' }}
            />
          )}

          <Flex
            sx={{
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <Link
              sx={{
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
              component={linkComponent}
              {...{ href }}
            >
              <Text
                sx={{
                  fontWeight: 'bold',
                  fontSize: breakpointIndex <= 1 ? 2 : 4,
                  lineHeight: 1,
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                {title}
              </Text>
            </Link>
          </Flex>

          <Flex sx={{ alignItems: 'center' }}>
            <Text
              sx={{
                fontWeight: 'bold',
                fontSize: breakpointIndex <= 1 ? 2 : 4,
                lineHeight: 1,
              }}
            >
              {subtitle ?? ''}
            </Text>
          </Flex>

          {nftCount ? (
            <>
              <Flex sx={{ alignItems: 'center' }}>
                <Text
                  sx={{
                    fontWeight: 'bold',
                    fontSize: breakpointIndex <= 1 ? 2 : 4,
                    lineHeight: 1,
                  }}
                >
                  {formatNumber(nftCount)}
                </Text>
              </Flex>
            </>
          ) : (
            <Flex sx={{ alignItems: 'center' }}>
              <IconButton onClick={() => setOpen(!open)}>
                <Icon
                  color="primary"
                  icon={open ? 'arrowUp' : 'arrowDropdown'}
                />
              </IconButton>
            </Flex>
          )}
        </CollectorRowContent>
        <CollectorRowExpansion $open={open}>{children}</CollectorRowExpansion>
      </CollectorRowBase>
    ) : (
      <CollectionGridRowBase
        $variant={variant}
        {...{ ref, ...props, onClick }}
        sx={{
          width: fullWidth ? '100%' : 'auto',
          cursor: onClick ? 'pointer' : undefined,
          '&:hover': {
            boxShadow: onClick ? theme.shadow.underglow('primary') : undefined,
            '& div:last-child svg': {
              opacity: onClick ? '1 !important' : '0',
            },
          },
          borderRadius: theme.radii.md,
        }}
      >
        {!!imageSrc && (
          <Box>
            <Avatar
              {...{ pixelated, src }}
              sx={{
                backgroundColor: 'grey-600',
                borderColor: 'black',
              }}
            />
          </Box>
        )}

        <Box>
          <Text
            variant="large"
            sx={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            {title}
          </Text>
        </Box>

        {/* Additional columns (React.Fragment) */}
        {children}
        {!!onClick && (
          <Flex sx={{ justifyContent: 'flex-end', alignItems: 'center' }}>
            <Icon
              icon="arrowStylizedRight"
              color="primary"
              style={{
                opacity: 0,
                width: '20px',
                height: '20px',
                flexShrink: 0,
              }}
            />
          </Flex>
        )}
      </CollectionGridRowBase>
    )

    /* if href is provided, wrap the row in a Link */
    return href && !isMobile ? (
      <Link noHover component={linkComponent} {...{ href }}>
        {content}
      </Link>
    ) : (
      content
    )
  }
)

export default CollectionGridRow
