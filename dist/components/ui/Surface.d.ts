import { HTMLProps } from 'react';
export type SurfaceProps = HTMLProps<HTMLDivElement> & {
    withShadow?: boolean;
    withBorder?: boolean;
};
export declare const Surface: import("react").ForwardRefExoticComponent<Omit<SurfaceProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
