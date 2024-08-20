import { useTranslations as useNextIntlTranslations } from 'next-intl';

type TranslationNamespace =
    | 'Header'
    | 'Footer'
    | 'Contacts'
    | 'Hero'
    | 'Proposal'; // додавати розділи зі словника

const useTranslations = (namespace: TranslationNamespace) => {
    // при виклику передати розділ для секції
    const t = useNextIntlTranslations(namespace);
    return t;
};

export default useTranslations;
