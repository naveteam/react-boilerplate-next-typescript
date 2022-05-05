import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as ComponentMeta<typeof Button>

export const Default: ComponentStory<typeof Button> = args => <Button {...args} />

Default.args = {
  children: 'Button'
}
