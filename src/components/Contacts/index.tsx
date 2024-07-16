import styles from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import phone from '@/assets/images/phone.png';
import mail from '@/assets/images/mail.png';

export const Contacts = () => (
  <div className={styles.contacts}>
    <Link className={styles['contacts-item']} href="tel:+380666667098">
      <Image src={phone} alt="phone" />
      <div>
        <p>Менеджер по роботі з клієнтами</p>
        <span>+38 (066) 666-70-98</span>
      </div>
    </Link>
    <Link className={styles['contacts-item']} href="mailto:producer@agrofilming.com">
      <Image src={mail} alt="mail" />
      <p>producer@agrofilming.com</p>
    </Link>
  </div>
);
