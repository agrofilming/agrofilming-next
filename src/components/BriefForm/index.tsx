'use client';

import styles from './index.module.scss';
import { CheckboxForForm } from '@/components/CheckboxForForm';
import { budgetOptions, defaultValues, findOptions, questionData } from '@/components/BriefForm/const';
import { useForm } from 'react-hook-form';
import { IStepperForm } from '@/containers/BriefPage/interface';
import { EmailInput, PhoneInput, TextInput } from '@/components/Input';
import { Select } from '@/components/Select';
import { Button } from '@/components';
import { useState } from 'react';
import { Modal } from '@/components/ModalNew';

export const BriefForm = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IStepperForm>({
    mode: 'onChange',
    defaultValues,
  });

  const onSubmit = async (data: IStepperForm) => {
    const res = await fetch('/api/sendgrid', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    console.log(data);
    if (res.status === 200) {
      setOpen(true);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>1. ПРО ПРОЄКТ</h2>

        {questionData.map(({ question, checkboxVariants, checkBoxName }, index) => (
          <div key={index} className={styles.question}>
            <h3>
              <i>{question}</i>
            </h3>

            <div className={styles.checkboxes}>
              <CheckboxForForm name={checkBoxName} options={checkboxVariants} control={control} />
            </div>
          </div>
        ))}
        <h2>2. ПРО ВАС</h2>

        <TextInput name={'clientName'} register={register} errorMessage={errors.clientName?.message} />

        <EmailInput register={register} errorMessage={errors.email?.message} />

        <PhoneInput control={control} errorMessage={errors.phone?.message} />

        <Select name={'budget'} options={budgetOptions} control={control} watch={watch} />

        <Select name={'fromWhere'} options={findOptions} control={control} watch={watch} />

        <Button type={'submit'} variant={'contained'} width={'100%'} height={'50px'}>
          Відправити
        </Button>
      </form>

      <Modal open={open} onCancel={() => setOpen(false)}>
        <div className={styles['modal-container']}>
          <h2>Дякуємо за звернення!</h2>
          <p>Наш менеджер зв&apos;яжеться з вами найближчим часом</p>
        </div>
      </Modal>
    </div>
  );
};
