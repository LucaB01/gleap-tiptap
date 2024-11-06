import React from 'react';
import { EmojiListProps } from '../types';
import { SuggestionKeyDownProps } from '@tiptap/suggestion';
declare const EmojiList: React.ForwardRefExoticComponent<EmojiListProps & React.RefAttributes<{
    onKeyDown: (evt: SuggestionKeyDownProps) => boolean;
}>>;
export default EmojiList;
