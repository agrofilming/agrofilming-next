import styles from './index.module.scss';
import { CheckboxForForm } from '@/components/CheckboxForForm';
import { budgetOptions, defaultValues, findOptions, questionData } from '@/components/BriefForm/const';
import { useForm } from 'react-hook-form';
import { IStepperForm } from '@/containers/BriefPage/interface';
import { EmailInput, PhoneInput, TextInput } from '@/components/Input';
import { Select } from '@/components/Select';
import { Button } from '@/components';
import { sendEmail } from '@/utils/sendMail';

export const BriefForm = () => {
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

  const onSubmit = (data: IStepperForm) => {
    sendEmail(data);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>1. ПРО ПРОЄКТ</h2>

        {questionData.map(({ question, checkboxVariants }, index) => (
          <div key={index} className={styles.question}>
            <h3>
              <i>{question}</i>
            </h3>

            <div className={styles.checkboxes}>
              {checkboxVariants.map(({ value, id }) => (
                <CheckboxForForm name={value} control={control} key={id} />
              ))}
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
    </div>
  );
};
