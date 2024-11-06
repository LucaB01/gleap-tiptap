/// <reference types="react" />
export type PanelProps = {
    spacing?: 'medium' | 'small';
    noShadow?: boolean;
    asChild?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const Panel: import("react").ForwardRefExoticComponent<{
    spacing?: "small" | "medium" | undefined;
    noShadow?: boolean | undefined;
    asChild?: boolean | undefined;
} & import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
export declare const PanelDivider: import("react").ForwardRefExoticComponent<{
    asChild?: boolean | undefined;
} & import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
export declare const PanelHeader: import("react").ForwardRefExoticComponent<{
    asChild?: boolean | undefined;
} & import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
export declare const PanelSection: import("react").ForwardRefExoticComponent<{
    asChild?: boolean | undefined;
} & import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
export declare const PanelHeadline: import("react").ForwardRefExoticComponent<{
    asChild?: boolean | undefined;
} & import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
export declare const PanelFooter: import("react").ForwardRefExoticComponent<{
    asChild?: boolean | undefined;
} & import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
