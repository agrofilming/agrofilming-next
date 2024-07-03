import { Modal as AntdModal } from 'antd';
import { CSSProperties, FC, useCallback } from 'react';

import { IModalProps } from './interfaces';
import { CloseIcon } from '@/assets/icons';

export const Modal: FC<IModalProps> = ({
  children,
  open,
  onCancel,
  width = '410px',
  padding = '30px 24px',
  showClose = false,
  destroyOnClose = true,
}) => {
  const handleClose = useCallback((e: React.SyntheticEvent<EventTarget>) => {
    e.stopPropagation();
    onCancel();
  }, []);

  return (
    <AntdModal
      open={open}
      width="fit-content"
      onCancel={handleClose}
      destroyOnClose={destroyOnClose}
      closable={false}
      footer={null}
      centered
    >
      {/*
        onCLick is used to prevent event propagation outside of the modal and help to avoid
        triggering navigation or other unintended side effects (e.g., clicks on buttons or links)
      */}
      <div
        onClick={e => e.stopPropagation()}
        className="modal-container"
        style={{ '--width': width, '--padding': padding } as CSSProperties}
      >
        {showClose && <CloseIcon className="close-icon" onClick={handleClose} />}

        {children}
      </div>
    </AntdModal>
  );
};
