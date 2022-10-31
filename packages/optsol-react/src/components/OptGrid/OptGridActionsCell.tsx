/* eslint-disable react/no-array-index-key */
import { Icon } from '@mdi/react';
import { IconButton, Tooltip } from '@mui/material';
import { useOptTheme } from '../../contexts/theme/themeContext';
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
    <td className="td-opt" style={{ display: 'flex' }}>
      {actions?.map((action, index) => {
        const isFunction = typeof action === 'function';

        let currentAction: OptGridAction<T>;

        if (isFunction) currentAction = action(data);
        else currentAction = action;

        const color = currentAction.icon.color ?? currentTheme.color;

        const iconButton = (
          <IconButton
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              currentAction.onClick(e, data);
            }}
          >
            <Icon size={1} path={currentAction.icon.path} color={color} />
          </IconButton>
        );

        if (currentAction.tooltip) {
          return (
            <Tooltip title={currentAction.tooltip} key={index}>
              {iconButton}
            </Tooltip>
          );
        }

        return iconButton;
      })}
    </td>
  );
}
