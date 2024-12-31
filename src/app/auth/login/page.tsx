"use client";

import Button from "@/app/features/auth/components/Button";
import InputField from "@/app/features/auth/components/InputField";
import { useLoginForm } from "@/app/features/auth/hooks/useLoginForm";
import React from "react";

const Login = () => {
  const { form, onSubmit } = useLoginForm();
  return (
    <div className="mx-auto max-w-sm my-14">
      <h2 className="text-center font-medium text-2xl mb-4">ログイン</h2>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <InputField
          label="メールアドレス"
          type="email"
          placeholder="メールアドレス"
          name="email"
          register={form.register}
        />
        {form.formState.errors.email && (
          <p className="text-red-500">{form.formState.errors.email?.message}</p>
        )}
        <InputField
          label="パスワード"
          type="password"
          placeholder="パスワード"
          name="password"
          register={form.register}
        />
        {form.formState.errors.password && (
          <p className="text-red-500">
            {form.formState.errors.password?.message}
          </p>
        )}
        <div className="mt-4">
          <Button type="submit" colorClass="bg-blue-500">
            ログイン
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
