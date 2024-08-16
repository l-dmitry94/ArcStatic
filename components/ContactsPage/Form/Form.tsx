'use client';

import Button, { ButtonType } from '@/components/Button';
import styles from './form.module.scss';

import { useForm, SubmitHandler } from 'react-hook-form';
import { CustomInput } from '@/components/ContactsPage/CustomInput/CustomInput';
import {
    emailPattern,
    numberPattern,
} from '@/components/ContactsPage/constants';
import useTranslations from '@/hooks/useTranslate';

interface FormValues {
    name: string;
    number: string;
    email: string;
    message: string;
}

const Form = () => {
    const t = useTranslations('Contacts');
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
                    label={t('form_name')}
                    register={register}
                    errors={errors}
                />
                <CustomInput
                    label={t('form_number')}
                    id={'number'}
                    register={register}
                    errors={errors}
                    pattern={numberPattern}
                />
                <CustomInput
                    label={t('form_email')}
                    id={'email'}
                    errors={errors}
                    register={register}
                    pattern={emailPattern}
                />
                <CustomInput
                    label={t('form_message')}
                    id={'message'}
                    register={register}
                    errors={errors}
                />
                <div className={styles.buttonWrapper}>
                    <Button
                        text={t('btn_send')}
                        buttonType={ButtonType.DEFAULT}
                    />
                    <p className="py-[10px] text-center text-[24px] font-thin">
                        {t('or')}
                    </p>
                </div>
            </form>
            <Button text={t('tg_bot')} buttonType={ButtonType.SECONDARY} />
        </div>
    );
};

export default Form;
