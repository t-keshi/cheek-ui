import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Typography } from './Typography';

export default {
  title: 'DataDisplay/Typography',
  component: Typography,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = () => (
  <Typography
    variant="h4"
    as="h1"
    display={['inline', '_', '_', 'block']}
    color={['primary', '_', '_', 'textPrimary']}
  >
    Hey
  </Typography>
);

export const All = Template.bind({});
