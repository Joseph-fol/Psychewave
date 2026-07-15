declare module "*.css";

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module "next" {
  export interface Metadata {
    title?: string;
    description?: string;
    [key: string]: any;
  }
}

declare module "next/link" {
  import type { ReactNode } from "react";

  export interface LinkProps {
    href: string;
    className?: string;
    children?: ReactNode;
    [key: string]: any;
  }

  export default function Link(props: LinkProps): any;
}

declare module "next/font/google" {
  export function Outfit(options: {
    subsets?: string[];
    display?: string;
    variable?: string;
  }): {
    variable: string;
  };
}

declare module "react" {
  export type ReactNode = any;
  export type Key = string | number;
  export type Ref<T> = any;

  export interface Attributes {
    key?: Key | null | undefined;
  }

  export interface DOMAttributes<T> {
    children?: ReactNode;
  }

  export interface HTMLAttributes<T> extends DOMAttributes<T> {
    className?: string;
    [key: string]: any;
  }

  export interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
  }

  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useState<S>(initialState: S): [S, (value: S) => void];
  export function forwardRef<T, P = {}>(render: (props: P, ref: Ref<T>) => any): any;
}

declare module "react/jsx-runtime" {
  export function jsx(type: any, props: any, key?: any): any;
  export function jsxs(type: any, props: any, key?: any): any;
  export const Fragment: any;
}