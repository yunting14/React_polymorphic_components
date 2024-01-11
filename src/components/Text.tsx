import React from "react";
import { PolymorphicComponentProps, TextProps } from "./Props.types";

export function Text<C extends React.ElementType = "span">({
  as,
  children,
  style,
  color,
  ...props // to allow the other props from React.ComponentPropsWithoutRef
}: PolymorphicComponentProps<C, TextProps>) {
  const styles = color ? { style: { ...style, color } } : {};

  const Component = as || "span";

  return (
    <Component {...props} {...styles}>
      {children}
    </Component>
  );
}