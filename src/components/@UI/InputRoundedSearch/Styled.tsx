import styled from '@emotion/styled'
import InputRounded from '../InputRounded'

interface InputRoundedSearchBaseProps {
  $hasButton: boolean
}

export const InputRoundedSearchBase = styled(
  InputRounded
)<InputRoundedSearchBaseProps>`
  /* Leave space for the right-aligned IconButton. */
  ${({ theme, $hasButton }) =>
    $hasButton &&
    `
      padding-right: ${theme.forms.inputs.default.height};
    `}
  z-index: ${({ theme }) => theme.zIndex.default + 2};
`

export const InputRoundedSearchWrapper = styled.div`
  position: relative;
  width: fit-content;
`

export const InputRoundedSearchSuggestionsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 20px;
  padding: 12px;
  padding-top: 52px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors['grey-900']};
  z-index: ${({ theme }) => theme.zIndex.default + 1};
`

export const InputRounededSearchSuggestions = styled.div`
  overflow: auto;
  max-height: 150px;
  ${({ theme: { scroll } }) => scroll.thin}
`

export const InputRoundedSearchSuggestionItem = styled.div`
  padding: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.colors['grey-800']};
  }
`
