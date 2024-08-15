export interface PatternProps {
    value: RegExp;
    message: string;
}

export const emailPattern = {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Invalid email address',
};

export const numberPattern = {
    value: /^\+?[1-9]\d{1,14}$/,
    message: 'Invalid phone number',
};
