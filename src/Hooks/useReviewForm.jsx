import { useState } from "react";

import { toast } from "sonner";

import { MIN_LENGTH } from "@/constants/reviewConstants";

const validate = ({ rating, text }) => {
  const errors = {};

  if (!rating) errors.rating = "لطفاً امتیاز خود را انتخاب کنید.";

  if (text.trim().length < MIN_LENGTH)
    errors.text = `متن نظر باید حداقل ${MIN_LENGTH} کاراکتر باشد.`;

  return errors;
};

const useReviewForm = ({ onSubmit, onClose }) => {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clearError = (field) =>
    setErrors((prev) => ({ ...prev, [field]: undefined }));

  const changeRating = (value) => {
    setRating(value);
    clearError("rating");
  };

  const changeText = (value) => {
    setText(value);
    clearError("text");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const newErrors = validate({ rating, text });
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      setIsSubmitting(true);
      await onSubmit({ rating, text: text.trim() });
      onClose();
    } catch {
      toast.error("ثبت نظر با مشکل مواجه شد، دوباره تلاش کنید");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    rating,
    text,
    errors,
    isSubmitting,
    changeRating,
    changeText,
    handleSubmit,
  };
};

export default useReviewForm;
