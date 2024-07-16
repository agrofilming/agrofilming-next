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
