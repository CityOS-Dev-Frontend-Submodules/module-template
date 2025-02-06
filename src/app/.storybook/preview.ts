import type { Preview } from "@storybook/react";
import { ThemeDecorator } from "./decorators/ThemeDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [ThemeDecorator],
};

export default preview;
