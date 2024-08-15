import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';

import styles from '@/components/ContactsPage/Form/form.module.scss';
import { PatternProps } from '@/components/ContactsPage/constants';

export interface CustomInputProps<T extends Record<string, any>> {
    label: string;
    id: Path<T>;
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
    pattern?: PatternProps;
}

export const CustomInput = <T extends Record<string, any>>({
    id,
    register,
    errors,
    label,
    pattern,
}: CustomInputProps<T>) => {
    const errorMessage = errors[id]?.message as string;

    return (
        <div className={styles.fieldWrapper}>
            <label className={styles.label} htmlFor={String(id)}>
                {String(label)}
            </label>
            <input
                aria-invalid={errors[id] ? 'true' : 'false'}
                className={styles.input}
                id={String(id)}
                {...register(id, {
                    required: `${String(label)} is required`,
                    pattern: pattern,
                })}
            />
            {errors[id] && (
                <span className={styles.spanError}>{errorMessage}</span>
            )}
        </div>
    );
};
