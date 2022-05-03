import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from './Box';

export default {
  title: 'Layout/Box',
  component: Box,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = () => (
  <Box as="section" className="" display="block" size={400} bgColor="primary" border="divider">
    <Box display="inline" mb={8} />
    <p>hoe</p>
  </Box>
);

export const All = Template.bind({});
