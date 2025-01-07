import { ImageRequireSource } from "react-native";
type Keys =
  | "top-left"
  | "top-right"
  | "bottom-right"
  | "bottom-left"
  | "home-bg"
  | "support-icon"
  | "Home-screen-banner"
  | "asma-ul-husna"
  | "sufisum-Hero-img"
  | "learn-spirituality"
  | "asma-ul-nabi";

export const images: Record<Keys, ImageRequireSource> = {
  "top-left": require("./corner-top-left.png"),
  "top-right": require("./corner-top-right.png"),
  "bottom-right": require("./corner-bottom-right.png"),
  "bottom-left": require("./corner-bottom-left.png"),
  "home-bg": require("./home-bg.jpg"),
  "support-icon": require("./support-icon.png"),
  "Home-screen-banner": require("./Home-screen-banner.png"),
  "asma-ul-husna": require("./asma-ul-husna.png"),
  "asma-ul-nabi": require("./asma-ul-nabi.png"),
  "learn-spirituality": require("./learn-spirituality.png"),
  "sufisum-Hero-img": require("./sufisum-Hero-img.png"),
};
