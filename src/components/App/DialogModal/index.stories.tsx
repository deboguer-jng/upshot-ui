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

export const Signin = Template.bind({})
Signin.args = {
  header: 'Signing in',
  body: 'Please sign in with MetaMask.',
}

export const Success = Template.bind({})
Success.args = {
  symbol: 'success',
  header: 'Transaction Complete!',
  body: 'You successfully purchased CryptoDickbutt #42069 for Ξ3.14.',
  button: 'View on Profile',
  showButtonArrow: true,
}

export const Insufficient = Template.bind({})
Insufficient.args = {
  symbol: 'failure',
  header: 'Insufficient Funds',
  body: "You don't have enough funds to make this purchase.",
  button: 'Close',
}

export const Failure = Template.bind({})
Failure.args = {
  symbol: 'failure',
  header: 'Transaction Failed',
  body: 'Your transaction failed / An unknown error occurred.',
  button: 'Close',
}
