export const scrollToSection = (e: Event) => {
    e.preventDefault();

    const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute(
        'href'
    );
    if (targetId && targetId !== '#') {
        const targetElement = document.querySelector<HTMLElement>(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        }
    }
};
