import { FC } from 'react';
import { Controller, useController } from 'react-hook-form';
import { ICheckboxForFormProps } from './interfaces';
import { Checkbox } from 'antd';

export const CheckboxForForm: FC<ICheckboxForFormProps> = ({ name, options, control, img, disabled = false }) => {
  const {
    field: { onChange },
  } = useController({
    name,
    control,
    defaultValue: [],
  });

  return (
    <Controller
      name={name}
      control={control}
      render={() => (
        <Checkbox.Group options={options} onChange={checkedValue => onChange(checkedValue)} disabled={disabled} />
      )}
    />
  );
};
