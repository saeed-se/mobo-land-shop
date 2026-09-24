import { useState } from "react";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useNavigate } from "react-router";

import CitySelect from "./CitySelect";
import SignUpIdentity from "./SignUpIdentity";

import { registerSchema } from "@/schemas/authSchema";
import { registerUser } from "@/services/auth";
import useAuth from "@/Hooks/useAuth";

const SignUpForm = () => {
  const [step, setStep] = useState(1);

  const navigate = useNavigate();
  const { login } = useAuth();

  const methods = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onSubmit",
    defaultValues: {
      city: "",
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const {
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors, isSubmitting },
  } = methods;

  const city = watch("city");

  const handleCityChange = (city) => {
    setValue("city", city, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handleNext = async () => {
    const isCityValid = await trigger("city");

    if (!isCityValid) {
      return;
    }

    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const onSubmit = async (formData) => {
    try {
      const user = await registerUser(formData);

      login(user);

      toast.success("حساب کاربری با موفقیت ایجاد شد");

      navigate("/");
    } catch (error) {
      switch (error.message) {
        case "EMAIL_ALREADY_EXISTS":
          toast.error("این ایمیل قبلاً ثبت شده است");
          break;

        default:
          toast.error("خطایی در ایجاد حساب کاربری رخ داد");
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 *:[&>input]:font-sans"
      >
        {step === 1 ? (
          <>
            <CitySelect value={city} onChange={handleCityChange} />

            {errors.city && (
              <p className="text-xs text-red-500">{errors.city.message}</p>
            )}

            <button
              type="button"
              onClick={handleNext}
              disabled={!city}
              className="w-full cursor-pointer rounded-lg bg-primary py-2 font-dana-Medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 md:py-3"
            >
              ادامه
            </button>
          </>
        ) : (
          <>
            <SignUpIdentity />

            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleBack}
                disabled={isSubmitting}
                className="w-1/3 cursor-pointer rounded-lg border border-gray-300 py-2 font-dana-Medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 md:py-3"
              >
                بازگشت
              </button>

              <button
                type="submit"
                className="w-full cursor-pointer rounded-lg bg-primary py-2 font-dana-Medium text-white transition hover:opacity-90 md:py-3"
                disabled={isSubmitting}
              >
                ایجاد حساب
              </button>
            </div>
          </>
        )}
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
