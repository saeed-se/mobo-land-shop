import { createPortal } from "react-dom";

import { FaRegCommentDots } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

import useClickOutside from "@/Hooks/useClickOutside";
import useEscapeKey from "@/Hooks/useEscapeKey";
import useLockBodyScroll from "@/Hooks/useLockBodyScroll";

import ReviewForm from "./ReviewForm";

const ReviewModal = ({ isOpen, onClose, onSubmit, product }) => {
  const modalRef = useClickOutside(onClose);

  useLockBodyScroll(isOpen);
  useEscapeKey(onClose, isOpen);

  if (!isOpen) return null;

  return createPortal(
    <div className="animate-modal-overlay fixed inset-0 z-50 flex items-end justify-center bg-primary-text/50 backdrop-blur-sm sm:items-center sm:p-4">
      <div
        ref={modalRef}
        className="animate-modal-content flex max-xs:h-dvh w-full flex-col overflow-hidden bg-white shadow-2xl sm:max-w-lg sm:rounded-3xl"
      >
        <header className="relative shrink-0 overflow-hidden bg-linear-to-br from-primary to-secondary px-6 py-6 text-white">
          <div className="pointer-events-none absolute -top-10 -left-10 size-36 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -right-6 -bottom-12 size-28 rounded-full bg-white/10" />

          <button
            type="button"
            onClick={onClose}
            aria-label="close"
            className="absolute top-4 left-4 flex size-9 cursor-pointer items-center justify-center rounded-full bg-white/15 transition hover:bg-white/25"
          >
            <FaXmark size={16} />
          </button>

          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <FaRegCommentDots size={22} />
            </div>

            <div>
              <h2 className="font-dana-DemiBold text-lg max-xs:text-base">
                افزودن نظر
              </h2>
              <p className="mt-1 font-dana-Medium text-xs text-white/85">
                تجربه‌ات از این محصول رو با بقیه به اشتراک بگذار
              </p>
            </div>
          </div>
        </header>

        <ReviewForm product={product} onSubmit={onSubmit} onClose={onClose} />
      </div>
    </div>,
    document.body,
  );
};

export default ReviewModal;
