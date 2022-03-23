import React, { forwardRef } from 'react'
import { Box, BoxProps, Flex, Grid, Text } from 'theme-ui'
import { Icon, useBreakpointIndex, useTheme } from '../../..'
import {
  Body,
  BodyInfoIcon,
  Header,
  HelpModalBase,
  Footer,
  ReadMore,
  CloseButton,
} from './Styled'

export interface HelpModalProps extends BoxProps {
  link?: string
  onClose: () => void
}

const HelpModal = forwardRef(
  (
    { link, onClose, ...props }: HelpModalProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const { theme } = useTheme()
    const isMobile = useBreakpointIndex() <= 2
    return (
      <HelpModalBase isMobile={isMobile} {...{ ref, ...props }}>
        <Header>
          <Flex sx={{ flexDirection: 'column' }}>
            <Text
              sx={{
                fontSize: isMobile ? '30px' : '60px',
                lineHeight: isMobile ? '50px' : '80px',
                fontWeight: 700,
              }}
            >
              Our Appraisal Models
            </Text>
            <Text sx={{ color: theme.colors['grey-600'] }}>
              Our appraisal algorithm prices NFTs just as any good Degen would,
              only faster.
            </Text>
          </Flex>
          <CloseButton onClick={onClose}>
            <Icon icon="close" color="grey-200" size="20" />
          </CloseButton>
        </Header>
        <Body>
          <Grid columns={['28px auto']} sx={{ gap: '1rem' }}>
            <BodyInfoIcon>
              <Icon icon="checkmark" color="white" size="20" />
            </BodyInfoIcon>
            <Flex sx={{ flexDirection: 'column', gap: '0.5rem' }}>
              <Text
                sx={{ fontSize: isMobile ? '18px' : '23px', fontWeight: 700 }}
              >
                Factor on-chain data
              </Text>
              <Text sx={{ color: theme.colors['grey-600'] }}>
                Metadata | Trait-specific performance | Overall rarity score of
                this NFT vs the collection | &quot;Hard&quot; market
                interactions (sales, mints, transfers of ownership) |
                &quot;Soft&quot; market interactions (bids, asks, order books).
              </Text>
            </Flex>
          </Grid>
          <Grid columns={['28px auto']} sx={{ gap: '1rem' }}>
            <BodyInfoIcon>
              <Icon icon="checkmark" color="white" size="20" />
            </BodyInfoIcon>
            <Flex sx={{ flexDirection: 'column', gap: '0.5rem' }}>
              <Text
                sx={{ fontSize: isMobile ? '18px' : '23px', fontWeight: 700 }}
              >
                Factor off-chain data
              </Text>
              <Text sx={{ color: theme.colors['grey-600'] }}>
                Social sentiment analysis | Twitter/Discord engagement.
              </Text>
            </Flex>
          </Grid>
          <Grid columns={['28px auto']} sx={{ gap: '1rem' }}>
            <BodyInfoIcon>
              <Icon icon="checkmark" color="white" size="20" />
            </BodyInfoIcon>
            <Flex sx={{ flexDirection: 'column', gap: '0.5rem' }}>
              <Text
                sx={{ fontSize: isMobile ? '18px' : '23px', fontWeight: 700 }}
              >
                Upshot&apos;s fine-tuning
              </Text>
              <Text sx={{ color: theme.colors['grey-600'] }}>
                Crowd intelligence (manually reviewed by our Machine Learning
                Engineering team to fine-tune our models.)
              </Text>
            </Flex>
          </Grid>
          <Grid columns={['28px auto']} sx={{ gap: '1rem' }}>
            <BodyInfoIcon>
              <Icon icon="checkmark" color="white" size="20" />
            </BodyInfoIcon>
            <Flex sx={{ flexDirection: 'column', gap: '0.5rem' }}>
              <Text
                sx={{ fontSize: isMobile ? '18px' : '23px', fontWeight: 700 }}
              >
                Maintain model integrity
              </Text>
              <Text sx={{ color: theme.colors['grey-600'] }}>
                We compare historical NFT sales to historical appraisal prices
                from our models; from this, we can calculate our Median Relative
                Error % for each price (e.g. the appraisal is accurate within
                +/- MRE%).
                <br />
                <br />
                Our MRE is industry-leading at 8-15%.
                <br />
                <br />
                We currently support 240 collections and 270k NFTs across those
                collections, with appraisals refreshed every hour.
              </Text>
            </Flex>
          </Grid>
        </Body>

        <Footer>
          <Box
            sx={{
              width: 28,
              height: 28,
              borderRadius: 14,
              border: '1px solid white',
            }}
          />
          <Flex sx={{ flexDirection: 'column', gap: '0.5rem' }}>
            <Text
              sx={{ fontSize: isMobile ? '18px' : '23px', fontWeight: 700 }}
            >
              More to come
            </Text>
            <Text sx={{ color: theme.colors['grey-600'] }}>
              Upshot appraisals are fine-tuned and updated over time to respond
              to the ever-evolving market.
            </Text>
          </Flex>
        </Footer>

        <ReadMore href={link} target="_blank" rel="noreferrer">
          {' '}
          Read More{' '}
        </ReadMore>
      </HelpModalBase>
    )
  }
)

export default HelpModal
