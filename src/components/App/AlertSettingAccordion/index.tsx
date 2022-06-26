import { useTheme } from '@emotion/react'
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import Button from '../../@UI/Button'

import { Box, Flex } from 'theme-ui'
import { useBreakpointIndex } from '../../..'
import Avatar from '../../@UI/Avatar'
import Icon from '../../@UI/Icon'
import IconButton from '../../@UI/IconButton'
import Link from '../../@UI/Link'
import {
  CollectorRowBase,
  CollectorRowContent,
  CollectorRowExpansion,
} from './Styled'

export interface AlertSettingAccordionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * display name of collection | collector | NFT
   */
  name?: string
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

  following: boolean
  imageSrc?: string
  link: string
  onFollowChange?: (value: boolean) => void
}

/**
 * Provides a surface for UI elements.
 */
const AlertSettingAccordion = forwardRef(
  (
    {
      name,
      children,
      defaultOpen = false,
      following,
      imageSrc,
      link,
      onFollowChange,
      ...props
    }: AlertSettingAccordionProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const theme = useTheme()
    const [open, setOpen] = useState(defaultOpen)

    const breakpointIndex = useBreakpointIndex()
    const isMobile = useBreakpointIndex() <= 1
    const [expansionHeight, setExpansionHeight] = useState(0)
    const [expansionWidth, setExpansionWidth] = useState(0)
    const expansionContentRef = useRef(null)

    useEffect(() => {
      setExpansionHeight(expansionContentRef.current.clientHeight)
      setExpansionWidth(expansionContentRef.current.clientWidth)
    })

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
            href={link}
          >
            <Avatar size="md" src={imageSrc} />
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
                href={link}
                onClick={(e) => e.stopPropagation()}
              >
                {name}
              </Link>
            </Flex>
          </Flex>
          <Flex sx={{ alignItems: 'center' }}>
            <Link href={link}>
              <IconButton onClick={(e) => e.stopPropagation()}>
                <Icon icon="alertOn" color="white" size={32} />
              </IconButton>
            </Link>
          </Flex>
          <Flex sx={{ alignItems: 'center' }}>
            {following ? (
              <Button
                icon={<Icon icon="checkmark" />}
                variant="secondary"
                onClick={(e) => {
                  e.stopPropagation()
                  if (onFollowChange) onFollowChange(!following)
                }}
              >
                {!isMobile && <> Following </>}
              </Button>
            ) : (
              <Button
                variant="secondary"
                onClick={(e) => {
                  e.stopPropagation()
                  if (onFollowChange) onFollowChange(!following)
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

export default AlertSettingAccordion
