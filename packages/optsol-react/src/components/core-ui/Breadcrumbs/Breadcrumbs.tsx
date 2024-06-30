import { Breadcrumbs as MuiBreadcrumbs, Typography } from '@mui/material';
import { UIMatch, useMatches } from 'react-router-dom';
interface HandleType {
  breadcrumb: (param?: any) => React.ReactNode;
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
    .map((match) => match.handle.breadcrumb(match.data));

  const lastBreadcrumbProps = {
    fontWeight: 'bold',
    color: 'text.primary',
  };

  return (
    <MuiBreadcrumbs separator="›">
      {crumbs.map((breadcrumb, index) => (
        <Typography
          key={index}
          {...(index === crumbs.length - 1 && lastBreadcrumbProps)}
        >
          {breadcrumb}
        </Typography>
      ))}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
