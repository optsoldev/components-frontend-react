interface CustomToolbarProps {
    clearmargin: boolean | 1 | 0;
    background?: string;
    $noborder?: boolean;
    $nopadding?: boolean;
}
export declare const CustomToolbar: import("styled-components").StyledComponent<import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").ToolbarTypeMap<{}, "div">>, import("styled-components").DefaultTheme, CustomToolbarProps, never>;
export declare const CustomIconButton: import("styled-components").StyledComponent<import("@mui/material").ExtendButtonBase<import("@mui/material").IconButtonTypeMap<{}, "button">>, import("styled-components").DefaultTheme, {}, never>;
export declare const ActionsContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Title: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, {}, never>;
declare type CustomButtonProps = {
    textcolor: string;
    hover: {
        textcolor: string;
    };
};
export declare const CustomButton: import("styled-components").StyledComponent<import("@mui/material").ExtendButtonBase<import("@mui/material").ButtonTypeMap<{}, "button">>, import("styled-components").DefaultTheme, CustomButtonProps, never>;
export {};
