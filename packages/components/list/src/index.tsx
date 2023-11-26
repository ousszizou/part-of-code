import { styled, type HTMLStyledProps } from "@nextri-org/styled-system/jsx";
import { list } from "@nextri-org/styled-system/recipes";
import { cx, css } from "@nextri-org/styled-system/css";
import type { JsxStyleProps, ConditionalValue } from "@nextri-org/styled-system/types";
import { token, Token } from "@nextri-org/styled-system/tokens";
import React, { ElementType, forwardRef, useMemo } from "react";

type UListProps = HTMLStyledProps<'ul'>;
type OListProps = HTMLStyledProps<'ol'>;
type ListItemProps = HTMLStyledProps<'li'>;
type SVGProps = HTMLStyledProps<'svg'> & { as?: ElementType }

type ListProps = UListProps & {
  spacing?: JsxStyleProps["mt"]
};
/**
 * List is used to display list items, it renders a `<ul>` by default.
 */
export const List = forwardRef<HTMLUListElement, ListProps>((props, ref) => {
  const { children, className, spacing, ...otherProps } = props;

  const spacingStyle = useMemo(() => {
    return css({
      '& > *:not(:first-child)': {
        mt: 'var(--spacing)'
      },
    });
  }, [spacing]);

  return (
    <styled.ul
      ref={ref}
      style={{
        '--spacing': token(`spacing.${spacing}` as Token)
      } as React.CSSProperties}
      className={cx(list().container, spacingStyle, className)}
      {...otherProps}
    >
      {children}
    </styled.ul>
  );
})

List.displayName = "List"

export const UnorderedList = forwardRef<HTMLUListElement, UListProps>((props, ref) => {
  const { children, className, ...otherProps } = props;
  return (
    <styled.ul ref={ref} className={className} listStyleType="initial" {...otherProps}>{children}</styled.ul>
  );
})

UnorderedList.displayName = "UnorderedList"

export const OrderedList = forwardRef<HTMLOListElement, OListProps>((props, ref) => {
  const { children, className, ...otherProps } = props;
  return (
    <styled.ol ref={ref} className={className} listStyleType="decimal" {...otherProps}>{children}</styled.ol>
  );
})

OrderedList.displayName = "OrderedList"

/**
 * ListItem
 *
 * Used to render a list item
 */
export const ListItem = forwardRef<HTMLLIElement, ListItemProps>((props, ref) => {
  const { children, className, ...otherProps } = props;
  return (
    <styled.li role="listitem" ref={ref} className={className} {...otherProps}>{children}</styled.li>
  );
})

ListItem.displayName = "ListItem"

/**
 * ListIcon
 *
 * Used to render an icon beside the list item text
 */
export const ListIcon = forwardRef<SVGSVGElement, SVGProps>((props, ref) => {
  const { as: Icon, className, ...otherProps } = props;
  if (Icon) {
    return <Icon role="presentation" ref={ref} className={cx(list().icon, className)} {...otherProps} />;
  }
  return null;
});

ListIcon.displayName = "ListIcon"
