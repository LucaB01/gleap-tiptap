/// <reference types="react" />
export type FontFamilyPickerProps = {
    onChange: (value: string) => void;
    value: string;
};
export declare const FontFamilyPicker: ({ onChange, value }: FontFamilyPickerProps) => import("react").JSX.Element;
