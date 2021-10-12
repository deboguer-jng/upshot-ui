import React, { forwardRef } from 'react'
import { CollectorRowBase } from './Styled'
import { Flex, Text } from 'theme-ui'
import TableCell from '../../Layout/TableCell'
import Avatar from '../../@UI/Avatar'
import Icon from '../../@UI/Icon'
import IconButton from '../../@UI/IconButton'

export interface CollectorRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {
  /**
   * Title for the row.
   */
  title?: string
  /**
   * Subtitle for the row.
   */
  subtitle?: string
}

/**
 * Provides a surface for UI elements.
 */
const CollectorRow = forwardRef(
  (
    { title, subtitle, ...props }: CollectorRowProps,
    ref: React.ForwardedRef<HTMLTableRowElement>
  ) => (
    <CollectorRowBase {...{ ref, ...props }}>
      <TableCell>
        <Avatar size="md" src="/img/defaultAvatar.png" />
      </TableCell>

      <TableCell sx={{ width: '100%' }}>
        <Flex sx={{ flexDirection: 'column', gap: 1 }}>
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
      </TableCell>
      <TableCell>
        <Text
          sx={{
            fontWeight: 'bold',
            fontSize: 4,
            lineHeight: 1,
          }}
        >
          30
        </Text>
      </TableCell>
      <TableCell>
        <IconButton>
          <Icon color="primary" icon="arrowDropdown" />
        </IconButton>
      </TableCell>
    </CollectorRowBase>
  )
)

export default CollectorRow
