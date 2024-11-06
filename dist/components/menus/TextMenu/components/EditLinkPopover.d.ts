/// <reference types="react" />
export type EditLinkPopoverProps = {
    onSetLink: (link: string, openInNewTab?: boolean) => void;
};
export declare const EditLinkPopover: ({ onSetLink }: EditLinkPopoverProps) => import("react").JSX.Element;
