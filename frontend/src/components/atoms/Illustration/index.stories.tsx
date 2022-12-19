import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Illustration from ".";

export default {
  title: "atoms/Illustration",
  component: Illustration,
} as ComponentMeta<typeof Illustration>;

const Template: ComponentStory<typeof Illustration> = (args) => (
  <Illustration
    {...args}
  />
);

export const primary = Template.bind({});

primary.args = {
  name: "2",
};
