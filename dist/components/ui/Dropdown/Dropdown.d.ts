import React from 'react';
export declare const DropdownCategoryTitle: ({ children }: {
    children: React.ReactNode;
}) => React.JSX.Element;
export declare const DropdownButton: React.ForwardRefExoticComponent<{
    children: React.ReactNode;
    isActive?: boolean | undefined;
    onClick?: (() => void) | undefined;
    disabled?: boolean | undefined;
    className?: string | undefined;
} & React.RefAttributes<HTMLButtonElement>>;
