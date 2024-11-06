export type ToggleProps = {
    active?: boolean;
    onChange: (active: boolean) => void;
    size?: 'small' | 'large';
};
export declare const Toggle: ({ onChange, active, size }: ToggleProps) => import("react/jsx-runtime").JSX.Element;
