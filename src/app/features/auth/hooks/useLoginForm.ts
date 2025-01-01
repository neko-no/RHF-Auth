import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form"
import { loginFormSchema } from "../lib/formSchema";
import { z } from "zod";
import { supabase } from "../lib/supabaseClient";
import { useState } from "react";
import { useRouter } from "next/navigation";


export const useLoginForm = () => {
    const router = useRouter();
    const [error, setError] = useState<string>("");
    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<z.infer<typeof loginFormSchema>> = async (data) => {
        const {email, password} = data;
        try {
            const { error: signInError } = await supabase.auth.signInWithPassword({
                email,
                password,
              })

            if (signInError) {
                if(signInError.status === 400){
                    setError("ユーザーが存在しません");
                }
                return;
            }

            router.push("/");
        } catch (err) {
            if(err instanceof Error){
                console.log(err.message)
            }
        }
    }

    return { form, onSubmit, error}
}
