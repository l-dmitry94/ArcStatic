import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#fdfdfd',
                secondary: '#b773ce',
            },
            backgroundImage: {
                linear: 'linear-gradient(63deg, #000 49.82%, #2442ab 100%)',
            },
            lineHeight: {
                tight: '1.3',
            },
            screens: {
                mobile: '375px',
                tablet: '768px',
                notebook: '1280px',
                desktop: '1440px',
            },
        },
    },
    plugins: [],
};
export default config;
