'use client';

import { useForm } from 'react-hook-form';
import { IStepperForm } from '@/containers/BriefPage/interface';
import styles from './index.module.scss';
import { BriefForm } from '@/components';
import Link from 'next/link';
import { MailIcon, PhoneIcon } from '@/assets/icons';

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
        <h1>Тож, розберемо по зернах Ваш проєкт :)</h1>
        <h2>
          Настав час познайомитись з командою,
          <br /> яка втілить Вашу ідею у відео
        </h2>

        <div className={styles.contacts}>
          <Link className={styles['contacts-item']} href="tel:+380688880710">
            <p>Менеджер по роботі з клієнтами</p>
            <div>
              <PhoneIcon />
              <span>+38 (068) 888-07-10</span>
            </div>
          </Link>
          <Link className={styles['contacts-item']} href="mailto:producer@agrofilming.com">
            <p>Написати листа</p>
            <div>
              <MailIcon />
              <span>producer@agrofilming.com</span>
            </div>
          </Link>
        </div>
      </div>

      <BriefForm />
    </div>
  );
};
