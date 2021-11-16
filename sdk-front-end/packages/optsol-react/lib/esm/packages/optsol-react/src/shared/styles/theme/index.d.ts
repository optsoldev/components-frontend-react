export interface OptBasicTheme {
    style: 'standard' | 'soft';
    primary: string;
    primaryContrast: string;
    secondary: string;
    secondaryContrast: string;
}
export interface OptTheme {
    light?: OptBasicTheme;
    dark?: OptBasicTheme;
}
export interface OptFullTheme {
    primary: string;
    primaryContrast: string;
    secondary: string;
    secondaryContrast: string;
    background: string;
    color: string;
    divider: string;
    scrollbar: {
        background: string;
        topColor: string;
        bottomColor: string;
        shadowColor: string;
        hover: {
            topCollor: string;
            bottomCollor: string;
        };
    };
    breadcrumb: {
        color: string;
        hover: string;
        separator: string;
    };
    appBar: {
        background: string;
        color: string;
        boxShadowColor?: string;
        noBoxShadow?: boolean;
        side?: {
            divider: string;
            borderColor: string;
            link: {
                color: string;
                active: {
                    color: string;
                    background: string;
                };
                hover: {
                    color: string;
                    background: string;
                };
            };
        };
        menuButton: {
            color: string;
            hover: {
                color: string;
                background: string;
            };
        };
        avatar: {
            background: string;
            color: string;
        };
    };
    toolbar: {
        background: string;
        color: string;
    };
    sidebar: {
        background: string;
        color: string;
        divider: string;
        link: {
            color: string;
            active: {
                color: string;
                background: string;
            };
            hover: {
                color: string;
                background: string;
            };
        };
    };
    drawer: {
        docked: {
            borderColor: string;
        };
        close: {
            color: string;
            background: string;
        };
        versionColor: string;
        background: string;
        color: string;
        divider: string;
        link: {
            color: string;
            active: {
                color: string;
                background: string;
            };
            hover: {
                color: string;
                background: string;
            };
        };
    };
    inputs: {
        outline: string;
        outlineFocus: string;
        outlineHover: string;
    };
}
export declare function transformTheme(t: OptBasicTheme): OptFullTheme;
