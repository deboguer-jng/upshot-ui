import styled from '@emotion/styled'
import { Box, Flex } from 'theme-ui'
import { transientOptions } from '../../../themes'

export const HelpModalBase = styled(Box)`
  border-radius: 30px;
  background: ${({ theme }) => theme.colors['grey-800']};
`

export const Header = styled('div', transientOptions)`
  display: flex;
  width: 100%;
  position: relative;
  padding-bottom: 25px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`

export const CloseButton = styled('button', transientOptions)`
  height: fit-content;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`

export const Body = styled(Flex)`
  flex-direction: column;
  padding-top: 25px;
  padding-bottom: 25px;
  gap: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`

export const BodyInfoIcon = styled('div', transientOptions)`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  border: 1px solid white;
  background: #69b367;
`

export const Footer = styled('div', transientOptions)`
  display: grid;
  grid-template-columns: 20px auto;
  gap: 1rem;
  margin-top: 25px;
  margin-bottom: 25px;
`

export const ReadMore = styled('a', transientOptions)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`
