import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '../Box/Box';
import { Center } from './Center';

export default {
  title: 'Layout/Center',
  component: Center,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Center>;

const Template: ComponentStory<typeof Center> = () => (
  <Center as="section" size={400} bgColor="primary" pb={8}>
    <Box size={100} bgColor="secondary" />
  </Center>
);

export const All = Template.bind({});
