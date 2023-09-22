declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

declare module "*.webp";
declare module "*.jpg";
declare module "config" {
  const config: { baseUrl: string }
  export default config
}
