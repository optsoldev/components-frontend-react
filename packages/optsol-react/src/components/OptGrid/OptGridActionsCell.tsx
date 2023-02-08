/* eslint-disable react/no-array-index-key */
import { Icon } from '@mdi/react';
import { IconButton, Tooltip } from '@mui/material';

import { useOptTheme } from '../../contexts/theme/themeContext';
import { ColorPalette } from '../../shared/styles/colors';

import { OptGridAction } from './@types';

interface Props<T extends object> {
  actions?: (OptGridAction<T> | ((rowData: T) => OptGridAction<T>))[];
  data: T;
}

export function OptGridActionsCell<T extends object>({
  actions,
  data,
}: Props<T>) {
  const { currentTheme } = useOptTheme();

  return (
    <td className="td-opt">
      <div style={{ display: 'flex' }}>
        {actions?.map((_action, index) => {
          const isFunction = typeof _action === 'function';

          let action: OptGridAction<T>;

          if (isFunction) action = _action(data);
          else action = _action;

          let color = action.icon.color ?? currentTheme.color;
          color = action.disabled ? ColorPalette.gray4 : color;

          const iconButton = (
            <IconButton
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                action.onClick(e, data);
              }}
              disabled={action.disabled}
            >
              <Icon size={1} path={action.icon.path} color={color} />
            </IconButton>
          );

          if (action.tooltip) {
            return (
              <Tooltip title={action.tooltip} key={index}>
                {iconButton}
              </Tooltip>
            );
          }

          return iconButton;
        })}
      </div>
    </td>
  );
}
