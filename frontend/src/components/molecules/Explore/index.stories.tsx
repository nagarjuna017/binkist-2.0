import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Explore from ".";

export default {
  title: "molecules/Explore",
  component: Explore,
} as ComponentMeta<typeof Explore>;

const Template: ComponentStory<typeof Explore> = (args) => (
  <Explore
    {...args}
  />
);

export const primary = Template.bind({});

primary.args = {
  text: "Explore",
};
