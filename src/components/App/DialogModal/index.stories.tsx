import React, { useState, useRef } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Modal from '../../@UI/Modal'

import DialogModal from './'

export default {
  title: 'App/DialogModal',
  component: DialogModal,
} as ComponentMeta<typeof DialogModal>

const Template: ComponentStory<typeof DialogModal> = (args) => {
  const [open, setOpen] = useState(false)
  const modalRef = useRef(null)
  const toggleModal = () => setOpen(!open)

  return (
    <Modal ref={modalRef} open={true}>
      <DialogModal {...args} />
    </Modal>
  )
}

export const Default = Template.bind({})
Default.args = {
  header: 'Signing in',
  body: 'sign the message with your wallet',
}

export const Success = Template.bind({})
Success.args = {
  symbol: 'success',
  header: 'Transaction complete!',
  body: 'you successfully bought CryptoDickbutt #42069',
  button: 'View on Profile',
  showButtonArrow: true,
}

export const Failure = Template.bind({})
Failure.args = {
  symbol: 'failure',
  header: 'Insufficient funds',
  body: 'you dont have enough funds to complete this transaction',
  button: 'Close',
}
