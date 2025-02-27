import { z } from "zod";

export const signupFormSchema = z.object({
    username: z.string().min(2, {message: "ユーザー名は2文字以上で入力してください"}),
    email: z.string().email({message: "メールアドレスが正しくありません"}),
    password: z.string().min(2, {message: "パスワードは2文字以上で入力してください"}).max(10, {message: "パスワードは10文字以下で入力してください"}),
})

export const loginFormSchema = z.object({
    email: z.string().email({message: "メールアドレスが正しくありません"}),
    password: z.string().min(2, {message: "パスワードは2文字以上で入力してください"}).max(10, {message: "パスワードは10文字以下で入力してください"}),
})

