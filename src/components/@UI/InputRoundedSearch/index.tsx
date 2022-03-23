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
import { useBreakpointIndex } from '../../../hooks/useBreakpointIndex'

export interface InputSuggestion {
  id: number | string
  name: string
  [key: string]: any
}

export type InputRoundedSearchVariant = 'nav' | 'search' | 'default'

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
  variant?: InputRoundedSearchVariant
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
    const [arrowSelected, setArrowSelected] = useState<number | undefined>()
    const suggestionsRef = useRef<HTMLDivElement>()
    const wrapperRef = useRef<HTMLDivElement>()
    const isMobile = useBreakpointIndex() <= 1

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

    const handleKeyDown = (e: KeyboardEvent) => {
      if (suggestionsRef.current) {
        let currentItem = suggestionsRef.current.children.item(
          arrowSelected
        ) as HTMLElement
        if (currentItem) {
          if (e.code === 'ArrowUp' && arrowSelected >= 1) {
            setArrowSelected(arrowSelected - 1)
            suggestionsRef.current.scrollTop =
              currentItem.offsetTop - suggestionsRef.current.clientHeight + 20
          } else if (
            e.code === 'ArrowDown' &&
            (typeof arrowSelected === 'undefined' ||
              arrowSelected < suggestions.length - 1)
          ) {
            setArrowSelected((arrowSelected || 0) + 1)
            suggestionsRef.current.scrollTop =
              currentItem.offsetTop - suggestionsRef.current.clientHeight + 70
          } else if (e.code === 'Enter') {
            onSuggestionSelect(suggestions[arrowSelected])
            setOpen(false)
          }
        }
      }
    }

    return (
      <InputRoundedSearchWrapper
        ref={wrapperRef}
        $isMobile={isMobile}
        $isFullWidth={fullWidth}
        onKeyDown={(e) => handleKeyDown(e as any)}
      >
        <Flex sx={{ width: fullWidth ? '100%' : 'auto' }}>
          <InputRoundedSearchBase
            placeholder="Search..."
            $hasButton={hasButton}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
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
              opacity: hasButton && variant !== 'nav' ? 'initial' : 0,
              transition: 'default',
              transitionDuration: theme.durations.normal,
              zIndex: theme.zIndex.default + 2,
              '&:hover': {
                opacity: hasButton && variant === 'nav' ? 1 : 'initial',
              },
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
          <InputRoundedSearchSuggestionsWrapper $variant={variant}>
            <InputRounededSearchSuggestions ref={suggestionsRef}>
              {suggestions.map((suggestion, index) => (
                <InputRoundedSearchSuggestionItem
                  key={suggestion.id}
                  isArrowSelected={arrowSelected === index}
                  onMouseDown={() => {
                    onSuggestionSelect(suggestion)
                    setOpen(false)
                  }}
                >
                  {suggestion.name}
                  <Icon
                    icon="arrowStylizedRight"
                    color={arrowSelected === index ? 'grey-300' : 'grey-500'}
                    size="16"
                  />
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
