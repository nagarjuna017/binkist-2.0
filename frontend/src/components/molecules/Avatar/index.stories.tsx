import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Avatar from ".";

export default {
  title: "molecules/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = () => (
  <Avatar />
);

export const primary = Template.bind({});



