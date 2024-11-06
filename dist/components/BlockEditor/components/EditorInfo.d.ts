/// <reference types="react" />
import { WebSocketStatus } from '@hocuspocus/provider';
import { EditorUser } from '../types';
export type EditorInfoProps = {
    characters: number;
    words: number;
    collabState: WebSocketStatus;
    users: EditorUser[];
};
export declare const EditorInfo: import("react").MemoExoticComponent<({ characters, collabState, users, words }: EditorInfoProps) => import("react").JSX.Element>;
