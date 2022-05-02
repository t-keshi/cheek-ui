import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from './Box';

export default {
  title: 'Inputs/Box',
  component: Box,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = () => (
  <Box as="section" className="" display="block" size={800} bgColor="red">
    <Box display="inline" mb={8} />
    <p>hoe</p>
  </Box>
);

export const All = Template.bind({});
