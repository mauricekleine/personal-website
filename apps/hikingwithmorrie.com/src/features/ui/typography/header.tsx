import { As } from "@mozza-ui/react";
import { VariantProps, clsxVariants } from "clsx-variants";
import { ReactNode } from "react";

import { textColorClassMap } from "../theme/text-color-utils";

const variants = clsxVariants({
  variants: {
    as: {
      h1: "font-serif text-5xl font-semibold sm:tracking-tight sm:text-6xl lg:text-7xl",
      h2: "font-serif text-2xl font-semibold tracking-normal sm:text-3xl",
      h3: "font-serif text-xl font-semibold",
    },
    color: textColorClassMap,
  },
});

type Props = VariantProps<typeof variants, "as"> & {
  children: ReactNode;
};

export function Header({ children, ...props }: Props) {
  return (
    <As variants={variants} {...props}>
      {children}
    </As>
  );
}

export type { Props as HeaderProps };
