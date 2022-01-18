import styled from '@emotion/styled'
import Colors from '../../../themes/UpshotUI/colors'
import Box from '../../Layout/Box'
import IconButton from '../../@UI/IconButton'
import Text from '../../@UI/Text'
import Label from '../../@UI/Label'
import Flex from '../../Layout/Flex'

interface ChartLabelProps {
  $color?: keyof typeof Colors
  $isMobile?: boolean
  $maxWidth?: number
}

export const IconBox = styled(Box)<ChartLabelProps>`
  flex-shrink: 0;
  border: 1px ${({ theme, $color }) => theme.colors[$color]} solid;
  border-radius: ${({ theme }) => theme.radii.circle};
  width: 20px;
  height: 20px;
  text-align: center;
  margin-right: ${({ $isMobile }) => ($isMobile ? '5px' : '12px')};
  margin-top: ${({ $isMobile }) => ($isMobile ? '2px' : '5px')};

  transition: ${({ theme }) => theme.transitions.default};
  &:hover,
  &:hover button {
    background: ${({ theme, $color = 'primary' }) =>
      theme.colors[$color]} !important;
  }
`
export const StyledIconButton = styled(IconButton)<ChartLabelProps>`
  padding: 0;
  width: 100%;
  height: 100%;
  vertical-align: top;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover svg path {
    stroke: ${({ theme }) => theme.colors.black} !important;
  }
`

export const StyledTitle = styled('h3')<ChartLabelProps>`
  text-transform: uppercase;
  color: ${({ theme, $color }) => theme.colors[$color]};
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 5px;
`

export const StyledBox = styled(Box)<ChartLabelProps>`
  max-width: ${({ $isMobile, $maxWidth }) =>
    $isMobile ? $maxWidth - 25 + 'px' : $maxWidth - 32 + 'px'};
`

export const StyledH1 = styled('h1')<ChartLabelProps>`
  margin: 0px;
`

export const StyledDateTime = styled('h3')<ChartLabelProps>`
  margin: 0px 0px;
  text-transform: uppercase;
  top: 0;
  right: 0;
`

export const StyledChangeDiv = styled('div')<ChartLabelProps>`
  margin-left: 0;
  color: ${({ theme }) => theme.colors.primary};
`

export const StyledRed = styled(Text)`
  color: ${({ theme }) => theme.colors.red};
  margin-right: 6px;
  font-size: inherit; // this is important to make ChartLabel responsive
`

export const StyledBlue = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: inherit; // this is important to make ChartLabel responsive
`

export const InlineLabel = styled(Label)`
  display: inline-block;
`

export const RelativeFlex = styled(Flex)<ChartLabelProps>`
  position: relative;
  display: inline-flex;
  font-size: ${({ $isMobile }) => ($isMobile ? '0.65em' : '1em')};
  flex-wrap: wrap;
  max-width: ${({ $maxWidth }) => $maxWidth + 'px'};
`
export const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`
