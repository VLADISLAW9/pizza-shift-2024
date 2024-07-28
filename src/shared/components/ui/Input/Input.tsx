import type { ComponentProps, ForwardedRef, JSXElementConstructor, ReactElement } from 'react';
import { forwardRef } from 'react';
import type { InputBaseProps as MantineInputBaseProps } from '@mantine/core';
import { Input as MantineInput, InputBase as MantineInputBase } from '@mantine/core';

type InputProps<
  Component extends keyof JSX.IntrinsicElements | JSXElementConstructor<any> = 'input'
> = {
  className?: string;
  component?: Component;
} & ComponentProps<Component> &
  MantineInputBaseProps;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, component, ...props }, ref) => (
    <MantineInput.Wrapper>
      <MantineInputBase component={component} className={className} {...props} ref={ref} />
    </MantineInput.Wrapper>
  )
) as <Component extends keyof JSX.IntrinsicElements | JSXElementConstructor<any> = 'input'>(
  props: InputProps<Component> & { ref?: ForwardedRef<HTMLInputElement> }
) => ReactElement;
