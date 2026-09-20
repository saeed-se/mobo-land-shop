import { z } from "zod";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "ایمیل خود را وارد کنید")
    .regex(emailRegex, "فرمت ایمیل صحیح نیست"),

  password: z.string().min(1, "رمز عبور خود را وارد کنید"),
});

export const registerSchema = z
  .object({
    city: z.string().trim().min(1, "شهر خود را انتخاب کنید"),

    name: z
      .string()
      .trim()
      .min(3, "نام و نام خانوادگی باید حداقل 3 کاراکتر باشد"),

    email: z
      .string()
      .trim()
      .min(1, "ایمیل را وارد کنید")
      .regex(emailRegex, "فرمت ایمیل صحیح نیست"),

    phone: z
      .string()
      .trim()
      .regex(/^09\d{9}$/, "شماره موبایل معتبر نیست"),

    password: z
      .string()
      .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")
      .regex(/[a-z]/, "رمز عبور باید حداقل یک حرف کوچک انگلیسی داشته باشد")
      .regex(/[A-Z]/, "رمز عبور باید حداقل یک حرف بزرگ انگلیسی داشته باشد")
      .regex(/\d/, "رمز عبور باید حداقل یک عدد داشته باشد")
      .regex(/[^A-Za-z0-9]/, "رمز عبور باید حداقل یک کاراکتر ویژه داشته باشد"),

    confirmPassword: z.string().min(1, "تکرار رمز عبور را وارد کنید"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "تکرار رمز عبور با رمز عبور یکسان نیست",
    path: ["confirmPassword"],
  });
