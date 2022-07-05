import React, { forwardRef, useState } from 'react'
import Text from '../../@UI/Text'
import { Box, Close, Flex } from 'theme-ui'
import { useTheme } from '../../../themes/UpshotUI'
import Icon from '../../@UI/Icon'

import {
  FollowAvatar,
  FollowButton,
  FollowingButton,
  FollowContentWrapper,
  ModalContent,
  TabButton,
} from './Styled'
import Link from '../../@UI/Link'

export interface FollowerModalProps {
  following: any[]
  follower: any[]
  userAddress: string
  onFollow?: (id: number) => void
  onUnFollow?: (id: number) => void
  onClose?: () => void
  component?: React.FunctionComponent<any>
}

const FollowerModal = forwardRef(
  (
    {
      following,
      follower,
      userAddress,
      onFollow,
      onUnFollow,
      onClose,
      component,
      ...props
    }: FollowerModalProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [tab, setTab] = useState(0)
    const { theme } = useTheme()

    return (
      <Box
        sx={{ width: ['100vw', '720px'], padding: 0 }}
        {...{ ref, ...props }}
      >
        <ModalContent sx={{ padding: ['20px', '40px'] }}>
          <Flex pb={3} sx={{ alignItems: 'center' }}>
            <Text
              color="white"
              sx={{ fontSize: ['23px', '20px'], flexGrow: 1 }}
            >
              {userAddress}
            </Text>
            <Close onClick={onClose} />
          </Flex>
          <Flex sx={{ borderBottom: `1px solid ${theme.colors['grey-500']}` }}>
            <TabButton active={tab === 0} onClick={() => setTab(0)}>
              {following.length} Following
            </TabButton>
            <TabButton active={tab === 1} onClick={() => setTab(1)}>
              {follower.length} Followers
            </TabButton>
          </Flex>
          <FollowContentWrapper>
            {tab === 0 ? (
              <>
                {following?.length ? (
                  following.map((item, index) => (
                    <Flex
                      sx={{ alignItems: 'center', gap: 2 }}
                      key={index}
                      py={3}
                    >
                      <FollowAvatar src={item.img} />
                      <Link
                        sx={{ flexGrow: 1 }}
                        href={`/user/${item.address}`}
                        component={component}
                      >
                        <Text color="white">{item.address}</Text>
                      </Link>
                      <FollowButton onClick={() => onUnFollow(item.id)}>
                        Unfollow
                      </FollowButton>
                    </Flex>
                  ))
                ) : (
                  <Flex sx={{ justifyContent: 'center', marginTop: '20px' }}>
                    {' '}
                    <Text> No following(s) exist! </Text>
                  </Flex>
                )}
              </>
            ) : (
              <>
                {follower?.length ? (
                  follower.map((item, index) => (
                    <Flex
                      sx={{ alignItems: 'center', gap: 2 }}
                      key={index}
                      py={3}
                    >
                      <FollowAvatar src={item.img} />
                      <Link
                        sx={{ flexGrow: 1 }}
                        href={`/user/${item.address}`}
                        component={component}
                      >
                        <Text color="white">{item.address}</Text>
                      </Link>
                      {item.isFollowing ? (
                        <FollowingButton>
                          <Icon icon={'checkmark'} size="10" /> Following
                        </FollowingButton>
                      ) : (
                        <FollowButton onClick={() => onFollow(item.id)}>
                          + Follow
                        </FollowButton>
                      )}
                    </Flex>
                  ))
                ) : (
                  <Flex sx={{ justifyContent: 'center', marginTop: '20px' }}>
                    {' '}
                    <Text> No follower(s) exist! </Text>
                  </Flex>
                )}
              </>
            )}
          </FollowContentWrapper>
        </ModalContent>
      </Box>
    )
  }
)

export default FollowerModal
