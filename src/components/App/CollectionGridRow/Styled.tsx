import styled from '@emotion/styled'
import Grid from '../../Layout/Grid'
import { Variant } from './'
import colors from '../../../themes/UpshotUI/colors'

type ColorsByVariant = { [key: string]: keyof typeof colors }

const colorsByVariant: ColorsByVariant = {
  normal: 'grey-800',
  dark: 'grey-900',
  black: 'black',
}

export const CollectionGridRowBase = styled(Grid)<{ $variant: Variant }>`
  background-color: ${({ theme, $variant }) =>
    theme.colors[colorsByVariant[$variant]]};
  align-items: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  padding: ${({ theme }) => [1, 3].map((n) => theme.space[n] + 'px').join(' ')};
  margin: 8px 0;
`
