import color from 'color';
import React from 'react';
import Select, { ActionMeta, FocusEventHandler, FormatOptionLabelMeta, GroupTypeBase, InputActionMeta, KeyboardEventHandler, MenuPlacement, MenuPosition, NamedProps, OptionTypeBase, StylesConfig, ValueType } from 'react-select';
import { formatGroupLabel, getOptionLabel, getOptionValue } from 'react-select/src/builtins';
import { ThemeConfig } from 'react-select/src/theme';
import { useOptTheme } from '../../contexts/theme/themeContext';
import { optSelectTheme } from './OptSelectTheme';

export interface OptSelectionOption extends OptionTypeBase {
  label: string;
  value: string;
}

//TODO: isso está péssimo, não deve seguir assim
export interface OptSelectProps
  extends NamedProps<{ label: string; value: string }, true | false, GroupTypeBase<OptSelectionOption>> {
  isMulti?: boolean;
  /** Aria label (for assistive tech) */
  'aria-label'?: string;
  /** HTML ID of an element that should be used as the label (for assistive tech) */
  'aria-labelledby'?: string;
  /** Focus the control when it is mounted */
  autoFocus?: boolean;
  /** Remove the currently focused option when the user presses backspace */
  backspaceRemovesValue?: boolean;
  /** Remove focus from the input when the user selects an option (handy for dismissing the keyboard on touch devices) */
  blurInputOnSelect?: boolean;
  /** When the user reaches the top/bottom of the menu, prevent scroll on the scroll-parent  */
  captureMenuScroll?: boolean;
  /** className attribute applied to the outer component */
  className?: string;
  /** classNamePrefix attribute used as a base for inner component classNames */
  classNamePrefix?: string | null;
  /** Close the select menu when the user selects an option */
  closeMenuOnSelect?: boolean;
  /**
   * If `true`, close the select menu when the user scrolls the document/body.
   *
   * If a function, takes a standard javascript `ScrollEvent` you return a boolean:
   *
   * `true` => The menu closes
   *
   * `false` => The menu stays open
   *
   * This is useful when you have a scrollable modal and want to portal the menu out,
   * but want to avoid graphical issues.
   */
  closeMenuOnScroll?: boolean | EventListener;
  /**
   * This complex object includes all the compositional components that are used
   * in `react-select`. If you wish to overwrite a component, pass in an object
   * with the appropriate namespace.
   *
   * If you only wish to restyle a component, we recommend using the `styles` prop
   * instead. For a list of the components that can be passed in, and the shape
   * that will be passed to them, see [the components docs](/api#components)
   */
  controlShouldRenderValue?: boolean;
  /** Delimiter used to join multiple values into a single HTML Input value */
  delimiter?: string;
  /** Clear all values when the user presses escape AND the menu is closed */
  escapeClearsValue?: boolean;
  /** Custom method to filter whether an option should be displayed in the menu */
  filterOption?: ((option: OptSelectionOption, rawInput: string) => boolean) | null;
  /** Formats group labels in the menu as React components */
  formatGroupLabel?: formatGroupLabel<OptSelectionOption, GroupTypeBase<OptSelectionOption>>;
  /** Formats option labels in the menu and control as React components */
  formatOptionLabel?: (option: OptSelectionOption, labelMeta: FormatOptionLabelMeta<OptSelectionOption, boolean>) => React.ReactNode;
  /** Resolves option data to a string to be displayed as the label by components */
  getOptionLabel?: getOptionLabel<OptSelectionOption>;
  /** Resolves option data to a string to compare options and specify value attributes */
  getOptionValue?: getOptionValue<OptSelectionOption>;
  /** Hide the selected option from the menu */
  hideSelectedOptions?: boolean;
  /** The id to set on the SelectContainer component. */
  id?: string;
  /** The value of the search input */
  inputValue?: string;
  /** The id of the search input */
  inputId?: string;
  /** Define an id prefix for the select components e.g. {your-id}-value */
  instanceId?: number | string;
  /** Is the select value clearable */
  isClearable?: boolean;
  /** Is the select disabled */
  isDisabled?: boolean;
  /** Is the select in a state of loading (async) */
  isLoading?: boolean;
  /** Is the select direction right-to-left */
  isRtl?: boolean;
  /** Whether to enable search functionality */
  isSearchable?: boolean;
  /** Async: Text to display when loading options */
  loadingMessage?: (obj: { inputValue: string }) => string | null;
  /** Minimum height of the menu before flipping */
  minMenuHeight?: number;
  /** Maximum height of the menu before scrolling */
  maxMenuHeight?: number;
  /** Whether the menu is open */
  menuIsOpen?: boolean;
  /**
   * Default placement of the menu in relation to the control. 'auto' will flip
   * when there isn't enough space below the control.
   */
  menuPlacement?: MenuPlacement;
  /** The CSS position value of the menu, when "fixed" extra layout management is required */
  menuPosition?: MenuPosition;
  /** Whether the menu should use a portal, and where it should attach */
  menuPortalTarget?: HTMLElement | null;
  /** Whether to block scroll events when the menu is open */
  menuShouldBlockScroll?: boolean;
  /** Whether the menu should be scrolled into view when it opens */
  menuShouldScrollIntoView?: boolean;
  /** Name of the HTML Input (optional - without this, no input will be rendered) */
  name?: string;
  /** Text to display when there are no options */
  noOptionsMessage?: (obj: { inputValue: string }) => string | null;
  /** Handle blur events on the control */
  onBlur?: FocusEventHandler;
  /** Handle change events on the select */
  onChange?: (value: ValueType<OptSelectionOption, boolean>, action: ActionMeta<OptSelectionOption>) => void;
  /** Handle focus events on the control */
  onFocus?: FocusEventHandler;
  /** Handle change events on the input */
  onInputChange?: (newValue: string, actionMeta: InputActionMeta) => void;
  /** Handle key down events on the select */
  onKeyDown?: KeyboardEventHandler;
  /** Handle the menu opening */
  onMenuOpen?: () => void;
  /** Handle the menu closing */
  onMenuClose?: () => void;
  /** Fired when the user scrolls to the top of the menu */
  onMenuScrollToTop?: (event: React.SyntheticEvent<HTMLElement>) => void;
  /** Fired when the user scrolls to the bottom of the menu */
  onMenuScrollToBottom?: (event: React.SyntheticEvent<HTMLElement>) => void;
  /** Allows control of whether the menu is opened when the Select is focused */
  openMenuOnFocus?: boolean;
  /** Allows control of whether the menu is opened when the Select is clicked */
  openMenuOnClick?: boolean;
  /** Array of options that populate the select menu */
  options?: ReadonlyArray<OptSelectionOption>;
  /** Number of options to jump in menu when page{up|down} keys are used */
  pageSize?: number;
  /** Placeholder text for the select value */
  placeholder?: React.ReactNode;
  /** Status to relay to screen readers */
  screenReaderStatus?: (obj: { count: number }) => string;
  /** Style modifier methods */
  styles?: StylesConfig<OptSelectionOption, boolean, GroupTypeBase<OptSelectionOption>>;
  /** Theme modifier method */
  theme?: ThemeConfig;
  /** Sets the tabIndex attribute on the input */
  tabIndex?: string | null;
  /** Select the currently focused option when the user presses tab */
  tabSelectsValue?: boolean;
  /** The value of the select; reflected by the selected option */
  value?: readonly OptSelectionOption[] | OptSelectionOption | null;

  defaultInputValue?: string;
  defaultMenuIsOpen?: boolean;
  defaultValue?: readonly OptSelectionOption[] | OptSelectionOption | null;
}

export const OptSelect = React.forwardRef<Select<OptSelectionOption, boolean>, OptSelectProps>(
  ({ isMulti, ...props }: OptSelectProps, ref) => {
    const { currentTheme } = useOptTheme();
    const { borderRadius, colors, spacing } = optSelectTheme;

    return (
      <Select
        backspaceRemovesValue
        isMulti={isMulti}
        theme={{
          borderRadius,
          spacing,
          colors: {
            ...colors,
            primary: currentTheme.primary,
            primary75: color(currentTheme.primary).lighten(0.25).hex(),
            primary50: color(currentTheme.primary).lighten(0.5).hex(),
            primary25: color(currentTheme.primary).lighten(0.75).hex(),
          },
        }}
        placeholder="Selecione uma opção"
        noOptionsMessage={(a) => 'Sem opções pré-definidas'}
        ref={ref as any}
        {...props}
      />
    );
  },
);
