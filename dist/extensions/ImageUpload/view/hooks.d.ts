import { DragEvent } from 'react';
export declare const useUploader: ({ onUpload }: {
    onUpload: (url: string) => void;
}) => {
    loading: boolean;
    uploadFile: (file: File) => Promise<void>;
};
export declare const useFileUpload: () => {
    ref: import("react").RefObject<HTMLInputElement>;
    handleUploadClick: () => void;
};
export declare const useDropZone: ({ uploader }: {
    uploader: (file: File) => void;
}) => {
    isDragging: boolean;
    draggedInside: boolean;
    onDragEnter: () => void;
    onDragLeave: () => void;
    onDrop: (e: DragEvent<HTMLDivElement>) => void;
};
