/// <reference types="react" />
export type LinkEditorPanelProps = {
    initialUrl?: string;
    initialOpenInNewTab?: boolean;
    onSetLink: (url: string, openInNewTab?: boolean) => void;
};
export declare const useLinkEditorState: ({ initialUrl, initialOpenInNewTab, onSetLink }: LinkEditorPanelProps) => {
    url: string;
    setUrl: import("react").Dispatch<import("react").SetStateAction<string>>;
    openInNewTab: boolean;
    setOpenInNewTab: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
    isValidUrl: boolean;
};
export declare const LinkEditorPanel: ({ onSetLink, initialOpenInNewTab, initialUrl }: LinkEditorPanelProps) => import("react").JSX.Element;
