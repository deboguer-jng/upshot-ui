import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Box from '../../Layout/Box'
import Button from '../Button'
import Modal from './'

export default {
  title: '@UI/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => {
  const [open, setOpen] = useState(false)
  const toggleModal = () => setOpen(!open)

  return (
    <>
      <Button onClick={toggleModal}>{open ? 'Hide' : 'Show'}</Button>
      <Modal onClose={toggleModal} {...{ open, ...args }} />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  children: <Box sx={{ bg: '#fff', color: '#000', p: 8 }}>Content</Box>,
}
