import React from "react";
import { StoryFn } from "@storybook/react";
import { ConfigProvider } from "antd";

export const ThemeDecorator = (StoryComponent: StoryFn) => (
  <ConfigProvider>
    <StoryComponent />
  </ConfigProvider>
);
