import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ToggleButton } from '../components';

export default {
  component: ToggleButton,
  title: 'Components/toggleButton',
  argTypes: {
    width: {
      control: 'number',
    },
    height: {
      control: 'number',
    },
    padding: {
      control: 'number',
    },
  },
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => (
  <ToggleButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};
