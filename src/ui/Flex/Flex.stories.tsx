import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from './Flex';

export default {
  title: 'Inputs/Flex',
  component: Flex,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = () => (
  <Flex as="section" className="" size={400} justify="space-between" align="center">
    <p>hoe</p>
    <p>hoe</p>
  </Flex>
);

export const All = Template.bind({});
