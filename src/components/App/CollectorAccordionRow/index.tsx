import React, { forwardRef, useState } from 'react'
import {
  CollectorRowBase,
  CollectorRowContent,
  CollectorRowExpansion,
} from './Styled'
import { Box, Flex, Text } from 'theme-ui'
import Avatar from '../../@UI/Avatar'
import Icon from '../../@UI/Icon'
import Label from '../../@UI/Label'
import IconButton from '../../@UI/IconButton'

export interface CollectorRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {
  /**
   * Large headline for the row.
   */
  title?: string
  /**
   * Small subheading text.
   */
  subtitle?: string
  /**
   * NFT count
   */
  count?: number
  /**
   * Tracked portfolio appraisal
   */
  portfolioValue?: string
}

/**
 * Provides a surface for UI elements.
 */
const CollectorRow = forwardRef(
  (
    { title, subtitle, count, portfolioValue, ...props }: CollectorRowProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [open, setOpen] = useState(true)

    return (
      <CollectorRowBase $open={open} {...{ ref, ...props }}>
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
              {title}
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
          <Box sx={{ p: 4 }}>Hello</Box>
        </CollectorRowExpansion>
      </CollectorRowBase>
    )
  }
)

export default CollectorRow
