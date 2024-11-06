import React from 'react';
import { Editor as CoreEditor } from '@tiptap/core';
export type TableOfContentsProps = {
    editor: CoreEditor;
    onItemClick?: () => void;
};
export declare const TableOfContents: React.MemoExoticComponent<({ editor, onItemClick }: TableOfContentsProps) => React.JSX.Element>;
