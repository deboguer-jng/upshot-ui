/** @jsxImportSource theme-ui */
import React, { forwardRef, useState } from 'react'
import Avatar from '../../@UI/Avatar'
import Text from '../../@UI/Text'
import { Box } from 'theme-ui'
import { CollectionRowBase } from './Styled'
import {
  CollectorRowBase,
  CollectorRowContent,
  CollectorRowExpansion,
} from '../CollectorAccordionRow/Styled'
import TableCell from '../../Layout/TableCell'
import { TableRowProps } from '../../Layout/TableRow'
import { Icon, useBreakpointIndex } from '../../..'
import { Flex, IconButton } from '@theme-ui/components'
import { imageOptimizer } from '../../../utils/imageOptimizer'
import { useTheme } from '@emotion/react'
export type Variant = 'black' | 'dark' | 'normal'
export interface CollectionRowProps extends TableRowProps {
  /**
   * The image source url for the avatar.
   */
  imageSrc: string
  /**
   * The main title of the item.
   */
  title: string
  /**
   * Background variant
   */
  variant?: Variant
  /**
   * OnClick handler.
   */
  onClick?: () => void

  totalVolume?: string

  pixelated?: boolean

  defaultOpen?: boolean

  nftCount?: number
}

const CollectionRow = forwardRef(
  (
    {
      variant = 'normal',
      imageSrc,
      title,
      children,
      pixelated,
      totalVolume,
      defaultOpen = false,
      nftCount,
      onClick,
      ...props
    }: CollectionRowProps,
    ref: React.ForwardedRef<HTMLTableRowElement>
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

    return (
      <>
        {!isMobile ? (
          <CollectionRowBase
            $variant={variant}
            {...{ ref, ...props, onClick }}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                boxShadow: theme.shadow.underglow("primary"),
                'td:last-child': {
                  svg: {
                    display: 'block',
                  },
                },
              },
              borderRadius: theme.radii.md,
            }}
          >
            {/* Each row has a required avatar image circle. */}
            <TableCell>
              <Box
                sx={{
                  width: '100%',
                  height: '48px',
                  position: 'relative',
                }}
              >
                <Avatar
                  {...{ pixelated, src }}
                  sx={{
                    backgroundColor: 'grey-600',
                    borderColor: 'black',
                  }}
                />
              </Box>
            </TableCell>

            <TableCell>
              <Text
                variant="large"
                {...{ onClick }}
                sx={{
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                }}
              >
                {title}
              </Text>
            </TableCell>

            {/* Additional columns (React.Fragment) */}
            {children}
            <TableCell>
              <Icon
                icon="arrowStylizedRight"
                color="primary"
                sx={{
                  display: 'none',
                  width: '20px',
                  height: '20px',
                }}
              ></Icon>
            </TableCell>
          </CollectionRowBase>
        ) : (
          <CollectorRowBase
            {...{ ref, ...props }}
            onClick={() => setOpen(!open)}
          >
            <CollectorRowContent>
              <Avatar
                {...{ src, onClick }}
                size="md"
                pixelated={pixelated}
                sx={{ cursor: onClick ? 'pointer' : 'auto' }}
              />

              <Flex
                sx={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                <Text
                  sx={{
                    fontWeight: 'bold',
                    fontSize: breakpointIndex <= 1 ? 2 : 4,
                    lineHeight: 1,
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  {title}
                </Text>
              </Flex>

              <Flex sx={{ alignItems: 'center' }}>
                <Text
                  sx={{
                    fontWeight: 'bold',
                    fontSize: breakpointIndex <= 1 ? 2 : 4,
                    lineHeight: 1,
                  }}
                >
                  {totalVolume ?? ''}
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
                      {nftCount}
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
            <CollectorRowExpansion $open={open}>
              {children}
            </CollectorRowExpansion>
          </CollectorRowBase>
        )}
      </>
    )
  }
)

export default CollectionRow
