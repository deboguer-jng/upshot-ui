import React, { forwardRef, useState, useEffect, useRef } from 'react'
import { Flex } from 'theme-ui'
import { InputRoundedProps } from '../InputRounded'
import IconButton from '../IconButton'
import { IconButtonProps } from 'theme-ui'
import {
  InputRoundedSearchBase,
  InputRoundedSearchWrapper,
  InputRounededSearchSuggestions,
  InputRoundedSearchSuggestionItem,
  InputRoundedSearchSuggestionsWrapper,
} from './Styled'
import Icon from '../Icon'
import { useTheme } from '../../../themes/UpshotUI'

export interface InputSuggestion {
  id: number
  name: string
}

export interface InputRoundedSearchProps extends InputRoundedProps {
  /**
   * Expand to the full-width of the container.
   */
  fullWidth?: boolean
  /**
   * Show the search button
   */
  hasButton?: boolean
  /**
   * Variant for the inner search button.
   */
  variant?: 'nav' | 'search' | 'default'
  /**
   * Properties for the button.
   */
  buttonProps?: IconButtonProps
  /**
   * Suggestions for the auto-select.
   */
  suggestions?: InputSuggestion[]
  /**
   * Handler for search selection.
   */
  onSuggestionSelect?: (item: InputSuggestion) => void
}

/**
 * Provides a rounded search input.
 */
const InputRoundedSearch = forwardRef(
  (
    {
      fullWidth = false,
      hasButton = false,
      variant = 'default',
      buttonProps: buttonPropsRaw,
      onSuggestionSelect,
      suggestions,
      ...props
    }: InputRoundedSearchProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const { theme } = useTheme()
    const [open, setOpen] = useState(false)
    const wrapperRef = useRef<HTMLDivElement>()

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(e.target as Node)
        ) {
          setOpen(false)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    /* Size the button equal to the height of the field. */
    const buttonSize = theme.forms.inputs.default.height

    /* Padding used between button and container. */
    const padding = theme.sizes[1] + 'px'

    /* Apply button style & properties. */
    const { sx: buttonSx, ...buttonProps } = buttonPropsRaw ?? {}

    return (
      <InputRoundedSearchWrapper ref={wrapperRef}>
        <Flex sx={{ width: fullWidth ? '100%' : 'auto' }}>
          <InputRoundedSearchBase
            placeholder="Search..."
            $hasButton={hasButton}
            onFocus={() => setOpen(true)}
            {...{ ref, ...props }}
          />

          <IconButton
            color="primary"
            sx={{
              marginLeft: '-' + buttonSize /* Position inside input field. */,
              height: buttonSize,
              width: buttonSize,
              padding,
              /* Fade in / out. */
              pointerEvents: hasButton ? 'auto' : 'none',
              opacity: Number(hasButton),
              transition: 'default',
              transitionDuration: theme.durations.normal,
              zIndex: theme.zIndex.default + 2,
              ...buttonSx,
            }}
            {...buttonProps}
          >
            <Icon
              icon={variant === 'nav' ? 'arrowStylizedRight' : 'searchCircle'}
              size={variant === 'nav' ? 16 : '100%'}
              aria-label="Search icon"
            />
          </IconButton>
        </Flex>
        {!!suggestions?.length && open && (
          <InputRoundedSearchSuggestionsWrapper>
            <InputRounededSearchSuggestions>
              {suggestions.map((suggestion) => (
                <InputRoundedSearchSuggestionItem
                  key={suggestion.id}
                  onClick={() => {
                    onSuggestionSelect(suggestion)
                    setOpen(false)
                  }}
                >
                  {suggestion.name}
                </InputRoundedSearchSuggestionItem>
              ))}
            </InputRounededSearchSuggestions>
          </InputRoundedSearchSuggestionsWrapper>
        )}
      </InputRoundedSearchWrapper>
    )
  }
)

export default InputRoundedSearch
