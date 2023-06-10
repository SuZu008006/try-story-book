import {Meta, StoryFn} from '@storybook/react'
import React from 'react'
import {Legend} from './Legend'

export default {
  title: 'Top/Legend',
  component: Legend,
} as Meta

// @ts-ignore
const Template: StoryFn = (args) => <Legend {...args} />

export const GameLegend = Template.bind({})
GameLegend.args = {
  feature: 'Flag',
  firstAction: 'ctrl',
  secondAction: 'click',
}
