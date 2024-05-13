'use client';

import { useForm } from 'react-hook-form';
import { IStepperForm } from '@/containers/BriefPage/interface';
import styles from './index.module.scss';
import { BriefForm } from '@/components';
import { Contacts } from '@/components/Contacts';

const defaultValues = {
  firstStep: [],
  secondStep: [],
  thirdStep: [],
  fourthStep: [],
  fifthStep: [],
  sixthStep: [],
  seventhStep: [],
};

export const BriefPage = () => {
  const {
    formState: { errors },
  } = useForm<IStepperForm>({
    mode: 'onChange',
    defaultValues,
  });
  return (
    <div className={styles.container}>
      <div className={styles['left-block']}>
        <h1>Настав час розібрати по зернах ваш проєкт та познайомитись з командою, яка втілить вашу ідею у відео</h1>

        <Contacts />
      </div>

      <BriefForm />
    </div>
  );
};
