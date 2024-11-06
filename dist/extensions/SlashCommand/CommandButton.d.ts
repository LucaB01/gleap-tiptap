/// <reference types="react" />
import { icons } from 'lucide-react';
export type CommandButtonProps = {
    active?: boolean;
    description: string;
    icon: keyof typeof icons;
    onClick: () => void;
    title: string;
};
export declare const CommandButton: import("react").ForwardRefExoticComponent<CommandButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
