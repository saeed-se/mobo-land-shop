import { useEffect, useRef, useState } from "react";

import { useFormContext } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const SignUpIdentity = () => {
  const firstNameRef = useRef(null);

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const nameRegister = register("name");

  useEffect(() => {
    firstNameRef.current?.focus();
  }, []);

  return (
    <>
      {/* Name */}
      <div>
        <label className="mb-1.5 block text-sm font-dana-Medium text-gray-700">
          نام و نام خانوادگی
        </label>

        <input
          {...nameRegister}
          ref={(element) => {
            nameRegister.ref(element);
            firstNameRef.current = element;
          }}
          type="text"
          placeholder="نام و نام خانوادگی"
          className="w-full rounded-lg border border-gray-300 px-4 py-1.5 outline-none transition focus:border-primary md:py-3 placeholder:text-xs md:placeholder:text-base"
        />

        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="mb-1.5 block text-sm font-dana-Medium text-gray-700">
          ایمیل
        </label>

        <input
          {...register("email")}
          type="email"
          placeholder="example@gmail.com"
          className="w-full rounded-lg border border-gray-300 px-4 py-1.5 outline-none transition focus:border-primary md:py-3 placeholder:text-xs md:placeholder:text-base"
        />

        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="mb-1.5 block text-sm font-dana-Medium text-gray-700">
          شماره موبایل
        </label>

        <input
          {...register("phone")}
          type="text"
          placeholder="09xxxxxxxxx"
          className="w-full rounded-lg border border-gray-300 px-4 py-1.5 font-sans outline-none transition focus:border-primary md:py-3 placeholder:text-xs md:placeholder:text-base"
        />

        {errors.phone && (
          <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="mb-1.5 block text-sm font-dana-Medium text-gray-700">
          رمز عبور
        </label>

        <div className="relative">
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="رمز عبور"
            className="w-full rounded-lg border border-gray-300 px-4 py-1.5 pl-12 outline-none font-sans transition focus:border-primary md:py-3 placeholder:text-xs md:placeholder:text-base"
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute left-5 top-2 cursor-pointer text-gray-500 transition-all hover:text-primary"
            aria-label={showPassword ? "مخفی کردن رمز عبور" : "نمایش رمز عبور"}
          >
            {showPassword ? (
              <IoEyeOffOutline size={20} />
            ) : (
              <IoEyeOutline size={20} />
            )}
          </button>
        </div>

        {errors.password && (
          <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div>
        <label className="mb-1.5 block text-sm font-dana-Medium text-gray-700">
          تکرار رمز عبور
        </label>

        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="تکرار رمز عبور"
          className="w-full rounded-lg border border-gray-300 px-4 py-1.5 outline-none transition focus:border-primary md:py-3 placeholder:text-xs md:placeholder:text-base"
        />

        {errors.confirmPassword && (
          <p className="mt-1 text-xs text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
    </>
  );
};

export default SignUpIdentity;
