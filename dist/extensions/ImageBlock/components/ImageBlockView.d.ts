import { Node } from '@tiptap/pm/model';
import { Editor } from '@tiptap/react';
interface ImageBlockViewProps {
    editor: Editor;
    getPos: () => number;
    node: Node;
    updateAttributes: (attrs: Record<string, string>) => void;
}
export declare const ImageBlockView: (props: ImageBlockViewProps) => import("react/jsx-runtime").JSX.Element;
export default ImageBlockView;
