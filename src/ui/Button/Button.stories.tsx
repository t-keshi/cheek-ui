import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Stack } from '../Stack/Stack';
import { Button } from './Button';

export default {
  title: 'Inputs/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => (
  <Stack spacing={4} w="fit-content">
    <Button>Hey</Button>
    <Button color="secondary" startIcon={<div>🧑🏻‍🎤</div>} variant="outlined">
      Hey
    </Button>
    <Button variant="text">Hey</Button>
    <Button size="sm">Hey</Button>
    <Button size="lg" variant="outlined">
      Hey
    </Button>
  </Stack>
);

export const All = Template.bind({});
