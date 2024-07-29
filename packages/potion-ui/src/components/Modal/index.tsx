import React, { PropsWithChildren, ReactNode, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Button, IconButton } from "../Button";
import { IoCloseSharp } from "react-icons/io5";

export interface ModalProps {
  title: string;
  renderTrigger?: (openAction: () => void) => ReactNode;
}

type ChildProps = {
  closeModal: () => void;
};

export const Modal: React.FC<ModalProps & PropsWithChildren> = ({
  title,
  renderTrigger,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const childrenWithClose = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<ChildProps>, {
        closeModal: close,
      });
    }
    return child;
  });

  return (
    <>
      {renderTrigger ? (
        renderTrigger(open)
      ) : (
        <Button onClick={open} label="Open Modal">
          Open dialog
        </Button>
      )}

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-white border border-white-active flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl shadow-sm items-center justify-center backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="font-nunito-sans font-semibold text-lg sm:text-xl md:text-2xl"
              >
                {title}
              </DialogTitle>
              <div className="w-full h-px bg-white-active mt-2" />
              <div className="flex flex-col my-4 w-full">
                {childrenWithClose}
              </div>
              <IconButton
                className="absolute top-2 right-2"
                icon={IoCloseSharp}
                onClick={close}
                variant="transparent"
                size="large"
              />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
