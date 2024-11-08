import { icons } from 'lucide-react';
export type ContentTypePickerOption = {
    label: string;
    id: string;
    type: 'option';
    disabled: () => boolean;
    isActive: () => boolean;
    onClick: () => void;
    icon: keyof typeof icons;
};
export type ContentTypePickerCategory = {
    label: string;
    id: string;
    type: 'category';
};
export type ContentPickerOptions = Array<ContentTypePickerOption | ContentTypePickerCategory>;
export type ContentTypePickerProps = {
    options: ContentPickerOptions;
};
export declare const ContentTypePicker: ({ options }: ContentTypePickerProps) => import("react/jsx-runtime").JSX.Element;
