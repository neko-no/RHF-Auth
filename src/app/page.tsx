import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2 className="font-medium mb-5 text-3xl">Hello RHF & Zod</h2>
        <div className="flex gap-3">
          <Link
            href={"/auth/signup"}
            className="bg-red-500 py-3 px-5 rounded-md text-white hover:bg-red-600 duration-200"
          >
            新規登録
          </Link>
          <Link
            href={"/auth/login"}
            className="bg-blue-500 py-3 px-5 rounded-md text-white hover:bg-blue-600 duration-200"
          >
            ログイン
          </Link>
        </div>
      </main>
    </div>
  );
}
