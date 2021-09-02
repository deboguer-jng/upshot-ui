import React, { forwardRef } from 'react'
import Avatar from '../../@UI/Avatar'
import Text from '../../@UI/Text'
import { CollectionRowBase } from './Styled'
import TableCell from '../../Layout/TableCell'
import { TableRowProps } from '../../Layout/TableRow'

export interface CollectionRowProps extends TableRowProps {
  /**
   * The image source url for the avatar.
   */
  imageSrc: string
  /**
   * The main title of the item.
   */
  title: string
}

const CollectionRow = forwardRef(
  (
    { imageSrc: src, title, children, ...props }: CollectionRowProps,
    ref: React.ForwardedRef<HTMLTableRowElement>
  ) => {
    return (
      <CollectionRowBase {...{ ref, ...props }}>
        {/* Each row has a required avatar image circle. */}
        <TableCell>
          <Avatar {...{ src }} />
        </TableCell>

        {/* Titles expand to fill all remaining space. */}
        <TableCell sx={{ maxWidth: 0 }}>
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
        </TableCell>

        {/* Additional columns (React.Fragment) */}
        {children}
      </CollectionRowBase>
    )
  }
)

export default CollectionRow
