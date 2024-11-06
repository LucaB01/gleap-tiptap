/// <reference types="react" />
export type ColorPickerProps = {
    color?: string;
    onChange?: (color: string) => void;
    onClear?: () => void;
};
export declare const ColorPicker: ({ color, onChange, onClear }: ColorPickerProps) => import("react").JSX.Element;
