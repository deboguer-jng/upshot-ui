import styled from '@emotion/styled'
import Colors from '../../../themes/UpshotUI/colors'
import Box from '../../Layout/Box'
import IconButton from '../../@UI/IconButton'

interface ColorProp {
    $color: keyof typeof Colors
}

interface TypeProp {
    $type: 'alone' | 'multi'
}

export const IconBox = styled(Box)<ColorProp>`
    border: 1px ${({ theme, $color }) => theme.colors[$color]} solid;
    border-radius: ${({ theme }) => theme.radii.circle};
    width: 20px;
    height: 20px;
    text-align: center;
    margin-right: 12px;
`
export const StyledIconButton = styled(IconButton)`
    padding: 0;
    width: 20px;
    height: 20px;
`

export const StyledTitle = styled('div')<ColorProp>`
    text-transform: uppercase;
    color: ${({ theme, $color }) => theme.colors[$color]};
    font-weight: bold;
`

export const StyledH2 = styled('h1')<TypeProp>`
    margin: 5px 0px;
    ${({ $type }) => $type == 'alone' ?  'display: inline-block;' : ''}
    
`

export const StyledChangeDiv = styled('div')<TypeProp>`
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.primary};
    ${({ $type }) => $type == 'alone' ?  'display: inline-block;' : ''}
`