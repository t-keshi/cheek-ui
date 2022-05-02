import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '../Box/Box';
import { Stack } from './Stack';
import { StackDivider } from './StackDivider';

export default {
  title: 'Inputs/Stack',
  component: Stack,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = () => (
  <>
    <Stack spacing={5} divider={<StackDivider />} align="stretch">
      <Box h={200} bgColor="primary">
        hoe
      </Box>
      <Box h={200} bgColor="error">
        hoe
      </Box>
    </Stack>
    <Stack spacing={5} horizontal divider={<StackDivider />} w="fit-content">
      <Box size={200} bgColor="primary">
        hoe
      </Box>
      <Box size={200} bgColor="error">
        hoe
      </Box>
    </Stack>
  </>
);

export const All = Template.bind({});
