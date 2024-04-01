import cn from "classnames";
import {
  FC,
  ReactNode,
  ReactPortal,
  SyntheticEvent,
  useLayoutEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";

import styles from "./index.module.scss";

export interface IModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  classes?: string[];
  shouldCloseByClickOutside?: boolean;
  shouldCloseByClickOnChild?: boolean;
  shouldCloseByEsc?: boolean;
}

const stopPropagation = (event: SyntheticEvent) => event.stopPropagation();

export const ModalComponent: FC<IModalProps> = ({
  children,
  isOpen,
  onClose,
  classes,
  shouldCloseByClickOutside = true,
  shouldCloseByEsc = true,
  shouldCloseByClickOnChild = true,
}) => {
  const [containerEl, setContainerEl] = useState<ReactPortal | null>(null);

  const handleOutsideClick = () => {
    if (shouldCloseByClickOutside && onClose) onClose();
  };

  const handleChildClick = () => {
    if (shouldCloseByClickOnChild && onClose) onClose();
  };

  const escListener = (event: KeyboardEvent) => {
    if (event.code === "Escape" && shouldCloseByEsc && onClose) onClose();
  };

  useLayoutEffect(() => {
    const el = document.createElement("div");
    el.classList.add("modal-root");
    document.body.appendChild(el);
    document.addEventListener("keydown", escListener);

    setContainerEl(
      createPortal(
        <div
          className={cn(styles.wrapper, { [styles.open]: isOpen })}
          onClick={handleOutsideClick}
        >
          <div
            className={cn(styles.child, classes)}
            onClick={(e) => {
              stopPropagation(e);
              handleChildClick();
            }}
          >
            {children}
          </div>
        </div>,
        el,
      ),
    );

    if (isOpen) {
      document.body.classList.add("hidden");
    }

    return () => {
      document.body.removeChild(el);
      document.body.classList.remove("hidden");
      setContainerEl(null);
    };
  }, [isOpen]);

  return containerEl;
};
