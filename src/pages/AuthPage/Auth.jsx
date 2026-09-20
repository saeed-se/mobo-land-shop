import { useState } from "react";

import LoginForm from "@/pages/AuthPage/elements/LoginForm";
import SignUpForm from "@/pages/AuthPage/elements/SignUpForm";

const Auth = () => {
  const [mode, setMode] = useState("login");

  const isLogin = mode === "login";

  return (
    <main className="min-h-screen bg-primary flex items-center justify-center">
      <div className="w-80 xs:w-90 md:w-110 px-3 py-6 md:p-6 rounded-2xl bg-white shadow-xl">
        {/* Logo */}
        <div className="w-38 mx-auto">
          <img src="/moboland-logo.png" alt="logo" />
        </div>

        {/* Header */}
        <div className="px-6 pt-8 text-center">
          <h1 className="md:text-xl font-dana-Medium text-gray-800">
            {isLogin ? "خوش اومدی :)" : "ایجاد حساب کاربری"}
          </h1>

          <p className="mt-2 text-xs md:text-sm text-gray-500">
            {isLogin
              ? "برای ورود به حساب خود اطلاعاتتان را وارد کنید"
              : "برای ایجاد حساب جدید اطلاعاتتان را وارد کنید"}
          </p>
        </div>

        {/* Switch */}
        <div className="mx-6 mt-6 flex rounded-xl bg-gray-100 p-1">
          <button
            type="button"
            onClick={() => setMode("login")}
            className={`flex-1 rounded-lg py-2.5 text-sm font-dana-Medium cursor-pointer transition-all duration-300 ${
              isLogin ? "bg-white text-success shadow-sm" : "text-gray-500"
            }`}
          >
            ورود
          </button>

          <button
            type="button"
            onClick={() => setMode("signup")}
            className={`flex-1 rounded-lg py-2.5 text-sm font-dana-Medium cursor-pointer transition-all duration-300 ${
              !isLogin ? "bg-white text-success shadow-sm" : "text-gray-500"
            }`}
          >
            ثبت نام
          </button>
        </div>

        {/* Forms */}
        <div className="relative mt-6 px-6 pb-6">
          <div key={mode} className="animate-auth-form">
            {isLogin ? <LoginForm /> : <SignUpForm />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Auth;
