'use client';

import Button, { ButtonType } from '@/components/Button';
import styles from './form.module.scss';

import { useForm, SubmitHandler } from 'react-hook-form';

interface FormValues {
    name: string;
    number: string;
    email: string;
    message: string;
}

export interface FormProps {}

export const Form = ({}: FormProps) => {
    const { register, handleSubmit } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.fieldWrapper}>
                <label htmlFor="name">Name</label>
                <input
                    className={styles.input}
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                />
            </div>

            <div className={styles.fieldWrapper}>
                <label htmlFor="number">Number</label>
                <input
                    className={styles.input}
                    type="text"
                    id="number"
                    {...register('number', { required: 'Number is required' })}
                />
            </div>
            <div className={styles.fieldWrapper}>
                <label htmlFor="email">Email</label>
                <input
                    className={styles.input}
                    type="text"
                    id="email"
                    {...register('email', { required: 'Email is required' })}
                />
            </div>
            <div className={styles.fieldWrapper}>
                <label htmlFor="message">Message</label>
                <textarea
                    className={styles.input}
                    {...register('message', { required: 'Email is required' })}
                />
            </div>
            <div className={styles.buttonWrapper}>
                <Button text={'Send message'} buttonType={ButtonType.DEFAULT} />
                <Button
                    text={'Telegram bot'}
                    buttonType={ButtonType.SECONDARY}
                />
            </div>
        </form>
    );
};
