import styled from '@emotion/styled'
import Colors from '../../../themes/UpshotUI/colors'
import Box from '../../Layout/Box'
import IconButton from '../../@UI/IconButton'
import Text from '../../@UI/Text'
import Label from '../../@UI/Label'
import Flex from '../../Layout/Flex'

interface ChartLabelProps {
    $variant?: 'alone' | 'multi'
    $color?: keyof typeof Colors
    $isMobile?: number
}

export const IconBox = styled(Box)<ChartLabelProps>`
    border: 1px ${({ theme, $color }) => theme.colors[$color]} solid;
    border-radius: ${({ theme }) => theme.radii.circle};
    width: ${({ $isMobile }) => $isMobile ? '16px' : '20px' };
    height: ${({ $isMobile }) => $isMobile ? '16px' : '20px' };
    text-align: center;
    margin-right: ${({ $isMobile }) => $isMobile ? '8px' : '12px' };
    margin-top: 5px;
`
export const StyledIconButton = styled(IconButton)<ChartLabelProps>`
    padding: 0;
    width: ${({ $isMobile }) => $isMobile ? '12px' : '18px' };
    height: ${({ $isMobile }) => $isMobile ? '12px' : '18px' };
    vertical-align: top;
    margin-top: ${({ $isMobile }) => $isMobile ? '1px' : '0px' };
`

export const StyledTitle = styled('h3')<ChartLabelProps>`
    text-transform: uppercase;
    color: ${({ theme, $color }) => theme.colors[$color]};
    font-weight: bold;
    margin: 5px 0px;
`

export const StyledH1 = styled('h1')<ChartLabelProps>`
    margin: 0px;
    ${({ $variant }) => $variant === 'alone' ?  'display: inline-block;' : ''}
`

export const StyledDateTime = styled('h2')<ChartLabelProps>`
    margin: 0px 0px;
    text-transform: uppercase;
    position: ${({ $variant }) => $variant === 'alone' ?  'absolute' : 'inherit'};
    top: 0;
    right: 0;
`

export const StyledChangeDiv = styled('div')<ChartLabelProps>`
    margin-left: ${({ $variant }) => $variant == 'alone' ?  '10px' : '0px'};
    color: ${({ theme }) => theme.colors.primary};
    ${({ $variant }) => $variant === 'alone' ?  'display: inline-block;' : ''}
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

export const StyledBox = styled(Box)<ChartLabelProps>`
    width: ${({ $variant }) => $variant === 'alone' ?  '100%' : 'auto'};
`

export const RelativeFlex = styled(Flex)<ChartLabelProps>`
    position: relative;
    ${({ $variant }) => $variant === 'multi' ?  'display: inline-flex;' : ''}
    font-size: ${({ $isMobile }) => $isMobile ? '0.65em' : '1em' };
`
