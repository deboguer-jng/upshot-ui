import React, { forwardRef, MouseEventHandler } from 'react'
import { ModalBase } from './Styled'
import { BoxProps, Flex, Image } from 'theme-ui'
import Text from '../../@UI/Text'
import Icon from '../../@UI/Icon'
import Link from '../../@UI/Link'

enum DialogSymbolType {
  LOADING = 'loading',
  SUCCESS = 'success',
  FAILURE = 'failure',
}

export interface DialogModalProps extends BoxProps {
  /**
   * the icon to display at the top of this modal "loading", "success" or "failure"
   */
  symbol?: DialogSymbolType
  /**
   * the header text of the modal
   */
  header: string
  /**
   * the body text of the modal
   */
  body: string
  /**
   * optional button text
   */
  button?: string
  /**
   * callback function triggered by button click
   */
  onButtonClick?: MouseEventHandler
  /**
   * show an arrow next to the button if true
   */
  showButtonArrow?: boolean
}

const DialogModal = forwardRef(
  (
    {
      symbol = DialogSymbolType.LOADING,
      header,
      body,
      button,
      onButtonClick,
      showButtonArrow = false,
      ...props
    }: DialogModalProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => (
    <ModalBase {...{ ref, ...props }}>
      {{
        [DialogSymbolType.LOADING]: <Icon icon="upshotWallet" size="50" />,
        [DialogSymbolType.SUCCESS]: <Icon icon="upshotConfirmation" size="50" />,
        [DialogSymbolType.FAILURE]: <Icon icon="upshotError" size="50" />,
      }[symbol]}
      <Text variant="large">{header}</Text>
      <Text variant="small">{body}</Text>
      {button && (
        <Link onClick={onButtonClick}>
          <Flex sx={{ alignItems: 'center', gap: '16px' }}>
            <Text>{button}</Text>
            {showButtonArrow && <Icon icon="arrowStylizedRight" size={16} />}
          </Flex>
        </Link>
      )}
    </ModalBase>
  )
)

export default DialogModal
