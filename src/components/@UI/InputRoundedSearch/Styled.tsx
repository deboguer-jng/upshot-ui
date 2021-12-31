import styled from '@emotion/styled'
import InputRounded from '../InputRounded'

interface InputRoundedSearchBaseProps {
  $hasButton: boolean
}

interface InputRoundedSearchWrapperProps {
  $isMobile: boolean
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

export const InputRoundedSearchWrapper = styled.div<InputRoundedSearchWrapperProps>`
  position: relative;
  width: ${({ $isMobile }) => ($isMobile ? '100%' : 'fit-content')};
`

export const InputRoundedSearchSuggestionsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 20px;
  margin-top: 54px;
  width: calc(100% + 24px);
  margin-left: -12px;
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid ${({ theme }) => theme.colors['grey-500']};
  backdrop-filter: blur(4px);
  overflow: hidden;
  z-index: ${({ theme }) => theme.zIndex.default + 1};
`

export const InputRounededSearchSuggestions = styled.div`
  overflow: auto;
  max-height: 150px;
  margin: 8px;
  ${({ theme: { scroll } }) => scroll.thin}
`

export const InputRoundedSearchSuggestionItem = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.1s linear;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
`
