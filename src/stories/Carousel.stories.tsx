import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Carousel, Item } from '../components';

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = () => {
  return (
    <Carousel width="100%" height={300}>
      <Item color="red">1</Item>
      <Item color="green">2</Item>
      <Item color="blue">3</Item>
      <Item color="purple">4</Item>
    </Carousel>
  );
};

export const Default = Template.bind({});
Default.args = {};
