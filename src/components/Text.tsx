import React from "react";

/* Notes
- constraining C to React.ElementType prevents random values being passed into "as"

- <C extends React.ElementType = 'span'> ==> if "as" isn't passed, default is "span". Without this, when we don't pass "as", we can type any random attributes, like <Text href="x" yunting="hello"></Text>
*/

type RainbowColors =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "violet"
  | "purple";

type TextProps<C extends React.ElementType> = {
  as?: C;
  color?: RainbowColors | "pink";
  children: React.ReactNode;
};

type Props<C extends React.ElementType> = TextProps<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof TextProps<C>>;

export function Text<C extends React.ElementType = "span">({
  as,
  children,
  style,
  color,
  ...props // to allow the other props from React.ComponentPropsWithoutRef
}: Props<C>) {
  const styles = color ? { style: { ...style, color } } : {};

  const Component = as || "span";

  return (
    <Component {...props} {...styles}>
      {children}
    </Component>
  );
}

export const Emphasis = ({ children }: { children: string }) => {
  return <em style={{ background: "pink", color: "blue" }}>{children}</em>;
};
