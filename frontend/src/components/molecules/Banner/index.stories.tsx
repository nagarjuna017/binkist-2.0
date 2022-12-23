import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Banner from ".";

export default {
  title: "molecules/Banner",
  component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = () => (
  <Banner />
);

export const primary = Template.bind({});



