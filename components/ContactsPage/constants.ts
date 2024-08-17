export interface PatternProps {
    value: RegExp;
    message: string;
}

export const emailPattern = {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Invalid email address',
};

export const numberPattern = {
    value: /^(\+?38)?0\d{9}$/,
    message: 'Invalid phone number',
};
