/* Notes
- constraining C to React.ElementType prevents random values being passed into "as"

- <C extends React.ElementType = 'span'> ==> if "as" isn't passed, default is "span". Without this, when we don't pass "as", we can type any random attributes, like <Text href="x" yunting="hello"></Text>
*/

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type RainbowColors =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "violet"
  | "purple";

export type TextProps = {
  color?: RainbowColors | "pink";
};

export type BoxProps = {
  borderStyle?: "none" | "dotted" | "dashed",
};

export type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<AsProp<C> & Props> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof Props>;
