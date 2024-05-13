import styles from './index.module.scss';
import { CheckboxForForm } from '@/components/CheckboxForForm';
import { budgetOptions, defaultValues, questionData } from '@/components/BriefForm/const';
import { useForm } from 'react-hook-form';
import { IStepperForm } from '@/containers/BriefPage/interface';
import { EmailInput, PhoneInput, TextInput } from '@/components/Input';
import { Select } from '@/components/Select';
import { Button } from '@/components';

export const BriefForm = () => {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useForm<IStepperForm>({
    mode: 'onChange',
    defaultValues,
  });
  return (
    <div className={styles.container}>
      <form>
        <h2>1. Про проєкт</h2>

        {questionData.map(({ question, checkboxVariants }, index) => (
          <div key={index} className={styles.question}>
            <h3>{question}</h3>

            <div className={styles.checkboxes}>
              {checkboxVariants.map(({ value, id }) => (
                <CheckboxForForm name={value} control={control} key={id} />
              ))}
            </div>
          </div>
        ))}
        <h2>2. Про проєкт</h2>

        <TextInput name={'clientName'} register={register} />

        <EmailInput register={register} errorMessage={undefined} />

        <PhoneInput control={control} errorMessage={undefined} />

        <Select name={'budget'} options={budgetOptions} control={control} watch={watch} />

        <Select name={'fromWhere'} options={budgetOptions} control={control} watch={watch} />

        <Button variant={'contained'} width={'100%'} height={'50px'}>
          Відправити
        </Button>
      </form>
    </div>
  );
};
