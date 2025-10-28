"use client";

import { useEffect } from "react";
import clsx from "clsx";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../../../app/lib";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  disableOverlayClose?: boolean;
  showCloseButton?: boolean;
  alignTop?: boolean;
  fullWidth?: boolean;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  className = "",
  containerClassName = "",
  disableOverlayClose = false,
  showCloseButton = false,
  alignTop = false,
  fullWidth = false,
}: ModalProps) => {
  const modalRef = useOutsideClick(disableOverlayClose ? () => {} : onClose);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className={clsx(
        "fixed inset-0 z-50 flex justify-center overflow-y-auto",
        alignTop ? "items-start pt-4" : "items-center",
        className
      )}
    >
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black-900/50"
        onClick={disableOverlayClose ? undefined : onClose}
      />

      {/* Modal container */}
      <div
        ref={modalRef}
        className={clsx(
          "bg-gray-100 relative z-10 rounded-2xl p-6 shadow-lg",
          fullWidth ? "w-screen max-w-none" : "w-full max-w-md",
          containerClassName
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 text-gray-900 hover:text-gray-700"
          >
            X
          </button>
        )}
        {children}
      </div>
    </div>,
    document.body
  );
};
