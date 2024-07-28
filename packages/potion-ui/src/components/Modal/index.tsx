import React, { PropsWithChildren, useState } from "react";
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
}

export const Modal: React.FC<ModalProps & PropsWithChildren> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Button onClick={open} label="Open Modal">
        Open dialog
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 z-10 w-fit m-auto overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="relative w-full bg-white border border-white-active flex flex-col p-10 rounded-xl shadow-sm items-center justify-center backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="font-nunito-sans font-semibold text-xl"
              >
                {title}
              </DialogTitle>
              <div className="w-full h-px bg-white-active mt-2" />
              <div className="flex flex-col my-4">{children}</div>
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
