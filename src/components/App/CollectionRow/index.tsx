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
  /**
   * Use dark background.
   */
  dark?: boolean
  /**
   * OnClick handler.
   */
  onClick?: () => void
}

const CollectionRow = forwardRef(
  (
    {
      imageSrc: src,
      title,
      dark,
      children,
      onClick,
      ...props
    }: CollectionRowProps,
    ref: React.ForwardedRef<HTMLTableRowElement>
  ) => {
    return (
      <CollectionRowBase $dark={dark} {...{ ref, ...props }}>
        {/* Each row has a required avatar image circle. */}
        <TableCell>
          <Avatar
            {...{ src, onClick }}
            sx={{ cursor: onClick ? 'pointer' : 'auto' }}
          />
        </TableCell>

        <TableCell>
          <Text
            variant="large"
            as={onClick ? 'a' : 'span'}
            {...{ onClick }}
            sx={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              cursor: onClick ? 'pointer' : 'auto',
              '&:hover': {
                textDecoration: onClick ? 'underline' : undefined,
              },
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
