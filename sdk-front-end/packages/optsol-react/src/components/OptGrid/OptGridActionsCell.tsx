import { Icon } from '@mdi/react';
import { IconButton, Tooltip } from '@mui/material';
import { OptGridAction } from '.';
import { useOptTheme } from '../../contexts/theme/themeContext';


interface Props<T extends object> {
  actions?: (OptGridAction<T> | ((rowData: T) => OptGridAction<T>))[];
  data: T;
}

export const OptGridActionsCell = <T extends object>({
  actions,
  data,
}: Props<T>) => {
  const { currentTheme } = useOptTheme();

  return (
    <td className='td-opt' style={{ display: 'flex' }}>
      {actions?.map((action, index) => {
        const isFunction = typeof action === 'function';

        let currentAction = action as OptGridAction<T>;

        if (isFunction) {
          currentAction = (action as (rowData: T) => OptGridAction<T>)(data);
        }

        const color = currentAction.icon.color ?? currentTheme.color;

        let iconButton = (
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
          iconButton = (
            <Tooltip title={currentAction.tooltip}>{iconButton}</Tooltip>
          );
        }

        return iconButton;
      })}
    </td>
  );
};
