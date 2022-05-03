import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Text from '.'

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    children: {
      type: 'string'
    },
    variant: {
      control: {
        type: 'select',
        options: ['tiny', 'small', 'regular', 'medium', 'big']
      }
    }
  }
} as ComponentMeta<typeof Text>

export const Default: ComponentStory<typeof Text> = args => <Text {...args} />

Default.args = {
  children: 'This is the component Text'
}
