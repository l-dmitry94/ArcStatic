export interface NavMenuProps {
    isVisible?: boolean;
    toggleDrawer?: () => void;
}

export interface NavItem {
    label: string;
    href: string;
}
