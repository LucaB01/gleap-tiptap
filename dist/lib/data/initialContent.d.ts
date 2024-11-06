export declare const initialContent: {
    type: string;
    content: ({
        type: string;
        attrs: {
            textAlign: string;
            level: number;
            class?: undefined;
            language?: undefined;
            src?: undefined;
            width?: undefined;
            align?: undefined;
        };
        content: ({
            type: string;
            attrs: {
                name: string;
            };
            text?: undefined;
        } | {
            type: string;
            text: string;
            attrs?: undefined;
        })[];
    } | {
        type: string;
        attrs: {
            class: null;
            textAlign: string;
            level?: undefined;
            language?: undefined;
            src?: undefined;
            width?: undefined;
            align?: undefined;
        };
        content: ({
            type: string;
            text: string;
            marks?: undefined;
        } | {
            type: string;
            marks: {
                type: string;
                attrs: {
                    href: string;
                    target: string;
                    class: null;
                };
            }[];
            text: string;
        })[];
    } | {
        type: string;
        attrs: {
            language: null;
            textAlign?: undefined;
            level?: undefined;
            class?: undefined;
            src?: undefined;
            width?: undefined;
            align?: undefined;
        };
        content: {
            type: string;
            text: string;
        }[];
    } | {
        type: string;
        content: {
            type: string;
            content: {
                type: string;
                attrs: {
                    class: null;
                    textAlign: string;
                };
                content: ({
                    type: string;
                    text: string;
                    marks?: undefined;
                } | {
                    type: string;
                    marks: {
                        type: string;
                        attrs: {
                            fontSize: string;
                            fontFamily: null;
                            color: null;
                        };
                    }[];
                    text: string;
                } | {
                    type: string;
                    marks: {
                        type: string;
                    }[];
                    text: string;
                } | {
                    type: string;
                    marks: {
                        type: string;
                        attrs: {
                            fontSize: null;
                            fontFamily: string;
                            color: null;
                        };
                    }[];
                    text: string;
                } | {
                    type: string;
                    marks: {
                        type: string;
                        attrs: {
                            fontSize: null;
                            fontFamily: null;
                            color: string;
                        };
                    }[];
                    text: string;
                } | {
                    type: string;
                    marks: {
                        type: string;
                        attrs: {
                            color: string;
                        };
                    }[];
                    text: string;
                })[];
            }[];
        }[];
        attrs?: undefined;
    } | {
        type: string;
        attrs: {
            src: string;
            width: string;
            align: string;
            textAlign?: undefined;
            level?: undefined;
            class?: undefined;
            language?: undefined;
        };
        content?: undefined;
    } | {
        type: string;
        attrs: {
            class: null;
            textAlign: string;
            level?: undefined;
            language?: undefined;
            src?: undefined;
            width?: undefined;
            align?: undefined;
        };
        content?: undefined;
    })[];
};
