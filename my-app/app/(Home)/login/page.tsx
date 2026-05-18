import { LoginForm } from "@/components/auth/LoginForm";
import AuthProvider from "@/lib/provider/AuthProvider";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Customer Login || Ecommerce Page",
  description: "Login for ecommerce customer page"
}
export default function Login() {
  return (
    <>
      <section className="flex max-w-7xl mx-auto my-10 flex-col gap-10">
        <div className="border-b border-b-gray-200 pb-5">
          <h1 className="text-4xl font-semibold text-teal-950">Login Page</h1>
        </div>

        <AuthProvider>
          <LoginForm />
        </AuthProvider>
      </section>
    </>
  );
}
