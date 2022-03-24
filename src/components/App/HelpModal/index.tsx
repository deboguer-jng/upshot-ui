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

    return (
      <HelpModalBase
        sx={{
          padding: ['20px', '40px', '60px'],
          width: ['calc(100vw - 2rem)', '80vw', '750px'],
          margin: 'auto',
        }}
        {...{ ref, ...props }}
      >
        <Header>
          <Flex sx={{ flexDirection: 'column', flexGrow: 1 }}>
            <Text
              sx={{
                fontSize: ['24px', '30px', '50px'],
                lineHeight: ['34px', '40px', '60px'],
                fontWeight: 700,
              }}
            >
              Our Appraisal Models
            </Text>
            <Text
              sx={{
                color: theme.colors['grey-600'],
                fontSize: ['12px', '14px', '16px'],
              }}
            >
              Our appraisal algorithm prices NFTs just as any good Degen would,
              only faster.
            </Text>
          </Flex>
          <CloseButton onClick={onClose}>
            <Icon icon="close" color="grey-200" size="20" />
          </CloseButton>
        </Header>
        <Body>
          <Grid columns={['20px auto']} sx={{ gap: '1rem' }}>
            <BodyInfoIcon>
              <Icon icon="checkmark" color="white" size="16" />
            </BodyInfoIcon>
            <Flex sx={{ flexDirection: 'column', gap: '0.5rem' }}>
              <Text sx={{ fontSize: ['16px', '20px'], fontWeight: 700 }}>
                Factor on-chain data
              </Text>
              <Text
                sx={{
                  color: theme.colors['grey-600'],
                  fontSize: ['12px', '14px', '16px'],
                }}
              >
                Metadata | Trait-specific performance | Overall rarity score of
                this NFT vs the collection | &quot;Hard&quot; market
                interactions (sales, mints, transfers of ownership) |
                &quot;Soft&quot; market interactions (bids, asks, order books).
              </Text>
            </Flex>
          </Grid>
          <Grid columns={['20px auto']} sx={{ gap: '1rem' }}>
            <BodyInfoIcon>
              <Icon icon="checkmark" color="white" size="16" />
            </BodyInfoIcon>
            <Flex sx={{ flexDirection: 'column', gap: '0.5rem' }}>
              <Text sx={{ fontSize: ['16px', '20px'], fontWeight: 700 }}>
                Upshot&apos;s fine-tuning
              </Text>
              <Text
                sx={{
                  color: theme.colors['grey-600'],
                  fontSize: ['12px', '14px', '16px'],
                }}
              >
                Per-collection review by our Machine Learning
                team and others to fine-tune our models 
                for collection-specific properties, &quot;meta traits&quot;, etc.
              </Text>
            </Flex>
          </Grid>
          <Grid columns={['20px auto']} sx={{ gap: '1rem' }}>
            <BodyInfoIcon>
              <Icon icon="checkmark" color="white" size="16" />
            </BodyInfoIcon>
            <Flex sx={{ flexDirection: 'column', gap: '0.5rem' }}>
              <Text sx={{ fontSize: ['16px', '20px'], fontWeight: 700 }}>
                Maintain model integrity
              </Text>
              <Text
                sx={{
                  color: theme.colors['grey-600'],
                  fontSize: ['12px', '14px', '16px'],
                }}
              >
                We compare historical NFT sales to historical appraisal prices
                from our models; from this, we can calculate our Median Relative
                Error % for each price (e.g. the appraisal is accurate within
                +/- MRE%).
                <br />
                <br />
                Our MRE is industry-leading at 8-15% for most collections.
                <br />
                <br />
                We currently support over 240 collections and around 270k NFTs across those
                collections, with appraisals refreshed every hour.
              </Text>
            </Flex>
          </Grid>
        </Body>

        <Footer>
          <Box
            sx={{
              width: 20,
              height: 20,
              borderRadius: 14,
              border: '1px solid white',
            }}
          />
          <Flex sx={{ flexDirection: 'column', gap: '0.5rem' }}>
            <Text sx={{ fontSize: ['16px', '20px'], fontWeight: 700 }}>
              Coming Soon
            </Text>
            <Text
              sx={{
                color: theme.colors['grey-600'],
                fontSize: ['12px', '14px', '16px'],
              }}
            >
              Social sentiment analysis | Twitter/Discord engagement | And more
            </Text>
          </Flex>
        </Footer>

        <Flex sx={{ flexDirection: 'row', alignItems: 'center', gap: 1 }}>
        <ReadMore href={link} target="_blank" rel="noreferrer">
            {' '}
            Read More{' '}
          </ReadMore>
          <Icon
              color="primary"
              icon="openLink"
              size={16}
            />
          </Flex>
      </HelpModalBase>
    )
  }
)

export default HelpModal
