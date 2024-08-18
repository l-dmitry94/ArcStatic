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
                violet: '#5A2E70',
                ligthViolet: '#B069C7',
            },
            backgroundImage: {
                linear: 'linear-gradient(63deg, #000 49.82%, #2442ab 100%)',
                buttonBG:
                    'linear-gradient(200deg, #b069c7 21.99%, #5a2e70 60.72%, #1f1027 91.9%)',
                projectBg:
                    'linear-gradient(180deg, #000 3.66%, rgba(0, 0, 0, 0) 60.48%, #000 100%)',
                projectLink:
                    'linear-gradient(180deg, #b069c7 0%, #dfabf2 100%)',
            },
            lineHeight: {
                tight: '1.3',
            },
            fontFamily: {
                riviera: ['AltRiviera', 'sans-serif'],
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
