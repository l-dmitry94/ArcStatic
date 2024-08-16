'use client';

import Button, { ButtonType } from '@/components/Button';
import styles from './form.module.scss';

import { useForm, SubmitHandler } from 'react-hook-form';
import { CustomInput } from '@/components/ContactsPage/CustomInput/CustomInput';
import {
    emailPattern,
    numberPattern,
} from '@/components/ContactsPage/constants';

interface FormValues {
    name: string;
    number: string;
    email: string;
    message: string;
}

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    };

    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CustomInput
                    id={'name'}
                    label={'Name'}
                    register={register}
                    errors={errors}
                />
                <CustomInput
                    label={'Number'}
                    id={'number'}
                    register={register}
                    errors={errors}
                    pattern={numberPattern}
                />
                <CustomInput
                    label={'Email'}
                    id={'email'}
                    errors={errors}
                    register={register}
                    pattern={emailPattern}
                />
                <CustomInput
                    label={'Message'}
                    id={'message'}
                    register={register}
                    errors={errors}
                />
                <div className={styles.buttonWrapper}>
                    <Button
                        text={'Send message'}
                        buttonType={ButtonType.DEFAULT}
                    />
                    <p className="py-[10px] text-center text-[24px] font-thin">
                        or
                    </p>
                </div>
            </form>
            <Button text={'Telegram bot'} buttonType={ButtonType.SECONDARY} />
        </div>
    );
};

export default Form;
