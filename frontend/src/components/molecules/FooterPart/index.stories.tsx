import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import FooterPart from ".";

export default {
  title: "molecules/FooterPart",
  component: FooterPart,
} as ComponentMeta<typeof FooterPart>;

const Template: ComponentStory<typeof FooterPart> = (args) => (
  <FooterPart {...args} />
);

export const primary = Template.bind({});

primary.args = {
  text1: "FooterPart",
  text2: "FooterPart",
  text3: "FooterPart",
  text4: "FooterPart",
  text5: "FooterPart",
};
