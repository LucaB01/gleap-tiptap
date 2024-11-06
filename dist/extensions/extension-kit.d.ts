import { HocuspocusProvider } from '@hocuspocus/provider';
interface ExtensionKitProps {
    provider?: HocuspocusProvider | null;
}
export declare const ExtensionKit: ({ provider }: ExtensionKitProps) => (import("@tiptap/core").Node<any, any> | import("@tiptap/core").Extension<any, any> | import("@tiptap/core").Mark<import("@tiptap/extension-subscript").SubscriptExtensionOptions, any>)[];
export default ExtensionKit;
