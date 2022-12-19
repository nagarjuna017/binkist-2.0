import * as React from "react";
import {Icon} from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const primay = Template.bind({});
primay.args = {
  name: "search",
};
