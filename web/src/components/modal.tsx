import {
  Dialog,
  TransitionChild,
  Transition,
  DialogPanel,
} from "@headlessui/react";
import CloseIcon from "#/images/icons/close.svg";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
  callback?: () => void;
  children: React.ReactNode;
  title?: string;
  disabled?: boolean;
}
export default function Modal({
  isOpen,
  setIsOpen,
  callback,
  children,
  disabled = false,
}: ModalProps) {
  function closeModal() {
    !disabled && setIsOpen(false);
    !disabled && callback && callback();
  }

  return (
    <Transition appear show={isOpen}>
      <Dialog
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={closeModal}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/50 backdrop-blur-sm">
          <div className="flex min-h-full items-center justify-center">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 transform-[scale(95%)]"
              enterTo="opacity-100 transform-[scale(100%)]"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 transform-[scale(100%)]"
              leaveTo="opacity-0 transform-[scale(95%)]"
            >
              <DialogPanel className="w-full max-w-3xl overflow-hidden rounded-xl border border-neutral-400 bg-stone-900 px-20 py-[60px] shadow-2xl backdrop-blur-xl">
                <div className="flex items-end justify-end">
                  <div onClick={closeModal} className="size-10 cursor-pointer">
                    <Image
                      src={CloseIcon}
                      width={17}
                      height={17}
                      alt="Close Modal"
                    />
                  </div>
                </div>
                {children}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
