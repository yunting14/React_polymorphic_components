import React from "react";
import { BoxProps, PolymorphicComponentProps } from "./Props.types";

export const Box = <C extends React.ElementType = "div">({
  as,
  children,
  borderStyle,
  ...props
}: PolymorphicComponentProps<C, BoxProps>) => {
  const styles = { style: {background: "orange", height: 100, width: 100, padding: '10px', margin: 'auto', borderStyle} };


  const Component = as || "div";

  return (
    <Component {...styles} {...props}>
      {children}
    </Component>
  );
};
