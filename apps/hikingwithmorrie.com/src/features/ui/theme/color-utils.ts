import { clsxVariants } from "clsx-variants";

export type Color =
  | "black"
  | "green"
  | "green.dark"
  | "green.light"
  | "grey"
  | "grey.dark"
  | "grey.light"
  | "red"
  | "white";

export const textColorVariants = clsxVariants<{
  color: { [key in Color]: string };
}>({
  variants: {
    color: {
      black: "text-black",
      green: "text-green-base",
      "green.dark": "text-green-dark",
      "green.light": "text-green-light",
      grey: "text-grey-base",
      "grey.dark": "text-grey-dark",
      "grey.light": "text-grey-light",
      red: "text-red",
      white: "text-white",
    },
  },
});

export const getTextColorClassName = (color?: Color) => {
  return color ? textColorVariants({ color }) : undefined;
};
