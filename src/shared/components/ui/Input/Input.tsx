import type { ComponentProps, ForwardedRef, JSXElementConstructor, ReactElement } from 'react';
import { forwardRef } from 'react';
import * as Mantine from '@mantine/core';

type InputProps<
  Component extends keyof JSX.IntrinsicElements | JSXElementConstructor<any> = 'input'
> = {
  className?: string;
  component?: Component;
} & ComponentProps<Component> &
  Mantine.InputBaseProps;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, component, ...props }, ref) => (
    <Mantine.Input.Wrapper>
      <Mantine.InputBase component={component} className={className} {...props} ref={ref} />
    </Mantine.Input.Wrapper>
  )
) as <Component extends keyof JSX.IntrinsicElements | JSXElementConstructor<any> = 'input'>(
  props: InputProps<Component> & { ref?: ForwardedRef<HTMLInputElement> }
) => ReactElement;
