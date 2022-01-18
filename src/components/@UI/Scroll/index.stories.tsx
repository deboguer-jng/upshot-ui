import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SliderIcon from './SliderIcon'
import SliderFade from './SliderFade'
import { Box, Flex } from 'theme-ui'

export default {
  title: '@UI/Scroll',
  component: SliderIcon,
} as ComponentMeta<typeof SliderIcon>

const TemplateIcon: ComponentStory<typeof SliderIcon> = (args) => {
  return (
    <SliderIcon {...args}>
      <Flex sx={{ width: 'fit-content' }}>
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
    </SliderIcon>
  )
}

const TemplateFade: ComponentStory<typeof SliderFade> = (args) => {
  return (
    <SliderFade {...args}>
      <Flex sx={{ width: 'fit-content' }}>
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
    </SliderFade>
  )
}
export const IconSlider = TemplateIcon.bind({})
IconSlider.args = { sx: { width: '300px', height: '225px' } }

export const FadeSlider = TemplateFade.bind({})
FadeSlider.args = { sx: { width: '300px', height: '225px' } }
