import { Meta, StoryObj } from "@storybook/angular";
import { ButtonComponent } from "./button.component";

const meta : Meta<ButtonComponent> =
{
  title : "Documentation / Button",
  component: ButtonComponent
}

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary : Story =
{
  args:
  {
    primary: true,
    label : "Default Button",
  }
}

export const Secondary : Story =
{
  args:
  {
    label : "Button Hovered"
  }
}