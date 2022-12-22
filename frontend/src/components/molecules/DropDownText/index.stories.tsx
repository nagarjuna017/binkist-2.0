import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import DropDownText from ".";

export default {
  title: "molecules/DropDownText",
  component: DropDownText,
} as ComponentMeta<typeof DropDownText>;

const Template: ComponentStory<typeof DropDownText> = (args) => (
  <DropDownText
    {...args}
  />
);

export const primary = Template.bind({});

primary.args = {
  icon: "add",
  name: "blinkist",
};
