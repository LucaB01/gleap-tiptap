import type { Editor } from '@tiptap/core';
import { TiptapCollabProvider, WebSocketStatus } from '@hocuspocus/provider';
import type { Doc as YDoc } from 'yjs';
import type { EditorUser } from '../components/BlockEditor/types';
declare global {
    interface Window {
        editor: Editor | null;
    }
}
export declare const useBlockEditor: ({ aiToken, ydoc, provider, userId, userName, }: {
    aiToken?: string | undefined;
    ydoc: YDoc;
    provider?: TiptapCollabProvider | null | undefined;
    userId?: string | undefined;
    userName?: string | undefined;
}) => {
    editor: Editor;
    users: (EditorUser & {
        initials: string;
    })[];
    collabState: WebSocketStatus;
};
