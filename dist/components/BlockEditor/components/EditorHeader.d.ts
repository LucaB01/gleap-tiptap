/// <reference types="react" />
import { EditorUser } from '../types';
import { WebSocketStatus } from '@hocuspocus/provider';
import { Editor } from '@tiptap/core';
export type EditorHeaderProps = {
    isSidebarOpen?: boolean;
    toggleSidebar?: () => void;
    editor: Editor;
    collabState: WebSocketStatus;
    users: EditorUser[];
};
export declare const EditorHeader: ({ editor, collabState, users, isSidebarOpen, toggleSidebar }: EditorHeaderProps) => import("react").JSX.Element;
