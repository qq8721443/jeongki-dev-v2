import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NavigationBar } from '../components';

export default {
  title: 'Components/NavigationBar',
  component: NavigationBar,
} as ComponentMeta<typeof NavigationBar>;

const Template: ComponentStory<typeof NavigationBar> = () => {
  return <NavigationBar />;
};

export const Default = Template.bind({});
Default.args = {};
