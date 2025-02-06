import { ConfigProvider, type ThemeConfig } from "antd";
import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  themeConfig: ThemeConfig;
}

export const ThemeProvider = ({ children, themeConfig }: Props) => {
  return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>;
};
