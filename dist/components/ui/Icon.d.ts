/// <reference types="react" />
import { icons } from 'lucide-react';
export type IconProps = {
    name: keyof typeof icons;
    className?: string;
    strokeWidth?: number;
};
export declare const Icon: import("react").MemoExoticComponent<({ name, className, strokeWidth }: IconProps) => import("react").JSX.Element | null>;
