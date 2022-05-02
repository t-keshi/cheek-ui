import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '../Box/Box';
import { Grid } from './Grid';

export default {
  title: 'Inputs/Grid',
  component: Grid,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = () => (
  <Grid columns={[4, '_', '_', 5]}>
    <Box colSpan={2} bgColor="primary">
      hoe
    </Box>
    <Box column={['4 / 5', '_', '_', '4 / 6']} bgColor="error">
      hoe
    </Box>
  </Grid>
);

export const All = Template.bind({});
