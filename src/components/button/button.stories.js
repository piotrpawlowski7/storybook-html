import "./button.css";
import buttonText from "./button-text.html";
import buttonLogo from "./button-logo.html";
import buttonHome from "./button-home.html";

export default {
  title: "Components/Button",
  parameters: { layout: "centered" },
};

export const withText = () => buttonText;
export const withLogo = () => buttonLogo;

export const onHome = () => buttonHome;