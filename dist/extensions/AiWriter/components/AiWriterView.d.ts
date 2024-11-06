/// <reference types="react" />
import { NodeViewProps } from '@tiptap/react';
import { AiTone } from '@/components/BlockEditor/types';
export interface DataProps {
    text: string;
    tone?: AiTone;
    textUnit?: string;
    textLength?: string;
}
export declare const AiWriterView: ({ editor, node, getPos, deleteNode }: NodeViewProps) => import("react").JSX.Element;
