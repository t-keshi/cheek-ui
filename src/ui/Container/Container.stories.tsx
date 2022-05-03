import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '../Box/Box';
import { Container } from './Container';

export default {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = () => (
  <Container as="section" maxW="md">
    <Box w="100%" h={200} bgColor="primary" />
  </Container>
);

export const All = Template.bind({});
