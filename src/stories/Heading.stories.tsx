import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading } from '../components';

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    icon: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Heading key={item} {...args} level={item}>
          Heading {item}
        </Heading>
      ))}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
