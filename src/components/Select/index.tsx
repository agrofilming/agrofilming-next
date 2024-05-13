'use client';
import { ConfigProvider, Empty, Select as AntdSelect } from 'antd';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import cn from 'classnames';
import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Controller } from 'react-hook-form';

import styles from './index.module.scss';
import { ISelectProps, TFieldName } from './interfaces';

export const Select: FC<ISelectProps> = ({
  name,
  options,
  control,
  errorMessage,
  watch,
  disabled = false,
  required = true,
  allowClear = false,
  filter = true,
  loading = false,
  emptyContent,
  onSearch,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const fieldName = useMemo(() => name.split('.').at(-1) as TFieldName, [name]); // handle fieldName for translate, because can be dynamic

  const handleFilterOption = useCallback(
    (inputValue: string, option: { label: string; value: string } | undefined) =>
      option ? option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1 : false,
    [],
  );

  useEffect(() => {
    return dropdownOpen ? disableBodyScroll(ref.current!) : enableBodyScroll(ref.current!);
  }, [dropdownOpen]);

  return (
    <>
      {/* fix close modal, if click outside select */}
      <div className={cn(styles.backdrop, { [styles.mount]: dropdownOpen })} />

      <div ref={ref} className={cn(styles.container, { [styles.error]: errorMessage })}>
        <Controller
          name={name}
          control={control}
          rules={{ required: { value: required, message: 'Обов`язкове поле' } }}
          render={({ field }) => (
            <ConfigProvider renderEmpty={() => emptyContent || <Empty description={'Пусто...'} />}>
              <AntdSelect
                allowClear={allowClear}
                open={dropdownOpen}
                onDropdownVisibleChange={open => {
                  setDropdownOpen(open);
                  if (onSearch && !open) onSearch('');
                }}
                showSearch
                onSearch={value => onSearch && onSearch(value)}
                onClear={() => onSearch && onSearch('')}
                placeholder={fieldName}
                status={errorMessage && 'error'}
                options={options}
                filterOption={filter && handleFilterOption}
                style={{ width: '100%' }}
                loading={loading}
                disabled={disabled}
                {...field}
                value={watch(name)}
              />
            </ConfigProvider>
          )}
        />
      </div>
    </>
  );
};
