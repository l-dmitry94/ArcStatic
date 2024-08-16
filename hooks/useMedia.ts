import { useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useMedia = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
    const isNotebook =
        useMediaQuery({ query: '(min-width: 1280px)' }) && !isDesktop;
    const isTablet =
        useMediaQuery({ query: '(min-width: 768px)' }) &&
        !isDesktop &&
        !isNotebook;
    const isMobile = !isTablet && !isDesktop && !isNotebook;

    return useMemo(
        () => ({ isMobile, isTablet, isDesktop, isNotebook }),
        [isMobile, isTablet, isDesktop, isNotebook]
    );
};
