import { SelectChangeEvent } from '@mui/material';

export interface LangSwithMobileProps {
    lang: 'ua' | 'en';
    handleChange: (event: SelectChangeEvent) => void;
}
