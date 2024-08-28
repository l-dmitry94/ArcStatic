export const scrollToSection = (e: Event, isMobile: boolean) => {
    e.preventDefault();

    const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute(
        'href'
    );
    if (targetId && targetId !== '#') {
        const targetElement = document.querySelector<HTMLElement>(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop;
            const scrollOffset = isMobile ? 50 : 150;
            window.scrollTo({
                top: offsetTop - scrollOffset,
                behavior: 'smooth',
            });
        }
    }
};
