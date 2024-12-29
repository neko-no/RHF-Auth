import InputField from "@/app/features/auth/components/InputField";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto max-w-sm my-14">
      <h2 className="text-center font-medium text-2xl mb-4">新規登録</h2>
      <form>
        <InputField />
        <InputField />
        <InputField />
        <div className="mt-4">
          <button>送信</button>
        </div>
      </form>
    </div>
  );
};

export default page;
