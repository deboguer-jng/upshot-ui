import styled from '@emotion/styled'
import Colors from '../../../themes/UpshotUI/colors'
import Box from '../../Layout/Box'
import IconButton from '../../@UI/IconButton'
import Text from '../../@UI/Text'
import Label from '../../@UI/Label'

interface ColorProp {
    $color: keyof typeof Colors
}

interface VariantProp {
    $variant: 'alone' | 'multi'
}

export const IconBox = styled(Box)<ColorProp>`
    border: 1px ${({ theme, $color }) => theme.colors[$color]} solid;
    border-radius: ${({ theme }) => theme.radii.circle};
    width: 20px;
    height: 20px;
    text-align: center;
    margin-right: 12px;
    margin-top: 5px;
`
export const StyledIconButton = styled(IconButton)`
    padding: 0;
    width: 18px;
    height: 18px;
`

export const StyledTitle = styled('h3')<ColorProp>`
    text-transform: uppercase;
    color: ${({ theme, $color }) => theme.colors[$color]};
    font-weight: bold;
    margin: 5px 0px;
`

export const StyledH1 = styled('h1')<VariantProp>`
    margin: 0px;
    ${({ $variant }) => $variant == 'alone' ?  'display: inline-block;' : ''}
`

export const StyledDateTime = styled('h2')`
    margin: 0px 0px;
    text-transform: uppercase;
`

export const StyledChangeDiv = styled('div')<VariantProp>`
    margin-left: ${({ $variant }) => $variant == 'alone' ?  '10px' : '0px'};
    color: ${({ theme }) => theme.colors.primary};
    ${({ $variant }) => $variant == 'alone' ?  'display: inline-block;' : ''}
`

export const StyledRed = styled(Text)`
    color: ${({ theme }) => theme.colors.red};
    margin-right: 6px;
`

export const StyledBlue = styled(Text)`
    color: ${({ theme }) => theme.colors.primary};
`

export const InlineLabel = styled(Label)`
    display: inline-block;
`