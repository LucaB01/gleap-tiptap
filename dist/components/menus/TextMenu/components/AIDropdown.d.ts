/// <reference types="react" />
import type { Language } from '@/extensions/Ai';
export type AIDropdownProps = {
    onSimplify: () => void;
    onFixSpelling: () => void;
    onMakeShorter: () => void;
    onMakeLonger: () => void;
    onEmojify: () => void;
    onTldr: () => void;
    onTranslate: (language: Language) => void;
    onTone: (tone: string) => void;
    onCompleteSentence: () => void;
};
export declare const AIDropdown: ({ onCompleteSentence, onEmojify, onFixSpelling, onMakeLonger, onMakeShorter, onSimplify, onTldr, onTone, onTranslate, }: AIDropdownProps) => import("react").JSX.Element;
