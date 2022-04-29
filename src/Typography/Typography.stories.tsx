import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Typography } from "./Typography"

export default {
  title: "Inputs/Typography",
  component: Typography,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = () => <Typography />

export const TypographySt = Template.bind({})
