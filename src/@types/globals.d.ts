import type { ReactNode } from 'react';

declare global {
  export type WithChildren<T extends Record<string, any> = {}> = T & {
    children: ReactNode;
  };
}
