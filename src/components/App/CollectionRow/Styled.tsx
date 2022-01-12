import styled from '@emotion/styled'
import TableRow from '../../Layout/TableRow'
import { Variant } from './'
import colors from '../../../themes/UpshotUI/colors'

type ColorsByVariant = { [key: string]: keyof typeof colors }

const colorsByVariant: ColorsByVariant = {
  normal: 'grey-800',
  dark: 'grey-900',
  black: 'black',
}

export const CollectionRowBase = styled(TableRow)<{ $variant: Variant }>`
  background-color: ${({ theme, $variant }) =>
    theme.colors[colorsByVariant[$variant]]};
`
