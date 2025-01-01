import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form"
import { signupFormSchema } from "../lib/formSchema";
import { z } from "zod";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation";
import { useState } from "react";


export const useSignupForm = () => {

    const [error, setError] = useState<string>("");

    const router = useRouter();
    const form = useForm<z.infer<typeof signupFormSchema>>({
        resolver: zodResolver(signupFormSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<z.infer<typeof signupFormSchema>> = async (data) => {
        const {username, email, password} = data;
        // signup
        try {
            const { data, error: signUpError } = await supabase.auth.signUp({
                email,
                password,
              })

            if (signUpError) {
                return;
            }

            const {error: userError} = await supabase.from("User").insert([{id: data.user?.id, username, email}])

            if (userError) {
                console.log(userError);
                if(userError.message.includes("unique constraint")){
                    setError(userError.message);
                }
                return;
            }

            router.push("/auth/login");
        } catch (err) {
            if(err instanceof Error){
                console.log(err.message)
            }
        }
    }

    return { form, onSubmit, error}
}
