/// <reference types="react" />
export type ColorButtonProps = {
    color?: string;
    active?: boolean;
    onColorChange?: (color: string) => void;
};
export declare const ColorButton: import("react").MemoExoticComponent<({ color, active, onColorChange }: ColorButtonProps) => import("react").JSX.Element>;
