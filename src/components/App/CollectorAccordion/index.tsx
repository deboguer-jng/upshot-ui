import React, { forwardRef } from 'react'
import { CollectorAccordionBase } from './Styled'
import { Flex, Text } from 'theme-ui'
import TableCell from '../../Layout/TableCell'
import Avatar from '../../@UI/Avatar'
import Icon from '../../@UI/Icon'
import IconButton from '../../@UI/IconButton'

export interface CollectorAccordionProps
  extends React.HTMLAttributes<HTMLTableRowElement> {}

/**
 * Provides a surface for UI elements.
 */
const CollectorAccordion = forwardRef(
  (
    props: CollectorAccordionProps,
    ref: React.ForwardedRef<HTMLTableRowElement>
  ) => (
    <CollectorAccordionBase {...{ ref, ...props }}>
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
            Robert Downey Jr.Robert Downey Jr.Robert Downey Jr.Robert Downey
            Jr.Robert Downey Jr.Robert Downey Jr.
          </Text>
          <Text
            sx={{
              fontWeight: 'heading',
              fontSize: 2,
              lineHeight: 1,
              color: 'primary',
            }}
          >
            Owns 149 NFTs
          </Text>
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
    </CollectorAccordionBase>
  )
)

export default CollectorAccordion
