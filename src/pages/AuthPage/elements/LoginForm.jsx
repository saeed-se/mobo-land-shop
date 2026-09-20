import { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

import { loginSchema } from "@/schemas/authSchema";
import { loginUser } from "@/services/auth";
import useAuth from "@/Hooks/useAuth";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const onSubmit = async (formData) => {
    try {
      const user = await loginUser(formData);
      login(user);
      toast.success("با موفقیت وارد شدید");
      navigate("/");
    } catch (error) {
      switch (error.message) {
        case "INVALID_CREDENTIALS":
          toast.error("ایمیل یا رمز عبور اشتباه است");
          break;
        case "ACCOUNT_DISABLED":
          toast.error("حساب کاربری شما غیرفعال شده است");
          break;
        default:
          toast.error("خطایی در ورود به حساب کاربری رخ داد");
      }
    }
  };
  return (
    <form
      className="space-y-4 *:[&>input]:font-sans"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label className="mb-1.5 block text-sm font-dana-Medium text-gray-700">
          ایمیل
        </label>

        <input
          {...register("email")}
          type="email"
          placeholder="example@gmail.com"
          className="w-full rounded-lg border placeholder:text-xs md:placeholder:text-base border-gray-300 px-4 py-3 outline-none transition focus:border-primary"
        />
        {errors.email && (
          <p className="mt-2 text-xs text-error">*{errors.email.message}</p>
        )}
      </div>

      <div className="relative">
        <label className="mb-1.5 block text-sm font-dana-Medium text-gray-700">
          رمز عبور
        </label>

        <input
          {...register("password")}
          type={showPassword ? "text" : "password"}
          placeholder="رمز عبور"
          className="w-full rounded-lg border placeholder:text-xs md:placeholder:text-base border-gray-300 px-4 py-3 outline-none transition focus:border-primary"
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute left-5 top-10.5 cursor-pointer text-gray-500 transition-all hover:text-primary"
          aria-label={showPassword ? "مخفی کردن رمز عبور" : "نمایش رمز عبور"}
        >
          {showPassword ? (
            <IoEyeOffOutline size={20} />
          ) : (
            <IoEyeOutline size={20} />
          )}
        </button>

        {errors.password && (
          <p className="mt-2 text-xs text-error">*{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-primary py-3 font-dana-Medium text-white transition hover:opacity-90 cursor-pointer"
        disabled={isSubmitting}
      >
        ورود
      </button>
    </form>
  );
};

export default LoginForm;
