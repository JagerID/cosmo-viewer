import { ComponentPropsWithoutRef, ElementType, ForwardedRef } from "react";

type As<E extends ElementType> = {
  as?: E;
};

type PolymorphRef<E extends ElementType> = ForwardedRef<E>;

type PolymorphProps<E extends ElementType> = As<E> &
  ComponentPropsWithoutRef<E>;

export const Polymorph = <E extends ElementType>(
  { as, children }: PolymorphProps<E>,
  ref: PolymorphRef<E>
) => {
  const Tag = as || ("div" as ElementType);

  return <Tag ref={ref}>{children}</Tag>;
};
