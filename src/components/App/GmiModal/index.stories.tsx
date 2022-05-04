import React, { useState, useRef } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Modal from '../../@UI/Modal'
import Button from '../../@UI/Button'

import GmiModal from './'

export default {
  title: 'App/GmiModal',
  component: GmiModal,
} as ComponentMeta<typeof GmiModal>

const Template: ComponentStory<typeof GmiModal> = (args) => {
  const modalRef = useRef(null)

  const handleConnect = (provider: string) => {
    console.info(`Connect to: ${provider}`)
    modalRef?.current?.click()
  }

  return (
    <>
      <Modal ref={modalRef} open={true}>
        <GmiModal hideMetaMask={false} onConnect={handleConnect} {...args} />
      </Modal>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {}
