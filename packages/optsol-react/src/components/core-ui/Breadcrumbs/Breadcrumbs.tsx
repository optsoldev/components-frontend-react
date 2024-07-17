import { Breadcrumbs as MuiBreadcrumbs, Typography } from '@mui/material';
import { UIMatch, useMatches } from 'react-router-dom';

import { Link } from '../Link';
interface HandleType {
  breadcrumb: (param?: any) => React.ReactNode;
  color?: string;
  path?: string;
}

const Breadcrumbs = () => {
  const matches = useMatches();

  const hasBreadcrumbs = (
    match: UIMatch<unknown, unknown>,
  ): match is UIMatch<unknown, HandleType> => {
    if (match.handle === null) return false;
    if (typeof match.handle !== 'object') return false;
    if (!('breadcrumb' in match.handle)) return false;
    return true;
  };

  const crumbs = matches
    // first get rid of any matches that don't have handle and crumb
    .filter(hasBreadcrumbs)
    // now map them into an array of elements, passing the loader
    // data to each one
    .map((match) => ({
      breadcrumb: match.handle.breadcrumb(match.data),
      color: match.handle.color,
      path: match.handle.path,
    }));

  const lastBreadcrumbProps = {
    fontWeight: 'bold',
    color: 'text.primary',
  };

  return (
    <MuiBreadcrumbs separator="›">
      {crumbs.map((breadcrumb, index) => {
        if (breadcrumb.path && index !== crumbs.length)
          return (
            <Link
              key={breadcrumb.path}
              to={breadcrumb.path ?? '#'}
              style={{ textDecoration: 'none' }}
            >
              <Typography
                key={index}
                fontWeight={600}
                color={breadcrumb.color}
                {...(index === crumbs.length - 1 && lastBreadcrumbProps)}
              >
                {breadcrumb.breadcrumb}
              </Typography>
            </Link>
          );

        return (
          <Typography
            key={index}
            color={breadcrumb.color}
            {...(index === crumbs.length - 1 && lastBreadcrumbProps)}
          >
            {breadcrumb.breadcrumb}
          </Typography>
        );
      })}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
