/// <reference types="react" />
export type LinkPreviewPanelProps = {
    url: string;
    onEdit: () => void;
    onClear: () => void;
};
export declare const LinkPreviewPanel: ({ onClear, onEdit, url }: LinkPreviewPanelProps) => import("react").JSX.Element;
