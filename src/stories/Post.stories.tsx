import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Post } from '../components';

export default {
  component: Post,
  title: 'Components/Post',
  argTypes: {
    width: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Post>;

const Template: ComponentStory<typeof Post> = (args) => {
  return <Post {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
