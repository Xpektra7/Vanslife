import { useState } from "react";
import { useLoaderData, Form, redirect } from "react-router-dom";
import { login } from "../api";

export async function loginLoader({ request }){
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }){
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const data = await login({email, password})
    return redirect("/host")
    
} 

export default function Login(){

    const message = useLoaderData();

    const [status,setStatus] = useState("idle")
    const [error,setError] = useState(null)


    return(
        <section className="flex flex-col items-center justify-center min-h-[80vh] gap-8 p-4 md:p-8 px:8 md:px-16">
            { message ? (
                <div className="p-2 text-red-500 font-bold text-center text-sm w-full md:w-[50vw] max-w-[540px]">
                    {message}
                </div>
            ) : null}
            <h1 className="text-3xl font-bold">Sign in to your account </h1>
            { error ? (
                <div className="p-2 text-red-500 font-bold text-center text-sm w-full md:w-[50vw] max-w-[540px]">
                    {error.message}
                </div>
            ) : null}
            <Form method="post" className=" w-full items-center flex flex-col gap-2 " >
                <input type="email" name="email" id="email" className="w-full md:w-[50vw] max-w-[540px] bg-whie p-1 border border-orange-500 outline-none" placeholder="Email Address" />
                <input type="password" name="password" id="password" className="w-full md:w-[50vw] max-w-[540px] bg-whie p-1 border border-orange-500 outline-none" placeholder="Password" />
                <button type="submit" disabled={status === "submitting"} className="p-2 flex flex-col w-full md:w-[50vw] max-w-[540px] items-center  clip-van text-white bg-neutral-900 hover:bg-orange-500 transition ease-in duration-300 cursor-pointer">
                    {status === "submitting" ? "Signing in..." : "Sign in" }
                    </button>
            </Form>
            <div className="flex flex-col items-center gap-2">
                <p className="">Don't have an account? <span className="text-orange-500">Create new one</span></p>
            </div>
        </section>
    )
}   