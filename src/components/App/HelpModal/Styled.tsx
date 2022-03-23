import styled from '@emotion/styled'
import { Box, Flex } from 'theme-ui'

interface HelpModalBaseProps {
  isMobile: boolean
}

export const HelpModalBase = styled(Box)<HelpModalBaseProps>`
  border-radius: 30px;
  background: ${({ theme }) => theme.colors['grey-800']};
  padding: ${({ isMobile }) => (isMobile ? '20px' : '60px')};
`

export const Header = styled.div`
  position: relative;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  outline: none;
  background: none;
`

export const Body = styled(Flex)`
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 40px;
  gap: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`

export const BodyInfoIcon = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  border: 1px solid white;
  background: #69b367;
`

export const Footer = styled.div`
  display: grid;
  grid-template-columns: 28px auto;
  gap: 1rem;
  margin-top: 40px;
  margin-bottom: 40px;
`

export const ReadMore = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`
