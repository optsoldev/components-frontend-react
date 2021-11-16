import { mdiChevronRight } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useBreadcrumb } from '../../contexts/breadcrumb/breadcrumbContext';
import { BreadcrumbDictionary } from '../../contexts/breadcrumb/breadcrumbState';
import { useOptTheme } from '../../contexts/theme/themeContext';
import * as S from './styles';

type BreadcrumbComposition = {
  route: string;
  name: string | null;
  link: string;
};

function generateBreadcrumbComposition(
  pathname: string,
  originalDictionary: BreadcrumbDictionary,
): BreadcrumbComposition[] {
  const dictionary = originalDictionary.map((d) => ({
    ...d,
    taken: false,
  }));

  const breadcrumb = pathname
    .split('/')
    .filter((x) => x)
    .map((s, index) => {
      let name: string | null = s;

      while (name.indexOf('-') > 0) {
        name = name.replace('-', ' ');
      }

      name = name
        .replace(/([A-Z])/g, ' $1')
        .split(' ')
        .map((t) =>
          t.replace(/^./, (str) => {
            return str.toUpperCase();
          }),
        )
        .join(' ');

      const link = pathname
        .split('/')
        .filter((_, i) => i <= index + 1)
        .join('/');

      const dictionaryOccurrences = dictionary.filter(
        (d) => !d.taken && (d.key.toLowerCase() === s.toLowerCase() || d.key.toLowerCase() === name?.toLowerCase()),
      );

      if (dictionaryOccurrences.length > 0) {
        dictionaryOccurrences[0].taken = true;
        name = dictionaryOccurrences[0].value;
      }

      return {
        route: s,
        name,
        link,
      };
    });

  if (breadcrumb.length === 0) {
    let name: string | null = 'Home';

    const dictionaryOccurrences = dictionary.filter(
      (d) => !d.taken && (d.key.toLowerCase() === 'home' || d.key.toLowerCase() === '/'),
    );

    if (dictionaryOccurrences.length > 0) {
      dictionaryOccurrences[0].taken = true;
      name = dictionaryOccurrences[0].value;
    }

    breadcrumb.push({
      route: '/',
      name,
      link: '/',
    });
  }

  return breadcrumb;
}

let currentLocationPathname = '';

export const OptBreadcrumb = () => {
  const location = useLocation();
  const { currentTheme } = useOptTheme();

  const {
    state: { dictionary },
    resetValues,
  } = useBreadcrumb();

  const breadcrumb = generateBreadcrumbComposition(location.pathname, dictionary);

  useEffect(() => {
    // fiz sem estado pra não gerar re-render
    currentLocationPathname = location.pathname;
    return () => {
      if (location.pathname !== currentLocationPathname) {
        resetValues();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <S.BreadcrumbContainer>
      {breadcrumb.map((section, index) => {
        if (section.name) {
          return (
            <React.Fragment key={index}>
              <S.BreadcrumbNavLink to={section.link}>
                <span>{section.name}</span>
              </S.BreadcrumbNavLink>

              {index >= 0 && index < breadcrumb.length - 1 && (
                <span>
                  <Icon size={0.6} path={mdiChevronRight} color={currentTheme.breadcrumb.separator} />
                </span>
              )}
            </React.Fragment>
          );
        }
        return <React.Fragment key={index} />;
      })}
    </S.BreadcrumbContainer>
  );
};
