import { Grid, GridProps, Paper } from '@mui/material';
import { PropsWithChildren, forwardRef } from 'react';

const CardHeader = ({ children, ...props }: PropsWithChildren<GridProps>) => {
  return (
    <Grid
      item
      xs={1}
      minWidth={1}
      borderRadius={0}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      {...props}
    >
      {children}
    </Grid>
  );
};

const CardContent = forwardRef<HTMLDivElement, PropsWithChildren<GridProps>>(
  ({ children, ...props }, ref) => {
    return (
      <Grid
        ref={ref}
        xs
        item
        minWidth={1}
        bgcolor="transparent"
        flexDirection="column"
        justifyContent="start"
        {...props}
      >
        {children}
      </Grid>
    );
  }
);
interface CardProps extends GridProps {
  showHeaderDivider?: boolean;
}

const Card = ({ children, ...props }: PropsWithChildren<CardProps>) => {
  return (
    <Grid
      container
      flex={1}
      borderRadius={0}
      flexDirection="column"
      component={Paper}
      {...props}
    >
      {children}
    </Grid>
  );
};

CardContent.displayName = 'CardContent';

Card.Header = CardHeader;
Card.Content = CardContent;

export default Card;
