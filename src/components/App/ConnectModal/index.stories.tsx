import React, { useState, useRef } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Modal from '../../@UI/Modal'
import Button from '../../@UI/Button'

import ConnectModal from './'

export default {
  title: 'App/ConnectModal',
  component: ConnectModal,
} as ComponentMeta<typeof ConnectModal>

const Template: ComponentStory<typeof ConnectModal> = (args) => {
  const [open, setOpen] = useState(false)
  const modalRef = useRef(null)
  const toggleModal = () => setOpen(!open)

  const handleConnect = (provider: string) => {
    console.info(`Connect to: ${provider}`)
    modalRef?.current?.click()
  }

  return (
    <>
      <Button onClick={toggleModal}>{open ? 'Hide' : 'Show'}</Button>
      <Modal ref={modalRef} onClose={toggleModal} {...{ open }}>
        <ConnectModal onConnect={handleConnect} {...args} />
      </Modal>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {}
