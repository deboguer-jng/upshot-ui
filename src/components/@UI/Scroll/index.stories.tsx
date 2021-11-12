import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Scroll from './'
import { Box, Flex } from 'theme-ui'

export default {
  title: '@UI/Scroll',
  component: Scroll,
} as ComponentMeta<typeof Scroll>

const Template: ComponentStory<typeof Scroll> = (args) => {
  return (
    <Scroll {...args}>
      <Flex sx={{width: 'fit-content'}}>
        <button> text1 </button>
        <button> text1 </button>
        <button> text1 </button>
        <button> text1 </button>
        <button> text1 </button>
        <button> text1 </button>
        <button> text1 </button>
        <button> text1 </button>
        <button> text1 </button>
        <button> text1 </button>
        <button> text1 </button>
        <button> text1 </button>
        <button> text1 </button>
        <button> text1 </button>
        <button> text1 </button>
        <button> text1 </button>
        <button> text1 </button>
        <button> text1 </button>
        <button> text1 </button>
        <button> text1 </button>
        <button> text1 </button>
        <button> text1 </button>
        <button> text1 </button>
        <button> text1 </button>
        <button> text1 </button>
        <button> text1 </button>
        <button> text1 </button>
        <button> text1 </button>
        <button> text1 </button>
        <button> text1 </button>
      </Flex>
    </Scroll>
  )
}

export const Default = Template.bind({})
Default.args = { sx: { width: '300px', height: '225px' } }
