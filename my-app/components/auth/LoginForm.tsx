'use client';
import { ICredentials, LoginSchema } from "@/types/AuthType";
import { useForm } from "react-hook-form"
import { TextInput } from "../ui/form/Input";
import { CancelButton, SubmitButton } from "../ui/button/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/lib/hook/useAuth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


export const LoginForm = () => {
  const {control, handleSubmit, formState: {errors, isSubmitting}} = useForm({
    defaultValues: {
      username: "",
      password: ""
    },
    resolver: zodResolver(LoginSchema)
  })
  const router = useRouter()

  const {login} = useAuth()

  const submitForm = async (data: ICredentials) => {
    try {
      const userDetail = await login(data)
      toast.success("Welcome to admin")
      router.push("/cms")   // redirect
    } catch {
      toast.error("Error while login")
    }
  }
  return (<>
    <form onSubmit={handleSubmit(submitForm)} className="flex flex-col w-full p-5 gap-5">
      <div className="flex items-center">
        <label htmlFor="username" className="w-1/3 text-lg font-semibold">Username: </label>
        <div className="w-2/3">
          <TextInput type="text" control={control} name="username" errMsg={errors?.username?.message} />
        </div>
      </div>

      <div className="flex items-center">
        <label htmlFor="password" className="w-1/3 text-lg font-semibold">Password: </label>
        <div className="w-2/3">
          <TextInput type="password" control={control} name="password" errMsg={errors?.password?.message} />
        </div>
      </div>

      <div className="flex items-center gap-5">
        <CancelButton disabled={isSubmitting}>Cancel</CancelButton>
        <SubmitButton disabled={isSubmitting}>Login</SubmitButton>
      </div>
    </form>
  </>)
}